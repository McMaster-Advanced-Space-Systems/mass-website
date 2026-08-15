"use client";

import { useState } from "react";

export type Competition = {
  name: string;
  years: string;
  blurb: string;
  status: "current" | "past";
  /** Body paragraphs, revealed when the entry is expanded. */
  details: string[];
  /** Placement or outcome. Renders only when set. */
  result?: string;
};

export default function CompetitionTimeline({
  items,
}: {
  items: Competition[];
}) {
  const [openName, setOpenName] = useState<string | null>(null);

  return (
    <ol
      className="mt-8 flex flex-col gap-10 pl-8"
      style={{ borderLeft: "3px solid rgba(245, 245, 245, 0.15)" }}
    >
      {items.map((competition, index) => {
        const open = openName === competition.name;
        const panelId = `competition-${competition.name.replace(/\s+/g, "-").toLowerCase()}`;

        return (
          <li
            key={competition.name}
            className="animate-fade-up relative"
            style={{ animationDelay: `${0.28 + index * 0.08}s` }}
          >
            <span
              aria-hidden
              className="absolute h-4 w-4 rounded-full transition-colors duration-200"
              style={{
                left: "-2.6rem",
                top: "0.35rem",
                backgroundColor: open
                  ? "var(--mass-highlight)"
                  : "var(--mass-primary)",
                border: "3px solid var(--mass-ink)",
              }}
            />

            <button
              type="button"
              onClick={() => setOpenName(open ? null : competition.name)}
              aria-expanded={open}
              aria-controls={panelId}
              className="w-full cursor-pointer text-left"
            >
              <p
                className="text-sm tracking-[0.2em]"
                style={{
                  fontFamily: "var(--font-julius-sans-one), sans-serif",
                  color: open ? "var(--mass-highlight)" : "#8083a4",
                }}
              >
                {competition.years}
              </p>
              <h3
                className="mt-2 flex items-center gap-3 text-2xl font-semibold sm:text-3xl"
                style={{ color: "var(--mass-paper)" }}
              >
                {competition.name}
                <span
                  aria-hidden
                  className="text-xl transition-transform duration-200"
                  style={{
                    color: "var(--mass-primary)",
                    transform: open ? "rotate(90deg)" : "none",
                  }}
                >
                  ›
                </span>
              </h3>
              <p className="mt-3 text-lg leading-8 text-slate-400">
                {competition.blurb}
              </p>
            </button>

            {/* Always rendered so it can animate: a 0fr→1fr grid row gives an
                auto-height transition without measuring anything in JS. */}
            <div
              id={panelId}
              inert={!open}
              className="grid transition-all duration-300 ease-out motion-reduce:transition-none"
              style={{
                gridTemplateRows: open ? "1fr" : "0fr",
                opacity: open ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 pt-5 text-lg leading-9 text-slate-300">
                  {competition.details.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>

                <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
                  <Meta label="YEARS" value={competition.years} />
                  <Meta
                    label="STATUS"
                    value={competition.status === "current" ? "Active" : "Completed"}
                  />
                  {competition.result && (
                    <Meta
                      label="RESULT"
                      value={competition.result}
                      valueColor="var(--mass-secondary)"
                    />
                  )}
                </dl>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function Meta({
  label,
  value,
  valueColor = "var(--mass-paper)",
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div>
      <dt
        className="text-sm tracking-[0.2em]"
        style={{
          fontFamily: "var(--font-julius-sans-one), sans-serif",
          color: "#8083a4",
        }}
      >
        {label}
      </dt>
      <dd className="mt-1 text-base font-semibold" style={{ color: valueColor }}>
        {value}
      </dd>
    </div>
  );
}
