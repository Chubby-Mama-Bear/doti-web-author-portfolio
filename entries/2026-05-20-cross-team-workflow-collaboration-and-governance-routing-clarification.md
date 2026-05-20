# Cross-Team Workflow Collaboration and Governance Routing Clarification

## Context

Continued refinement of the DOTI ROWS Webmaster intake workflow and supporting SOP collaboration process for OpenForms-based web content change requests. Work focused on governance-aware routing behavior, stakeholder clarification, and cross-team collaboration structure between ROWS Webmaster operations and RIT review coordination.

## Problem Identified

Stakeholder review feedback introduced concerns regarding:
- RIT routing visibility
- downstream notification behavior
- user follow-up expectations
- attachment handling
- collaboration structure for shared SOP maintenance

Some feedback reflected assumptions from the earlier workflow model prior to implementation of automated governance-aware routing logic.

Additional collaboration friction was identified around maintaining and reviewing SOP documentation through email attachments and fragmented feedback loops.

## Actions Taken

- Reviewed stakeholder feedback regarding OpenForms routing behavior and notification concerns
- Validated that the implemented workflow already automated routing logic based on request type selection
- Confirmed that:
  - only “Replace or upload document” and “Add new content” requests route to RIT
  - all other request types route directly to the Webmaster workflow
- Validated that routed submissions automatically receive:
  - “RIT review needed” subject line labeling
  - attachment forwarding through routed submission emails
- Confirmed that the post-submission messaging already reduced user ambiguity by:
  - acknowledging request receipt
  - clarifying that team follow-up would occur only if additional information was needed
- Verified that the URL field had already been updated to optional to support broader multi-page update requests
- Clarified operational workflow behavior in stakeholder response email while maintaining collaborative internal communication tone
- Evaluated collaboration platform options for maintaining shared SOP documentation, including:
  - SharePoint/DenverHub page structure
  - shared OneNote collaboration workspace
  - Teams channel structure
- Rejected Teams channel approach due to unnecessary coordination overhead and participation complexity for intermittent collaboration needs
- Proposed lightweight shared OneNote collaboration model to reduce operational friction
- Created and shared shared “ROWS Webmaster” OneNote collaboration notebook with stakeholders

## Governance / Workflow Decisions

- Preserved automated governance-aware routing model to reduce user decision ambiguity
- Maintained backend routing abstraction so requestors do not need to understand internal RIT governance structure
- Preserved required fields and structured intake validation to reduce incomplete requests and operational variability
- Chose low-friction asynchronous collaboration workspace over heavier team/channel structure
- Prioritized operational simplicity and adoption usability over unnecessary formalization

## Stakeholder Coordination

Collaborated with:
- Chris Baca (RIT)
- Kelsey Kijowski (RIT)
- Mike Michalkiewicz (Survey/Webmaster collaboration)

Coordination included:
- workflow clarification
- routing visibility discussion
- SOP collaboration structure planning
- operational tradeoff discussion
- collaborative response drafting and clarification

## Outcome

- Governance-aware OpenForms routing workflow remained operationally validated and aligned with prior stakeholder governance objectives
- Stakeholder clarification successfully re-centered discussion on updated workflow architecture
- Shared OneNote collaboration environment established for ongoing SOP and workflow coordination
- Reduced future collaboration friction by centralizing shared workflow documentation outside fragmented email attachments

## Operational Insight

This workflow iteration reinforced the importance of:
- designing around actual user behavior rather than idealized process compliance
- reducing operational ambiguity through backend automation instead of additional user instructions
- separating governance complexity from requestor-facing intake experience
- translating stakeholder concerns into workflow clarifications without introducing collaboration friction
- selecting collaboration tooling proportional to actual operational coordination needs
