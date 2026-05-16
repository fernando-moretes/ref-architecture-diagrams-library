import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architecture Diagrams Library — Fernando Azevedo",
  description:
    "Diagrams as code for AWS, C4, BPMN, event-driven, sequence and state — reproducible, reviewable, version-controlled.",
  authors: [{ name: "Fernando Francisco Azevedo", url: "https://fernando.moretes.com" }],
  openGraph: {
    title: "Architecture Diagrams Library",
    description: "Diagrams as code for AWS, C4, BPMN, event-driven, sequence.",
    url: "https://diagrams.moretes.com",
    siteName: "Architecture Diagrams Library",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
