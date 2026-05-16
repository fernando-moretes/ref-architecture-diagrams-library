# Architecture

`architecture-diagrams-library` is a documentation-first project: the heart of
the repo is the source of each diagram under `docs/diagrams/`. The Next.js
frontend is a showcase that organizes and links to those sources.

## Components

- **Diagram sources** under `docs/diagrams/<family>/` — Mermaid (`.mmd`),
  PlantUML (`.puml`) or `diagrams` (Python) scripts.
- **Frontend (Next.js 16):** the catalog browser and embeddable renderer.
- **Docs (`docs/`):** ADRs and architecture notes.
- **CI/CD:** validate, build, scan, deploy.
- **Hosting:** Vercel; DNS via Cloudflare for `diagrams.moretes.com`.

## Diagram families

- `aws/` — AWS reference architectures.
- `c4/` — Context, Container, Component, Code.
- `bpmn/` — Business processes with lanes and gateways.
- `event-driven/` — EventBridge, SNS/SQS, Kafka.
- `sequence/` — Mermaid sequence diagrams.
- `state/` — State machines.

## Roadmap

1. Bootstrap one canonical example per family.
2. Add a `/render` route that renders Mermaid client-side from `?src=` query.
3. Wire a CI check that fails when a `.mmd`/`.puml` file fails to parse.
