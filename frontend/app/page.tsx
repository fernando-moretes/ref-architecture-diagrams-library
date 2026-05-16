import { Cloud, Boxes, Workflow, Zap, MessageSquare, Activity } from "lucide-react";

const families = [
  {
    icon: Cloud,
    title: "AWS Architectures",
    description: "Reference designs rendered with Mermaid and the diagrams Python lib.",
  },
  {
    icon: Boxes,
    title: "C4 Model",
    description: "Context, Container, Component and Code diagrams in PlantUML / Mermaid.",
  },
  {
    icon: Workflow,
    title: "BPMN",
    description: "Business process flows with swimlanes and gateways.",
  },
  {
    icon: Zap,
    title: "Event-Driven",
    description: "EventBridge, SNS/SQS and Kafka topologies as code.",
  },
  {
    icon: MessageSquare,
    title: "Sequence Diagrams",
    description: "Mermaid sequence diagrams for synchronous and async flows.",
  },
  {
    icon: Activity,
    title: "State Machines",
    description: "Stateflow diagrams for Step Functions and saga orchestrations.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-10">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-emerald-400">
          Portfolio · Solution Architecture
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl">Architecture Diagrams Library</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          A curated catalog of diagrams as code — AWS designs, C4 layers, BPMN,
          event-driven topologies, sequences and state machines — all
          reproducible, diffable and reviewable in pull requests.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/fernandofatech/architecture-diagrams-library"
            className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            View on GitHub
          </a>
          <a
            href="https://fernando.moretes.com"
            className="rounded-md border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
          >
            Portfolio
          </a>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-2xl font-semibold">Diagram families</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {families.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <f.icon className="h-6 w-6 text-emerald-400" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-5xl border-t border-slate-800 pt-8 text-sm text-slate-400">
        <p>
          Built by{" "}
          <a className="text-emerald-300 hover:underline" href="https://fernando.moretes.com">
            Fernando Francisco Azevedo
          </a>{" "}
          ·{" "}
          <a
            className="text-emerald-300 hover:underline"
            href="https://www.linkedin.com/in/fernando-francisco-azevedo/"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a className="text-emerald-300 hover:underline" href="https://github.com/fernandofatech">
            GitHub
          </a>
        </p>
        <p className="mt-2">MIT License · © 2026</p>
      </footer>
    </main>
  );
}
