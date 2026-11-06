import type { Phase } from "../data";

const MONO = "var(--font-space-mono), ui-monospace, monospace";
const DIM = "rgba(245, 245, 245, 0.18)";

/* Vertical phase list beside the project intro. Past projects read as fully
   complete; ongoing ones mark the current phase in the highlight colour. */
export default function PhaseList({
  phases,
  currentPhase,
  ongoing,
}: {
  phases: Phase[];
  currentPhase: number;
  ongoing: boolean;
}) {
  return (
    <ol className="relative flex flex-col gap-7" aria-label="Project phases">
      <span
        aria-hidden
        className="absolute top-2 bottom-2 left-[0.4375rem] w-px"
        style={{ backgroundColor: DIM }}
      />
      {phases.map((phase, i) => {
        const n = i + 1;
        const done = !ongoing || n < currentPhase;
        const current = ongoing && n === currentPhase;
        const state = current ? "Current" : done ? "Completed" : undefined;

        return (
          <li
            key={phase.title}
            className="relative flex gap-4"
            aria-current={current ? "step" : undefined}
          >
            <span
              aria-hidden
              className="relative mt-1 block h-[0.875rem] w-[0.875rem] shrink-0 rounded-full"
              style={
                current
                  ? {
                      backgroundColor: "var(--mass-highlight)",
                      boxShadow: "0 0 0 4px rgba(247, 144, 31, 0.2)",
                    }
                  : done
                    ? { backgroundColor: "var(--mass-primary)" }
                    : { backgroundColor: "var(--mass-ink)", border: `2px solid ${DIM}` }
              }
            />
            <div>
              <p
                className="text-[0.7rem] tracking-[0.15em] uppercase"
                style={{
                  fontFamily: MONO,
                  color: current ? "var(--mass-highlight)" : done ? "#a6a9c4" : "#6b6e8a",
                }}
              >
                Phase {n}
                {state && ` · ${state}`}
              </p>
              <p
                className="mt-1 text-base font-semibold"
                style={{ color: done || current ? "var(--mass-paper)" : "#6b6e8a" }}
              >
                {phase.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{phase.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
