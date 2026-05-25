# 2026-05-12 — RIT Routing Governance Redesign

## Context

Continued refinement of the DOTI Web Content Change Request intake workflow within OpenForms to improve governance-aware routing between ROWS Webmaster operations and the Regulatory Innovation Team (RIT).

Cross-team stakeholder review identified concerns regarding reliance on user-selected RIT review status fields and the potential for governance ambiguity during document-related update requests.

---

## Problem Identified

The original intake workflow required requestors to manually indicate whether document updates had already been reviewed by RIT.

This created several operational risks:

- Requestors may incorrectly interpret internal governance requirements
- Unreviewed document updates could bypass intended RIT review workflows
- Routing behavior depended on user interpretation instead of enforced workflow logic
- Intake UX introduced unnecessary governance decision points for non-technical users

Additional workflow friction was caused by unclear OpenForms routing terminology and non-intuitive transition configuration behavior.

---

## Actions Taken

Redesigned the intake routing architecture to eliminate manual RIT review-state selection logic.

Implemented conditional routing rules based on request type instead:

- Requests selecting:
  - "Replace or upload document"
  - "Add new content"

  are automatically routed to RIT review workflows.

- All other request types route directly to the ROWS Webmaster workflow.

Additional workflow improvements included:

- Simplified request readiness confirmation language
- Standardized request priority categories
- Refined operational wording to reduce interpretation ambiguity
- Updated intake structure based on cross-team governance feedback

---

## Governance / Workflow Decisions

Shifted governance enforcement from user interpretation into workflow-controlled routing logic.

This redesign reduced dependence on:
- manual requestor judgment
- review-state self-attestation
- operational process awareness from end users

The updated architecture embedded governance requirements directly into workflow behavior while simplifying intake UX.

Request priority categories were also standardized into:
- Urgent — requested completion within 2 business days
- Non-Urgent — requested completion within 5 business days

to improve intake consistency and operational expectation management.

---

## Stakeholder Coordination

Collaborated with:
- Regulatory Innovation Team (RIT)
- ROWS Webmaster stakeholders

Cross-team feedback sessions surfaced:
- governance enforcement concerns
- workflow ownership boundary considerations
- routing clarification needs
- intake edge-case scenarios

Draft workflow updates and revised routing logic were distributed for stakeholder review and testing.

---

## Outcome

Successfully transitioned intake routing from manually declared review-state logic to automated conditional governance routing.

The updated workflow:
- simplified requestor experience
- reduced governance ambiguity
- improved routing consistency
- aligned intake behavior more closely with operational ownership boundaries

Additional stakeholder feedback was initiated regarding large-scale multi-page update scenarios and URL validation requirements.

---

## Operational Insight

This workflow iteration reinforced the operational value of embedding governance enforcement directly into system behavior rather than relying on user interpretation of internal review processes.

The experience also highlighted how working prototypes significantly improve cross-team feedback quality by exposing hidden operational assumptions that are difficult to identify during abstract process discussions alone.
