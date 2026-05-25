import { FormEvent, useMemo, useState } from 'react';

type StructuredIdea = {
  idea_id: string;
  title: string;
  summary: string;
  tags: string[];
  priority: 'low' | 'medium' | 'high';
  source: 'manual_intake';
  submitted_at: string;
};

type ValidationResult = {
  valid: boolean;
  errors: string[];
};

const mockIdeaStore = new Map<string, StructuredIdea>();

const WORKFLOW_STEPS = [
  '1) Intake form captures raw idea text from user.',
  '2) App generates stable mock idea_id from text fingerprint.',
  '3) App normalizes raw idea into structured fields.',
  '4) App validates structured fields against a mock schema.',
  '5) App checks local in-memory store for existing idea_id.',
  '6) If found, app updates existing record.',
  '7) If not found, app creates a new record.',
  '8) App displays final normalized JSON output.'
];

const createStableIdeaId = (rawIdea: string): string => {
  const clean = rawIdea.trim().toLowerCase();
  let hash = 0;

  for (let i = 0; i < clean.length; i++) {
    hash = (hash * 31 + clean.charCodeAt(i)) >>> 0;
  }

  return `idea_${hash.toString(16).padStart(8, '0')}`;
};

const normalizeIdea = (rawIdea: string, ideaId: string): StructuredIdea => {
  const sentences = rawIdea
    .split(/[.!?]/)
    .map((segment) => segment.trim())
    .filter(Boolean);

  const title = sentences[0]?.slice(0, 80) || 'Untitled Idea';
  const summary = rawIdea.trim();
  const tags = summary
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length >= 5)
    .slice(0, 5);

  return {
    idea_id: ideaId,
    title,
    summary,
    tags: Array.from(new Set(tags)),
    priority:
      summary.length > 180 ? 'high' : summary.length > 80 ? 'medium' : 'low',
    source: 'manual_intake',
    submitted_at: new Date().toISOString()
  };
};

const validateIdeaSchema = (idea: StructuredIdea): ValidationResult => {
  const errors: string[] = [];

  if (!idea.idea_id.startsWith('idea_')) {
    errors.push('idea_id must start with "idea_"');
  }

  if (!idea.title.trim()) {
    errors.push('title is required');
  }

  if (!idea.summary.trim()) {
    errors.push('summary is required');
  }

  if (!Array.isArray(idea.tags)) {
    errors.push('tags must be an array');
  }

  if (!['low', 'medium', 'high'].includes(idea.priority)) {
    errors.push('priority must be low, medium, or high');
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

const persistIdea = (idea: StructuredIdea) => {
  const alreadyExists = mockIdeaStore.has(idea.idea_id);
  mockIdeaStore.set(idea.idea_id, idea);

  return {
    action: alreadyExists ? 'updated' : 'created',
    record: idea,
    storeSize: mockIdeaStore.size
  } as const;
};

export function App() {
  const [rawIdea, setRawIdea] = useState('');
  const [result, setResult] = useState<StructuredIdea | null>(null);
  const [message, setMessage] = useState('Submit an idea to run the workflow.');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const mockStoreCount = useMemo(() => mockIdeaStore.size, [result]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!rawIdea.trim()) {
      setMessage('Please enter an idea before submitting.');
      setValidationErrors(['raw idea input cannot be empty']);
      return;
    }

    const ideaId = createStableIdeaId(rawIdea);
    const normalized = normalizeIdea(rawIdea, ideaId);
    const validation = validateIdeaSchema(normalized);

    if (!validation.valid) {
      setMessage('Schema validation failed.');
      setValidationErrors(validation.errors);
      setResult(normalized);
      return;
    }

    const persisted = persistIdea(normalized);
    setResult(persisted.record);
    setValidationErrors([]);
    setMessage(`Idea ${persisted.action} successfully (${persisted.record.idea_id}).`);
  };

  return (
    <main className="page">
      <section className="card">
        <h1>n8n Workflow → React TypeScript Prototype</h1>
        <p className="muted">
          Demonstrates translating workflow logic into readable app code with
          local in-memory data only.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="rawIdea">Raw idea intake</label>
          <textarea
            id="rawIdea"
            value={rawIdea}
            onChange={(event) => setRawIdea(event.target.value)}
            placeholder="Example: Build a weekly AI newsletter generator for indie makers..."
            rows={6}
          />
          <button type="submit">Run Workflow</button>
        </form>

        <p className="status">{message}</p>

        {validationErrors.length > 0 && (
          <div className="errorBox">
            <strong>Validation issues:</strong>
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="card">
        <h2>Workflow Mapping (n8n → App)</h2>
        <ol className="mappingList">
          {WORKFLOW_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="muted">Current in-memory record count: {mockStoreCount}</p>
      </section>

      <section className="card">
        <h2>Final Normalized JSON Output</h2>
        <pre>{JSON.stringify(result, null, 2) || 'No output yet.'}</pre>
      </section>
    </main>
  );
}
