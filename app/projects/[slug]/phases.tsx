"use client";

import { useState, type ReactNode } from "react";

const DONE = "var(--mass-primary)";
const DIM = "rgba(245, 245, 245, 0.2)";

// Arc is a quadratic Bézier in a 100×100 box stretched to the column:
// ends at x=X0, control at x=C, so it bows right with its hollow facing the
// page centre. With the control point at mid-height, y is linear in t.
const X0 = 12;
const C = 72;
const arcX = (t: number) => X0 + 2 * t * (1 - t) * (C - X0);
/** Path of the arc from t=0 to t (de Casteljau split). */
const arcTo = (t: number) =>
  `M ${X0} 0 Q ${X0 + (C - X0) * t} ${50 * t} ${arcX(t)} ${100 * t}`;

export default function PhaseTimeline({
  phases,
  currentPhase,
  ongoing,
  intro,
}: {
  phases: string[];
  currentPhase: number;
  ongoing: boolean;
  /** Project name + blurb; the arc runs alongside it and the description. */
  intro: ReactNode;
}) {
  // Ongoing projects open on their current phase; past ones on phase 1.
  const [selected, setSelected] = useState(ongoing ? currentPhase : 1);
  // Past projects are fully complete: every phase reads as done.
  const reached = ongoing ? currentPhase : phases.length + 1;
  // Dots sit evenly along the arc, inset from its ends.
  const tOf = (n: number) => 0.06 + ((n - 1) * 0.88) / (phases.length - 1);

  return (
    <div className="grid gap-x-16 md:grid-cols-[1fr_22rem]">
      <div className="md:col-start-1 md:row-start-1">{intro}</div>

      <ol className="relative mt-12 h-[32rem] md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:h-auto md:min-h-[36rem]">
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
          strokeWidth={3}
          strokeLinecap="round"
        >
          <path d={arcTo(1)} stroke={DIM} vectorEffect="non-scaling-stroke" />
          <path
            d={arcTo(ongoing ? tOf(currentPhase) : 1)}
            stroke={DONE}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {phases.map((_, i) => {
          const n = i + 1;
          const t = tOf(n);
          const isCurrent = ongoing && n === currentPhase;
          const isDone = n < reached;
          const isSelected = n === selected;

          return (
            <li
              key={n}
              className="absolute"
              style={{
                left: `${arcX(t)}%`,
                top: `${t * 100}%`,
                transform: "translate(-2rem, -50%)",
              }}
            >
              <button
                type="button"
                onClick={() => setSelected(n)}
                aria-pressed={isSelected}
                aria-current={isCurrent ? "step" : undefined}
                className={`flex min-h-12 cursor-pointer items-center gap-4 rounded-xl py-1.5 pr-4 pl-3 whitespace-nowrap transition-colors duration-200 ${isSelected ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <span
                    aria-hidden
                    className="block rounded-full transition-all duration-200"
                    style={
                      isCurrent
                        ? {
                            width: "2.25rem",
                            height: "2.25rem",
                            backgroundColor: "var(--mass-highlight)",
                            boxShadow: "0 0 0 7px rgba(247, 144, 31, 0.2), 0 0 26px rgba(247, 144, 31, 0.6)",
                          }
                        : {
                            width: "1.5rem",
                            height: "1.5rem",
                            backgroundColor: isDone ? DONE : "var(--mass-ink)",
                            border: `3px solid ${isDone ? DONE : DIM}`,
                          }
                    }
                  />
                </span>
                <span
                  className={`text-xl transition-colors duration-200 sm:text-2xl ${isSelected ? "font-bold" : ""}`}
                  style={{
                    color:
                      isSelected || isDone || isCurrent
                        ? "var(--mass-paper)"
                        : "#6b6e8a",
                  }}
                >
                  Phase {n}
                </span>
                {isCurrent && (
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-semibold tracking-wider uppercase"
                    style={{
                      color: "var(--mass-highlight)",
                      border: "1px solid rgba(247, 144, 31, 0.5)",
                    }}
                  >
                    Current
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 md:col-start-1 md:row-start-2 md:mt-14" aria-live="polite">
        <p
          className="text-sm tracking-[0.2em]"
          style={{
            fontFamily: "var(--font-julius-sans-one), sans-serif",
            color: ongoing && selected === currentPhase ? "var(--mass-highlight)" : "#8083a4",
          }}
        >
          PHASE {selected}
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-9 text-slate-300">
          {phases[selected - 1]}
        </p>
      </div>
    </div>
  );
}
