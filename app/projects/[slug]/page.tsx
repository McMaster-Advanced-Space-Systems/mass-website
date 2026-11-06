import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCamera } from "react-icons/fa";
import PageShell from "../../components/PageShell";
import { CARD, CARD_BG, DISPLAY, Eyebrow, MONO, Pill, Section, TITLE } from "../../components/ui";
import { PROJECTS, type Media } from "../data";
import PhaseList from "./phases";

/* Blue and red are decorative only, never a font colour, so they appear
   on dots and rules while labels stay paper or highlight. */
const DOTS = ["var(--mass-primary)", "var(--mass-highlight)", "var(--mass-primary)", "var(--mass-secondary)"];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  return {
    title: `${project?.name} — McMaster Advanced Space Systems`,
    description: project?.blurb,
  };
}

/* A photo, or a labelled frame showing which photo belongs there. */
function Photo({ media, sizes, priority }: { media: Media; sizes: string; priority?: boolean }) {
  if (media.image) {
    return (
      <Image
        src={media.image}
        alt={media.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={media.position ? { objectPosition: media.position } : undefined}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={media.alt}
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
      style={{
        background:
          "repeating-linear-gradient(135deg, rgba(245,245,245,0.03) 0 12px, transparent 12px 24px), #141414",
      }}
    >
      <FaCamera aria-hidden className="text-2xl text-slate-500" />
      <span className="max-w-xs text-xs tracking-[0.12em] text-slate-500 uppercase" style={{ fontFamily: MONO }}>
        {media.alt}
      </span>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();

  const ongoing = project.status === "current";
  const phase = project.phases[project.currentPhase - 1];
  const others = PROJECTS.filter((item) => item.slug !== project.slug);
  const { instrument, architecture, team, results, partners } = project;

  return (
    <PageShell>
      {/* ───── Hero banner ───── */}
      <div className={`animate-fade-up relative h-[19rem] overflow-hidden sm:h-[24rem] ${CARD}`}>
        <Photo media={project.hero} sizes="(max-width: 1920px) 100vw, 1920px" priority />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.15) 60%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-8">
          <div>
            <Pill active={ongoing}>
              {ongoing ? `Phase ${project.currentPhase} · ${phase.title}` : `Completed · ${project.years}`}
            </Pill>
            <p className="mt-3 text-lg font-semibold text-white sm:text-2xl">{project.hero.caption}</p>
          </div>
          <span
            className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] tracking-[0.1em] text-slate-300"
            style={{ fontFamily: MONO, backgroundColor: "rgba(10,10,10,0.6)" }}
          >
            {project.hero.credit}
          </span>
        </div>
      </div>

      {/* ───── Intro + phases ───── */}
      <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <div className="animate-fade-up" style={{ animationDelay: "0.08s" }}>
          <h1
            className="uppercase"
            style={{
              fontFamily: DISPLAY,
              color: "var(--mass-paper)",
              fontSize: "clamp(1.5rem, 7.5vw, 3.75rem)",
              lineHeight: 1.05,
            }}
          >
            {project.name}
          </h1>
          <div className="mt-4">
            <Eyebrow>
              {project.tagline} · {project.years}
            </Eyebrow>
          </div>
          <div className="mt-6 h-[3px] w-14" style={{ backgroundColor: "var(--mass-secondary)" }} />
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-200">
            {project.details.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          {project.note && (
            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">{project.note}</p>
          )}
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "0.16s" }}>
          <PhaseList phases={project.phases} currentPhase={project.currentPhase} ongoing={ongoing} />
        </div>
      </div>

      {/* ───── Instrument ───── */}
      <Section heading={instrument.heading} eyebrow={instrument.eyebrow}>
        <div className="grid gap-5 lg:grid-cols-[2fr_3fr]">
          <div className={`relative min-h-[20rem] overflow-hidden ${CARD}`}>
            <Photo media={instrument.media} sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
          <div className="grid gap-5">
            <div className={`p-6 ${CARD}`} style={CARD_BG}>
              <Eyebrow>Overview</Eyebrow>
              <h3 style={TITLE} className="mt-2 text-lg font-semibold text-white">{instrument.overviewTitle}</h3>
              <p className="mt-3 leading-7 text-slate-300">{instrument.overview}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {instrument.features.map((feature) => (
                <div key={feature.title} className={`p-5 ${CARD}`} style={CARD_BG}>
                  <h4 style={TITLE} className="flex items-start gap-2.5 font-semibold text-white">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--mass-highlight)" }}
                    />
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ───── Architecture ───── */}
      <Section heading={architecture.heading} eyebrow={architecture.eyebrow}>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {architecture.steps.map((step, i) => (
            <li key={step.title} className={`relative p-5 ${CARD}`} style={CARD_BG}>
              <Eyebrow>
                {String(i + 1).padStart(2, "0")} · {step.label}
              </Eyebrow>
              <h3 style={TITLE} className="mt-2 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.body}</p>
              {i < architecture.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-8 hidden -translate-y-1/2 text-lg lg:block"
                  style={{ color: "var(--mass-primary)" }}
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* ───── Team ───── */}
      <Section heading="The Team & Subteams" eyebrow={team.eyebrow}>
        <div className="grid gap-5 lg:grid-cols-2">
          <figure className={`overflow-hidden ${CARD}`} style={CARD_BG}>
            <div className="relative aspect-[3/2]">
              <Photo media={team.media} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-sm">
              <span className="text-slate-200">{team.media.caption}</span>
              <span className="text-xs" style={{ fontFamily: MONO, color: "var(--mass-highlight)" }}>
                {team.media.credit}
              </span>
            </figcaption>
          </figure>
          <ul className="grid content-start gap-4">
            {team.subteams.map((subteam, i) => (
              <li key={subteam.name} className={`p-5 ${CARD}`} style={CARD_BG}>
                <h3 style={TITLE} className="flex items-center gap-2.5 font-semibold text-white">
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: DOTS[i % DOTS.length] }}
                  />
                  {subteam.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{subteam.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ───── Results ───── */}
      <Section heading={results.heading} eyebrow={results.eyebrow}>
        <p className="max-w-3xl leading-7 text-slate-300">{results.summary}</p>
        <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {results.stats.map((stat) => (
            <div key={stat.label} className={`p-5 ${CARD}`} style={CARD_BG}>
              <dt>
                <Eyebrow color="#8c8fa8">{stat.label}</Eyebrow>
              </dt>
              <dd>
                <span className="mt-2 block text-xl font-bold text-white sm:text-2xl">{stat.value}</span>
                <span
                  className="mt-1 block text-xs"
                  style={{ fontFamily: MONO, color: "var(--mass-highlight)" }}
                >
                  {stat.note}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {results.gallery.map((item) => (
            <figure key={item.title} className={`overflow-hidden ${CARD}`} style={CARD_BG}>
              <div className="relative aspect-[16/9]">
                <Photo media={item} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <figcaption className="p-5">
                <h3 style={TITLE} className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ───── Partners ───── */}
      <Section heading="Sponsors & Partners" eyebrow={partners.eyebrow}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.items.map((partner) => (
            <li key={partner.name} className={`flex flex-col p-5 ${CARD}`} style={CARD_BG}>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-xs font-bold"
                  style={{ fontFamily: MONO, color: "var(--mass-highlight)", backgroundColor: "#141414" }}
                >
                  {initials(partner.name)}
                </span>
                <div>
                  <h3 style={TITLE} className="font-semibold text-white">{partner.name}</h3>
                  <p className="text-xs text-slate-400" style={{ fontFamily: MONO }}>
                    {partner.kind}
                  </p>
                </div>
              </div>
              <p
                className="mt-5 border-t border-white/10 pt-3 text-[0.7rem] tracking-[0.12em] uppercase"
                style={{ fontFamily: MONO, color: "var(--mass-highlight)" }}
              >
                {partner.role}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ───── Footer nav ───── */}
      <nav
        aria-label="More projects"
        className="flex flex-wrap items-center justify-between gap-6 border-t border-white/[0.07] pt-10"
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-4 font-semibold text-white transition-colors hover:bg-white/5"
          >
            <span aria-hidden>←</span> All Projects
          </Link>
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/projects/${other.slug}`}
              className="text-slate-400 transition-colors hover:text-white"
              style={{ fontFamily: MONO }}
            >
              {other.name} <span aria-hidden>→</span>
            </Link>
          ))}
        </div>
        <Link
          href="/recruitment"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-5 font-semibold text-white transition-[filter] hover:brightness-110"
          style={{ backgroundColor: "var(--mass-secondary)" }}
        >
          {ongoing ? `Join the ${project.name} Team` : "Join MASS"} <span aria-hidden>→</span>
        </Link>
      </nav>
    </PageShell>
  );
}

function initials(name: string) {
  const words = name.split(/\s+/).filter((word) => /^[A-Za-z]/.test(word));
  if (words.length === 1) return words[0].slice(0, 4).toUpperCase();
  return words
    .slice(0, 3)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
