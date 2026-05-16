# Architecture Diagrams Library

A curated catalog of architecture diagrams as code: AWS reference designs, C4
model layers, BPMN business processes, event-driven topologies, sequence and
state diagrams — all reproducible from version-controlled source.

![CI](https://github.com/fernandofatech/architecture-diagrams-library/actions/workflows/ci.yml/badge.svg)
![Frontend](https://github.com/fernandofatech/architecture-diagrams-library/actions/workflows/frontend.yml/badge.svg)
![Security](https://github.com/fernandofatech/architecture-diagrams-library/actions/workflows/security.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

## Live portfolio / Portfolio ao vivo

- **Production:** [Architecture Diagrams Library](https://diagrams.moretes.com)
- **Documentation:** [Project docs](docs/architecture.md)
- **GitHub:** [fernandofatech/architecture-diagrams-library](https://github.com/fernandofatech/architecture-diagrams-library)
- **Author:** [Fernando Francisco Azevedo](https://fernando.moretes.com) · [LinkedIn](https://www.linkedin.com/in/fernando-francisco-azevedo/) · [GitHub](https://github.com/fernandofatech)

This public repository is part of a bilingual portfolio focused on solution
architecture, AWS, AI, MCP/tooling, DevSecOps, and production-ready engineering
practices.

Este repositório público faz parte de um portfólio bilíngue focado em
arquitetura de soluções, AWS, IA, MCP/tools, DevSecOps e boas práticas de
engenharia para produção.

## What it includes

- **AWS architectures** rendered with Mermaid and `diagrams` (Python).
- **C4 Model** — Context, Container, Component and Code diagrams.
- **BPMN** business process flows.
- **Event-driven** topologies (EventBridge, SNS/SQS, Kafka).
- **Sequence and state** diagrams via Mermaid and PlantUML.
- **Snippets** ready to copy into ADRs, RFCs and architecture docs.

## Why this matters

A diagram that lives only as a screenshot rots fast. Treating diagrams as
code keeps them reviewable in pull requests, diffable across versions, and
embeddable in documentation pipelines — the same discipline applied to
infrastructure should apply to its visual representations.

## Tech stack

- Next.js 16 (App Router) + React 19 · TypeScript 5 · Tailwind CSS 4
- Mermaid, PlantUML and `diagrams` (Python) for source files
- GitHub Actions (CI, Frontend, Vercel, Security)
- Deployed on Vercel · DNS via Cloudflare

## Run locally

```bash
cd frontend
npm install
npm run dev
```

## Operations

See [OPERATIONS.md](OPERATIONS.md) and [SETUP.md](SETUP.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) — Copyright © 2026 Fernando Francisco Azevedo.
