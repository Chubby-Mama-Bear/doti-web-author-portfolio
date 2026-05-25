# DOTI Web Content Change Request — Workflow Governance Refinement and CMS Asset Lifecycle Edge Case

## Context

Continued refinement of the DOTI ROWS Web Content Change Request intake workflow following real-world submission activity and stakeholder rollout coordination.

During live workflow usage, a request involving Floodplain Permit documentation exposed an operational edge case involving:

- outdated webpage document references
- existing approved CMS document assets
- duplicate published document records
- CMS asset lifecycle handling
- governance routing semantics
- direct URL accessibility behavior

The scenario required operational validation across OpenCities CMS publishing behavior, RIT governance review expectations, and public document lifecycle management.

---

## Problem Identified

The existing intake workflow categorized all document replacement/upload requests under the same governance review routing path.

However, a live submission revealed an important operational distinction between:

- uploading/replacing a new or revised document requiring governance review
vs.
- updating a webpage reference to an already existing approved/published CMS document asset

Additional ambiguity was identified around:

- "broken link" terminology versus outdated document references
- CMS asset versioning versus creation of separate published document assets
- public accessibility behavior of archived document URLs
- governance traceability versus permanent deletion of historical assets
- operational ownership boundaries between CMS administration and governance review workflows

The issue was further complicated because the newer Floodplain Permit document had previously been created as a separate published CMS document asset rather than as a new version of the existing asset, resulting in two simultaneously accessible published document URLs.

---

## Actions Taken

- Investigated the Floodplain Permit submission workflow and validated OpenCities CMS asset state directly within the CMS
- Confirmed that the newer document already existed as an active published CMS asset
- Identified that the older and newer PDFs existed as separate published document records rather than version history of the same asset
- Validated public URL behavior, direct asset accessibility, and CMS publication status
- Updated the SUDP webpage reference to point to the newer approved document asset
- Archived the outdated document asset within OpenCities CMS
- Coordinated with Web Administration regarding:
  - archive behavior
  - cache persistence
  - direct URL lifecycle handling
  - traceability considerations
  - permanent deletion expectations
- Confirmed that archived document URLs may remain temporarily accessible due to browser/network caching before eventually returning 404 responses
- Communicated operational findings and expected URL behavior back to the requestor
- Proposed refinement to intake routing semantics to better distinguish:
  - new/revised document submissions
  - existing approved CMS document references

---

## Governance / Workflow Decisions

The workflow edge case demonstrated that "Replace or upload document" was too broad operationally because it combined multiple governance scenarios into a single routing category.

The routing logic was refined conceptually to distinguish between:

### Requests requiring RIT governance review:
- Replace or upload document — new or revised document version
- Add new content

### Requests routing directly to ROWS Webmaster workflow:
- Replace or update link to existing approved document
- Update existing text
- Remove outdated content
- Fix broken link
- Accessibility or formatting update
- Other

This refinement improved operational clarity between:

- governance review workflows
- CMS asset lifecycle handling
- webpage reference management
- existing approved asset usage
- public document maintenance activities

The investigation also reinforced the importance of:

- validating CMS asset lineage rather than relying solely on public URLs
- maintaining archived assets for operational traceability
- distinguishing asset versioning from creation of separate published document records
- treating governance workflow design as iterative and responsive to real operational edge cases

---

## Stakeholder Coordination

Coordinated operational clarification and governance handling across:

- Jeremy Hamer
- Kelsey Kijowski
- Sarah Stanek
- Web Administration stakeholders
- RIT stakeholders
- ROWS operational stakeholders

Stakeholder communication included:

- clarification of CMS archive behavior
- governance review expectations
- URL lifecycle handling
- routing workflow semantics
- cache persistence behavior
- operational ownership boundaries

---

## Outcome

The workflow refinement process resolved the immediate public document issue while also improving the long-term governance clarity of the intake workflow.

The operational review:

- clarified CMS asset lifecycle behavior
- improved governance routing semantics
- reduced ambiguity between document governance and webpage maintenance activities
- strengthened operational understanding of OpenCities publishing behavior
- established cleaner distinction between approved CMS assets and new governance review submissions
- reinforced scalable governance-aware workflow design prior to formal go-live rollout

The edge case also demonstrated how real-world operational usage can expose hidden workflow ambiguities that are not always visible during initial workflow planning discussions.

---

## Operational Insight

Enterprise workflow ambiguity often emerges not from technical failures, but from unclear operational semantics between governance categories.

This scenario demonstrated the importance of distinguishing between:

- content governance
- CMS asset management
- webpage reference maintenance
- document lifecycle handling
- public accessibility behavior
- operational traceability requirements

The investigation reinforced that reliable governance workflows require both:

- structured intake/routing logic
and
- operational understanding of downstream CMS publishing behavior and asset lifecycle management.
