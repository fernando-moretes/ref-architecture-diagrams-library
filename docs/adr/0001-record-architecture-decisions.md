# 1. Record architecture decisions

- **Status:** accepted
- **Date:** 2026-05-15
- **Deciders:** Fernando Francisco Azevedo

## Context and Problem Statement

We need a lightweight, version-controlled mechanism to record significant
technical decisions taken in this repository.

## Decision

Adopt the [MADR](https://adr.github.io/madr/) template, stored under
`docs/adr/` and numbered sequentially.

## Consequences

- Decisions become reviewable through Git history.
- New contributors can read the decision chain to understand context.
- ADRs become first-class artifacts in the project's portfolio narrative.
