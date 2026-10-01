"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHandshake, FaTrophy, FaUsers, FaWrench } from "react-icons/fa";
import Nav from "./nav";
import Footer from "./footer";
import background from "../public/background.jpg";

const COMPETITIONS = [
  {
    title: "CAN-SBX",
    description:
      "SEDS Canada's stratospheric balloon experiment challenge. Teams design a payload that survives the ascent, collects data at altitude, and returns it intact.",
  },
  {
    title: "CAN-ARX",
    description:
      "SEDS Canada's advanced rocketry experiment challenge, pairing an experimental payload with a launch vehicle and a full design-review process.",
  },
];

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
    title: "Competition",
    body: "Competing annually in CAN-SBX and CAN-ARX, both hosted by SEDS Canada",
  },
  {
    icon: FaHandshake,
    title: "Professional Growth",
    body: "Helping students find co-ops, connect with industry, and build careers beyond MASS",
  },
];

const STATS = [
  { value: "2", label: "Active Projects" },
  { value: "4", label: "Total Projects" },
  { value: "6", label: "Technical Teams" },
  { value: "80+", label: "Active Team Members" },
  { value: "3+", label: "Years Building" },
];

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

      <section
        className="relative z-10 flex items-center justify-center px-6 pt-25 min-h-screen"
      >
        <div className="w-full max-w-2xl text-center">
          <h1
            className="animate-fade-up mb-5 px-6 py-4 text-center"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="mb-4 flex items-center justify-center gap-2" aria-hidden>
              <span style={{ width: "2rem", height: "1px", backgroundColor: "var(--mass-highlight)" }} />
              <span
                style={{
                  fontFamily: "var(--font-julius-sans-one), sans-serif",
                  color: "var(--mass-highlight)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                }}
              >
                EST. 2024
              </span>
              <span style={{ width: "2rem", height: "1px", backgroundColor: "var(--mass-highlight)" }} />
            </div>

            <span
              style={{
                fontFamily: "var(--font-michroma), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(2.4rem, 7.5vw, 4.5rem)",
                lineHeight: 1.25,
                color: palette.white,
                display: "block",
              }}
            >
              McMaster
            </span>
            <span
              style={{
                fontFamily: "var(--font-michroma), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(2.4rem, 7.5vw, 4.5rem)",
                lineHeight: 1.25,
                color: palette.white,
                display: "block",
              }}
            >
              Advanced
            </span>
            <span
              style={{
                fontFamily: "var(--font-michroma), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(2.4rem, 7.5vw, 4.5rem)",
                lineHeight: 1.25,
                color: palette.blue,
                display: "block",
              }}
            >
              Space Systems
            </span>
          </h1>
          <p
            className="animate-fade-up mb-7 rounded-lg px-5 py-3 text-lg"
            style={{ color: palette.white, animationDelay: "0.15s" }}
          >
            A student-run club building real projects in space, <br className="hidden sm:block" /> aerospace, and everything that supports them.
          </p>
          <div
            className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.25s" }}
          >
            <Link
              href="/contact"
              className="inline-block w-50 rounded-lg border-2 px-6 py-3 text-center font-semibold shadow-black/50 transition-all duration-200 bg-[var(--bg)] border-[var(--border)] hover:border-[var(--borderhover)] hover:shadow-l hover:-translate-y-0.5 active:translate-y-0"
              style={
                {
                  color: palette.white,
                  "--bg": palette.blue,
                  "--border": palette.blue,
                  "--borderhover": "white",
                } as React.CSSProperties
              }
            >
              Join Our Team
            </Link>

            <Link
              href="/current-projects"
              className="inline-block w-50 rounded-lg border-2 px-6 py-3 text-center font-semibold shadow-black/50 transition-all duration-200 bg-[var(--bg)] border-[var(--border)] hover:border-[var(--borderhover)] hover:shadow-l hover:-translate-y-0.5 active:translate-y-0"
              style={
                {
                  color: palette.white,
                  "--bg": palette.blue,
                  "--border": palette.blue,
                  "--borderhover": "white",
                } as React.CSSProperties
              }
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      <main
        className="relative z-10 w-full pb-12"
        style={{ backgroundColor: "rgba(16, 16, 16, 0.85)" }}
      >

        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-5">
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
                  fontFamily: "var(--font-archivo-narrow), sans-serif",
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
                  fontFamily: "var(--font-julius-sans-one), sans-serif",
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


        <section className="mx-auto w-full max-w-4xl px-6 pb-20 pt-20 text-center">
          <h2
            style={{
              fontFamily: "var(--font-michroma), sans-serif",
              color: palette.white,
              fontWeight: 700,
              fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "2.5rem",
            }}
          >
            Who we are
          </h2>
          <div
            style={{
              fontFamily: "var(--font-alice), serif",
              color: palette.white,
              fontSize: "1.1rem",
              lineHeight: "1.9",
              opacity: 0.6,
            }}
          >
            <p>
              McMaster Advanced Space Systems is a student-led team advancing space
              research while inspiring the next generation of engineers.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              Since 2023, our members have competed in CAN-SBX and CAN-ARX,
              collaborated across disciplines, and transformed ambitious ideas into
              working hardware.
            </p>
          </div>
        </section>


        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>


        <div className="w-full pt-24 md:pt-32">
          <div className="mx-auto w-full max-w-7xl px-6">
            <h2
              className="animate-fade-up text-left"
              style={{
                fontFamily: "var(--font-archivo-narrow), sans-serif",
                color: palette.white,
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
                marginBottom: "2.25rem",
              }}
            >
              Current Competitions
            </h2>
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 pb-24 sm:grid-cols-2">
            {COMPETITIONS.map((competition) => (
              <Link
                key={competition.title}
                href="/competitions"
                className="rounded-3xl border p-8 shadow-2xl transition-colors sm:p-10"
                style={{
                  backgroundColor: palette.white,
                  borderColor: "#1050bf40",
                  color: palette.black,
                }}
              >
                <h3 className="mb-6 text-2xl font-semibold md:text-3xl">
                  {competition.title}
                </h3>
                <p className="leading-7 text-slate-700">{competition.description}</p>
              </Link>
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
      <p className="text-sm leading-6 text-slate-400">{pillar.body}</p>
    </div>
  );
}
