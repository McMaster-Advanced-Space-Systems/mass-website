import type { Metadata } from "next";
import Nav from "../nav";
import Footer from "../footer";
import CompetitionTimeline, { type Competition } from "./timeline";

export const metadata: Metadata = {
  title: "Competitions — McMaster Advanced Space Systems",
  description:
    "The engineering competitions McMaster Advanced Space Systems (MASS) designs, builds, and tests for.",
};

// One list, split by `status` — so the two sections can never drift apart.
const COMPETITIONS: Competition[] = [
  {
    name: "CAN-SBX",
    years: "2026–2027",
    blurb:
      "SEDS Canada's stratospheric balloon experiment challenge. Teams design a payload that survives the ascent, collects data at altitude, and returns it intact.",
    status: "current",
    details: [
      "Filler text. Describe the experiment MASS is flying this cycle — the science question, the payload architecture, and the constraints the balloon platform imposes.",
      "Filler text. Add how each sub-team contributes, the review milestones, and where the team is in the build.",
    ],
  },
  {
    name: "CAN-ARX",
    years: "2026–2027",
    blurb:
      "SEDS Canada's advanced rocketry experiment challenge, pairing an experimental payload with a launch vehicle and a full design-review process.",
    status: "current",
    details: [
      "Filler text. Describe the payload and the launch vehicle pairing, plus the design-review cadence the competition requires.",
      "Filler text. Add objectives, deliverables, and the team's approach once confirmed.",
    ],
  },
  {
    name: "Comp 3",
    years: "2025–2026",
    blurb: "Filler text. Replace with a one-line summary of this competition.",
    status: "past",
    details: [
      "Filler text. Replace with the full write-up: what MASS built, how it performed, and what the team took away from it.",
    ],
  },
  {
    name: "Comp 4",
    years: "2024–2025",
    blurb: "Filler text. Replace with a one-line summary of this competition.",
    status: "past",
    details: [
      "Filler text. Replace with the full write-up: what MASS built, how it performed, and what the team took away from it.",
    ],
  },
];

export default function CompetitionsPage() {
  const current = COMPETITIONS.filter((c) => c.status === "current");
  const past = COMPETITIONS.filter((c) => c.status === "past");

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--mass-ink)" }}
    >
      <Nav />

      <header
        className="px-8 pt-52 pb-6"
        style={{ backgroundColor: "var(--mass-ink)" }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <h1
            className="animate-fade-up mb-9 text-4xl font-semibold sm:text-5xl"
            style={{ color: "var(--mass-paper)", animationDelay: "0.05s" }}
          >
            Competitions
          </h1>
          <div
            style={{
              width: "4.5rem",
              height: "3px",
              backgroundColor: "var(--mass-primary)",
            }}
          />
        </div>
      </header>

      <main className="flex-1 px-8 pt-6 pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-7xl">
        <p
          className="animate-fade-up text-xl leading-9 text-slate-300 sm:text-2xl"
          style={{ animationDelay: "0.12s" }}
        >
          Filler intro text. A short overview of the competitions MASS takes
          part in goes here.
        </p>

        <section className="mt-20">
          <h2
            className="animate-fade-up text-3xl font-semibold sm:text-4xl"
            style={{ color: "var(--mass-paper)", animationDelay: "0.2s" }}
          >
            Current
          </h2>
          <CompetitionTimeline items={current} />
        </section>

        <section className="mt-24">
          <h2
            className="animate-fade-up text-3xl font-semibold sm:text-4xl"
            style={{ color: "var(--mass-paper)", animationDelay: "0.2s" }}
          >
            Past
          </h2>
          <CompetitionTimeline items={past} />
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
