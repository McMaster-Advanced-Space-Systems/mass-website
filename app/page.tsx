"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHandshake, FaTrophy, FaUsers, FaWrench } from "react-icons/fa";
import Nav from "./nav";
import Footer from "./footer";
import { PROJECTS, type Project } from "./projects/data";
import background from "../public/background.jpg";

const MONO = "var(--font-space-mono), ui-monospace, monospace";
const BODY =
  '"Akzidenz-Grotesk", "Akzidenz-Grotesk Pro", var(--font-inter), "Helvetica Neue", Arial, sans-serif';

const PILLARS = [
  {
    icon: FaWrench,
    title: "Hands-On",
    body: "Real-world engineering experience designing, building, and flying advanced payloads",
  },
  {
    icon: FaUsers,
    title: "Mentorship",
    body: "Students from every discipline learning from each other, with no experience required to start",
  },
  {
    icon: FaTrophy,
    title: "Projects",
    body: "Building advanced payloads for CAN-SBX and CAN-ARX, hosted by SEDS Canada",
  },
  {
    icon: FaHandshake,
    title: "Professional Growth",
    body: "Helping students find co-ops, connect with industry, and build careers beyond MASS",
  },
];

const STATS = [
  { value: "1", label: "Active Projects" },
  { value: "3", label: "Total Projects" },
  { value: "6", label: "Technical Teams" },
  { value: "80+", label: "Active Team Members" },
  { value: "3+", label: "Years Building" },
];

{/* Body of homepage */}
export default function Home() {
  const palette = {
    black: "var(--mass-ink)",
    gray: "var(--mass-gray)",
    white: "var(--mass-paper)",
    blue: "var(--mass-primary)",
    darkBlue: "var(--mass-primary)",
    red: "var(--mass-secondary)",
    highlight: "var(--mass-highlight)",
    surface: "var(--mass-surface)",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: palette.black, color: palette.white }}>

      <div className="fixed inset-0 z-0" aria-hidden="true">
        <Image
          src={background}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <Nav />

      {/* Title */}
      <section
        className="relative z-10 flex items-center justify-center px-6 pt-25 min-h-screen"
      >
        <div className="w-full max-w-6xl text-center">
          <div
            className="animate-fade-up mb-6 flex items-center justify-center gap-3"
            style={{ animationDelay: "0.02s" }}
            aria-hidden
          >
            <span style={{ width: "2.5rem", height: "1px", backgroundColor: "var(--mass-highlight)" }} />
            <span
              style={{
                fontFamily: MONO,
                color: "var(--mass-highlight)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
              }}
            >
              EST. 2024
            </span>
            <span style={{ width: "2.5rem", height: "1px", backgroundColor: "var(--mass-highlight)" }} />
          </div>

          <h1
            className="animate-fade-up px-2 text-center"
            style={{
              animationDelay: "0.05s",
              fontFamily: "var(--font-michroma), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.9rem, 6vw, 4.25rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              textWrap: "balance",
            }}
          >
            <span className="sm:block" style={{ color: palette.white }}>
              McMaster Advanced
            </span>{" "}
            <span className="sm:block" style={{ color: palette.highlight }}>
              Space Systems
            </span>
          </h1>

          <div
            aria-hidden
            className="animate-fade-up mx-auto mt-8 h-[3px] w-16"
            style={{ backgroundColor: "var(--mass-secondary)", animationDelay: "0.1s" }}
          />

          <p
            className="animate-fade-up mx-auto mt-8 max-w-xl px-2 text-lg leading-8 sm:text-xl sm:leading-9"
            style={{ color: "rgba(245, 245, 245, 0.85)", animationDelay: "0.15s" }}
          >
            A student-run club building real projects in space, aerospace, and everything that supports them.
          </p>

          {/* Buttons: same treatment as the contact form's submit button */}
          <div
            className="animate-fade-up mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.25s" }}
          >
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 px-9 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--mass-highlight)_80%,white)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mass-highlight)]"
              style={{
                fontFamily: MONO,
                backgroundColor: "var(--mass-highlight)",
                color: "var(--mass-ink)",
              }}
            >
              Join Our Team <span aria-hidden>→</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 border px-9 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase transition-colors duration-200 hover:border-[var(--mass-highlight)] hover:text-[var(--mass-highlight)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mass-highlight)]"
              style={{
                fontFamily: MONO,
                color: "var(--mass-paper)",
                borderColor: "rgba(245, 245, 245, 0.4)",
                backgroundColor: "rgba(16, 16, 16, 0.35)",
              }}
            >
              Explore Projects <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <main
        className="relative z-10 w-full pb-12"
        style={{ backgroundColor: "rgba(16, 16, 16, 0.85)" }}
      >

        {/* Stats bar */}
        <div className="mx-auto grid max-w-page grid-cols-2 sm:grid-cols-5">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 px-4 py-8 text-center"
              style={{
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderLeftWidth: index === 0 ? 0 : "1px",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: palette.white,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "rgba(255, 255, 255, 0.5)",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Who we are description */}
        <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-20 text-center">
          <h2
            style={{
              fontFamily: "Michroma, sans-serif",
              color: palette.white,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Who we are
          </h2>
          <div
            style={{
              fontFamily: BODY,
              color: palette.white,
              fontSize: "1.1rem",
              lineHeight: "1.9",
              opacity: 0.6,
            }}
          >
            <p>
              McMaster Advanced Space Systems (MASS) is a student-led team focused on
              advancing space research and inspiring the next generation of engineers.
              Founded in 2023, our projects have taken part in challenges such as
              CAN-SBX and CAN-ARX, hosted by SEDS Canada.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              Since 2023, our members have competed in CAN-SBX and CAN-ARX,
              collaborated across disciplines, and transformed ambitious ideas into
              working hardware.
            </p>
          </div>
        </section>


        {/* Pillar cards */}
        <div className="mx-auto grid max-w-page grid-cols-1 items-stretch gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Our project cards */}
        <div className="w-full pt-24 md:pt-32">
          <div className="mx-auto mb-9 flex w-full max-w-page flex-wrap items-end justify-between gap-4 px-6">
            <h2
              className="animate-fade-up text-left"
              style={{
                fontFamily: "Michroma, sans-serif",
                color: palette.white,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
              }}
            >
              Our Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm text-slate-400 transition-colors hover:text-white"
              style={{ fontFamily: MONO }}
            >
              All projects <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mx-auto grid w-full max-w-page gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  const [hover, setHover] = useState(false);
  const Icon = pillar.icon;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="animate-fade-up flex flex-col items-center gap-4 rounded-2xl border p-8 text-center transition-all duration-200 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 0.08}s`,
        backgroundColor: "var(--mass-surface)",
        borderColor: hover ? "var(--mass-primary)" : "rgba(255, 255, 255, 0.08)",
      }}
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-200"
        style={{
          backgroundColor: "#242424",
          color: hover ? "var(--mass-highlight)" : "var(--mass-paper)",
        }}
      >
        <Icon size={22} aria-hidden />
      </span>
      <h3
        className="text-lg font-semibold"
        style={{ color: "var(--mass-paper)" }}
      >
        {pillar.title}
      </h3>
      <p
        className="text-sm leading-6 text-slate-400"
        style={{ fontFamily: BODY }}
      >
        {pillar.body}
      </p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const photo = project.card ?? project.hero;
  const active = project.status === "current";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-black/60"
      style={{ backgroundColor: "var(--mass-surface)" }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
        <Image
          src={photo.image ?? "/earth.jpg"}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={photo.position ? { objectPosition: photo.position } : undefined}
        />
        <span
          className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.65rem] tracking-[0.14em] uppercase backdrop-blur-sm"
          style={{
            fontFamily: MONO,
            color: active ? "var(--mass-highlight)" : "var(--mass-paper)",
            borderColor: active ? "rgba(247,144,31,0.5)" : "rgba(245,245,245,0.3)",
            backgroundColor: "rgba(10,10,10,0.65)",
          }}
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: active ? "var(--mass-highlight)" : "var(--mass-primary)" }}
          />
          {active ? "Active" : "Completed"} · {project.years}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3
          className="text-2xl"
          style={{ fontFamily: "var(--font-michroma), sans-serif", color: "var(--mass-paper)" }}
        >
          {project.name}
        </h3>
        <p
          className="mt-2 text-[0.7rem] tracking-[0.14em] uppercase"
          style={{ fontFamily: MONO, color: "var(--mass-highlight)" }}
        >
          {project.tagline}
        </p>
        <p className="mt-4 flex-1 leading-7 text-slate-300" style={{ fontFamily: BODY }}>
          {project.blurb}
        </p>
        <span
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "var(--mass-paper)" }}
        >
          View project
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
