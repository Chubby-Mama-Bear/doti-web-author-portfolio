# 2026-05-05 — Conditional Routing & Governance Architecture

## Context

The OpenForms Web Content Change Request workflow required governance-aware routing behavior to prevent unreviewed submissions from being sent directly to the ROWS Webmaster mailbox prior to Regulatory Innovation Team (RIT) review.

Workflow behavior also required clarification due to fragmented platform terminology and non-intuitive transition logic inside OpenForms.

---

## Problem Identified

Several operational and governance risks were identified:

- Unreviewed submissions could bypass RIT review workflows
- Intake routing behavior lacked deterministic review-state handling
- Workflow transitions and notification logic were difficult to interpret within OpenForms
- Governance review state and authorization confirmation were not clearly separated
- Immediate publication without validation increased operational deployment risk

---

## Actions Taken

Expanded OpenForms Draft V2 into a governance-aware conditional routing workflow architecture.

Implemented and refined:

- Conditional routing separation between reviewed and unreviewed submissions
- RIT pre-validation workflow routing behavior
- Single-selection radio-button review-state structure
- Deterministic workflow-state handling
- Transition and notification routing logic
- Governance-aligned intake terminology and labeling
- Controlled rollout and stakeholder validation planning

Reverse engineered OpenForms workflow behavior by mapping transitions, conditions, reviewer queues, and notifications into operational workflow-state models familiar from automation platforms such as n8n.

Established routing behavior so that:

- "Reviewed and approved by RIT" submissions route directly to the ROWS Webmaster mailbox
- "Not reviewed by RIT" submissions route exclusively to RIT review queues

---

## Outcome

Successfully transformed the intake workflow from a static submission form into a governance-aware routing architecture supporting differentiated intake processing paths.

The updated workflow:

- Reduces unnecessary Webmaster intake traffic
- Establishes structured pre-validation review
- Improves workflow predictability
- Simplifies downstream routing logic
- Strengthens governance-state clarity
- Reduces operational deployment risk through staged validation planning

---

## Key Operational Concepts

- Conditional workflow routing
- Governance-based intake segmentation
- Workflow-state architecture
- Transition and notification logic
- Deterministic review-state handling
- Controlled deployment validation
- Reviewer queue separation
- Operational workflow debugging

---

## Stakeholders Involved

- ROWS Webmaster team
- Regulatory Innovation Team (RIT)
- RIT supervisory stakeholder
- Web Author / Form creator

---

## Future Follow-Up

- Conduct stakeholder routing validation session with RIT supervisor
- Validate workflow behavior prior to production publication
- Evaluate future automation and workflow expansion opportunities
- Assess additional governance-state routing scenarios for future workflow versions

---

## Notes

Observed that workflow configuration difficulty within OpenForms was caused primarily by fragmented UI abstraction and terminology separation rather than technical workflow complexity itself.

This implementation expanded the intake process from basic form submission into a governance-oriented workflow routing model supporting operational review separation and staged validation practices.
