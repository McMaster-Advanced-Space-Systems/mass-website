import type { Metadata } from "next";
import Nav from "../nav";
import Footer from "../footer";
import CompetitionTimeline from "./timeline";
import { COMPETITIONS } from "./data";

export const metadata: Metadata = {
  title: "Competitions — McMaster Advanced Space Systems",
  description:
    "The engineering competitions McMaster Advanced Space Systems (MASS) designs, builds, and tests for.",
};

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
            Projects
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
          intro text
        </p>

        <section className="mt-20">
          <h2
            className="animate-fade-up text-3xl font-semibold sm:text-4xl"
            style={{ color: "var(--mass-paper)", animationDelay: "0.2s" }}
          >
            Ongoing
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
