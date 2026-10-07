import Link from "next/link";
import type { Competition } from "./data";

export default function CompetitionTimeline({
  items,
}: {
  items: Competition[];
}) {
  return (
    <ol
      className="mt-8 flex flex-col gap-14 pl-8"
      style={{ borderLeft: "3px solid rgba(245, 245, 245, 0.15)" }}
    >
      {items.map((competition, index) => (
        <li
          key={competition.slug}
          className="animate-fade-up relative"
          style={{ animationDelay: `${0.28 + index * 0.08}s` }}
        >
          <span
            aria-hidden
            className="absolute h-4 w-4 rounded-full"
            style={{
              left: "-2.6rem",
              top: "0.35rem",
              backgroundColor: "var(--mass-primary)",
              border: "3px solid var(--mass-ink)",
            }}
          />

          <p
            className="text-sm tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-julius-sans-one), sans-serif",
              color: "#8083a4",
            }}
          >
            {competition.years}
          </p>
          <h3
            className="mt-2 text-2xl font-semibold sm:text-3xl"
            style={{ color: "var(--mass-paper)" }}
          >
            {competition.name}
          </h3>
          <p className="mt-3 text-lg leading-8 text-slate-400">
            {competition.blurb}
          </p>

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

          <Link
            href={`/competitions/${competition.slug}`}
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl px-5 py-2.5 text-base font-semibold text-white transition-colors duration-200 hover:brightness-110"
            style={{ backgroundColor: "var(--mass-primary)" }}
          >
            View project <span aria-hidden>→</span>
          </Link>
        </li>
      ))}
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
