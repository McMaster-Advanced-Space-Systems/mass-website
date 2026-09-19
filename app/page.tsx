"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHandshake, FaTrophy, FaUsers, FaWrench } from "react-icons/fa";
import Nav from "./nav";
import Footer from "./footer";
import HeroBackground from "./hero-background";

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
      <HeroBackground />
      <Nav />

      <section
        className="relative z-10 flex items-center justify-center px-6 min-h-screen"
      >
        <div className="w-full max-w-2xl text-center">
          <h1 className="animate-fade-up mb-5 px-6 py-4" style={{ animationDelay: "0.05s" }}>
            {/* Image carries the mark; the text stays for search engines and
                screen readers, which an alt attribute alone serves weakly. */}
            <span className="sr-only">McMaster Advanced Space Systems</span>
            <Image
              src="/wordmark.png"
              alt=""
              width={469}
              height={273}
              priority
              aria-hidden
              className="mx-auto h-auto w-full max-w-md"
              style={{ filter: "drop-shadow(0 0 28px rgba(16, 80, 191, 0.55))" }}
            />
          </h1>
          <p
            className="animate-fade-up mb-7 rounded-lg px-5 py-3 text-lg"
            style={{ color: palette.white, animationDelay: "0.15s" }}
          >
            Designing, building, and testing autonomous <br className="hidden sm:block"/>technologies for various challenges.
          </p>
          <a
            className="animate-fade-up inline-block rounded-lg border-2 px-6 py-3 font-semibold shadow-black/50 transition-all duration-200 bg-[var(--bg)] hover:bg-[var(--bghover)] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            style={
              {
                color: palette.white,
                borderColor: palette.black,
                animationDelay: "0.25s",
                "--bg": palette.blue,
                "--bghover": palette.highlight,
              } as React.CSSProperties
            }
            href="#"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Translucent panel: the fixed starfield sits behind the whole page, so
          everything past the hero gets a scrim to keep body copy readable. */}
      <main
        className="relative z-10 w-full py-12"
        style={{ backgroundColor: "rgba(16, 16, 16, 0.85)" }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        <section className="mx-auto w-full max-w-7xl px-6 pt-24 md:pt-32">
          <h2
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
            Who We Are
          </h2>
          <div
            style={{
              fontFamily: "var(--font-alice), serif",
              color: palette.white,
              fontSize: "1.05rem",
              lineHeight: "1.9",
              opacity: 0.7,
              maxWidth: "36rem",
            }}
          >
            <p>
              McMaster Advanced Space Systems (MASS) is a student-led team focused on
              advancing space research and inspiring the next generation of engineers.
              Founded in 2023, our team has successfully competed in competitions like
              CAN-SBX and CAN-ARX, both hosted by SEDS Canada.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              We look forward to building new projects, hosting outreach events, and
              making McMaster proud!
            </p>
          </div>
        </section>

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

      <Footer />
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
