# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

`architecture-diagrams-library` curates reproducible architecture diagrams: AWS
designs, C4 model layers, BPMN flows, event-driven topologies, sequence and
state diagrams — written as Mermaid, PlantUML or `diagrams` (Python) source so
they are diffable and reviewable. The frontend at `diagrams.moretes.com` is a
showcase that renders the catalog.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS 4
- Mermaid (client-side rendering candidates)
- GitHub Actions: CI, Frontend, Vercel, Security

## Development commands

```bash
cd frontend
npm install
npm run dev
npm run build
npm run lint
```

## Repository layout

- `frontend/app/` — landing page and catalog pages
- `docs/diagrams/` — source diagrams grouped by family (aws/, c4/, bpmn/, …)
- `docs/adr/` — decisions about diagram conventions and tooling
- `.github/workflows/` — CI/CD/security pipelines

## Conventions

- One source per diagram (`.mmd`, `.puml` or `.py`) in `docs/diagrams/<family>/`.
- File names use kebab-case and include the system name + scope.
- Each diagram has a sibling `README.md` describing intent and audience.
- No binary exports committed — everything renders from source.
