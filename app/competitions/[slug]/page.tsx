import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../nav";
import Footer from "../../footer";
import { COMPETITIONS } from "../data";
import PhaseTimeline from "./phases";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COMPETITIONS.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = COMPETITIONS.find((c) => c.slug === slug);
  return {
    title: `${project?.name} — McMaster Advanced Space Systems`,
    description: project?.blurb,
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl font-semibold sm:text-4xl"
      style={{ color: "var(--mass-paper)" }}
    >
      {children}
    </h2>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = COMPETITIONS.find((c) => c.slug === slug);
  if (!project) notFound();
  const ongoing = project.status === "current";

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--mass-ink)" }}
    >
      <Nav />

      <header className="relative overflow-hidden px-8 pt-44 pb-16">
        <Image
          src={project.heroImage ?? "/earth.jpg"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,16,16,0.55), rgba(16,16,16,0.8) 45%, var(--mass-ink) 85%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <PhaseTimeline
            phases={project.phases}
            currentPhase={project.currentPhase}
            ongoing={ongoing}
            intro={
              <>
                <p
                  className="animate-fade-up text-sm tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-julius-sans-one), sans-serif",
                    color: ongoing ? "var(--mass-highlight)" : "#a0a3c0",
                  }}
                >
                  {project.years} · {ongoing ? "ONGOING" : "COMPLETED"}
                </p>
                <h1
                  className="animate-fade-up mt-3 text-5xl font-semibold sm:text-7xl"
                  style={{ color: "var(--mass-paper)", animationDelay: "0.05s" }}
                >
                  {project.name}
                </h1>
                <div
                  className="mt-8"
                  style={{
                    width: "4.5rem",
                    height: "3px",
                    backgroundColor: "var(--mass-primary)",
                  }}
                />
                <p
                  className="animate-fade-up mt-8 max-w-3xl text-xl leading-9 text-slate-300 sm:text-2xl"
                  style={{ animationDelay: "0.12s" }}
                >
                  {project.blurb}
                </p>
              </>
            }
          />
        </div>
      </header>

      <main className="flex-1 px-8 pt-4 pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-7xl">
          <section className="mt-16">
            <SectionHeading>Technical Specs</SectionHeading>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {project.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-6"
                  style={{ backgroundColor: "var(--mass-surface)" }}
                >
                  <dt
                    className="text-sm tracking-[0.2em] uppercase"
                    style={{
                      fontFamily: "var(--font-julius-sans-one), sans-serif",
                      color: "#8083a4",
                    }}
                  >
                    {spec.label}
                  </dt>
                  <dd
                    className="mt-2 text-xl font-semibold"
                    style={{ color: "var(--mass-paper)" }}
                  >
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-24">
            <SectionHeading>Results / Findings</SectionHeading>
            <div className="mt-8 max-w-3xl space-y-4 text-lg leading-9 text-slate-300">
              {project.results.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </section>

          <Link
            href="/competitions"
            className="mt-24 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/5"
          >
            <span aria-hidden>←</span> Other projects
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
