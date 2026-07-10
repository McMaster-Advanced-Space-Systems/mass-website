import type { Metadata } from "next";
import Nav from "../nav";
import Footer from "../footer";

export const metadata: Metadata = {
  title: "Competitions — McMaster Advanced Space Systems",
  description:
    "The engineering competitions McMaster Advanced Space Systems (MASS) designs, builds, and tests for.",
};

export default function CompetitionsPage() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--mass-black)" }}
    >
      <Nav />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-40 pb-16 sm:pt-52 sm:pb-24">
        <h1
          className="animate-fade-up text-4xl font-semibold text-white sm:text-5xl"
          style={{ animationDelay: "0.05s" }}
        >
          Competitions
        </h1>
        <p
          className="animate-fade-up mt-4 text-lg leading-7 text-slate-400"
          style={{ animationDelay: "0.12s" }}
        >
          Filler intro text. A short overview of the competitions MASS takes
          part in goes here.
        </p>

        <article
          className="animate-fade-up mt-14"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            CAN-SBX
          </h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-slate-200">
            <p>
              Filler text. CAN-SBX (Canadian Stratospheric Balloon Experiment)
              tasks student teams with designing, building, and operating a
              science payload that survives and performs in near-space
              conditions. This is placeholder copy describing the competition at
              a high level.
            </p>
            <p>
              Filler text. Replace this paragraph with our objectives, the
              systems we are building, and how each sub-team contributes.
              Placeholder content until the real write-up is ready.
            </p>
          </div>
        </article>

        <hr className="my-12 border-white/10" />

        <article
          className="animate-fade-up"
          style={{ animationDelay: "0.28s" }}
        >
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Star Comp
          </h2>
          <div className="mt-5 space-y-5 text-base leading-8 text-slate-200">
            <p>
              Filler text. Star Comp is a placeholder entry for now. This
              paragraph will introduce the competition, its goals, and why MASS
              is taking part.
            </p>
            <p>
              Filler text. Add specifics on timelines, deliverables, and the
              team&apos;s approach here once they are confirmed.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
