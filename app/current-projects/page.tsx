import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Michroma, Space_Mono, Inter } from "next/font/google";
import Nav from "../nav";
import Footer from "../footer";

/* MASS Preliminary Branding Standards 2025-2026.
   Michroma sets the logo and titles, Space Mono carries highlights, and
   Akzidenz-Grotesk handles subtitles and body text. Akzidenz-Grotesk is a
   licensed Berthold face with no Google Fonts release, so Inter (already
   loaded in the root layout) stands in behind it. */
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

/* Loaded here rather than relying on the root layout: layout.tsx declares an
   Inter instance but never puts its variable on <body>, so --font-inter is
   undefined document-wide and body copy would fall back to the serif. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Red and Blue are decorative only — never a font colour. Yellow is the
   highlight and may be set in type. Dark Azure and Light Gray are the text
   colours, and the background colours when inverted. */
const RED = "#bf472f";
const BLUE = "#1050bf";
const YELLOW = "#f7901f";
const INK = "#101010";
const PAPER = "#f5f5f5";

const DISPLAY = "var(--font-michroma), sans-serif";
const MONO = "var(--font-space-mono), ui-monospace, monospace";
const BODY =
  '"Akzidenz-Grotesk", "Akzidenz-Grotesk Pro", var(--font-inter), "Helvetica Neue", Arial, sans-serif';

type MarkProps = { className?: string; style?: CSSProperties };

/* Four-pointed star — decorative element from the standards. */
function Star({ className, style }: MarkProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} style={style}>
      <path
        d="M50 0 C54 28 72 46 100 50 C72 54 54 72 50 100 C46 72 28 54 0 50 C28 46 46 28 50 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Orbit and inside arrow — decorative element from the standards. */
function Orbit({ className, style }: MarkProps) {
  return (
    <svg viewBox="0 0 200 120" aria-hidden="true" className={className} style={style}>
      <path
        d="M168.8 33.5 A76 25 -16 1 1 68.5 44.6"
        fill="none"
        stroke={BLUE}
        strokeWidth={3.5}
        strokeLinecap="round"
      />
      <path d="M190.1 48.3 L158.8 37.5 L170.5 34.7 L169 22.7 Z" fill="currentColor" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Current Projects — McMaster Advanced Space Systems",
  description:
    "The projects McMaster Advanced Space Systems (MASS) is actively building: CAN-SBX and Stellarscope.",
};

const PROJECTS = [
  {
    num: "01",
    name: "CAN-SBX",
    meta: "OPTICAL SIGNAL TRANSMISSION / ~30 KM",
    rule: RED,
    inverted: false,
    body: "Our project will investigate how atmospheric distortion from the ground up to approximately 30 km affects optical signal transmission and assess coating performance in reducing these effects. This data will be beneficial to the research and performance of ground-to-satellite laser communication.",
  },
  {
    num: "02",
    name: "Stellarscope",
    meta: "RADIO TELESCOPE ARRAY / OPEN SOURCE",
    rule: BLUE,
    inverted: true,
    body: "This is a multi-phase project to develop an array of radio telescopes and synchronization software for collecting data and imaging celestial bodies. The long-term goal is to make the project open source, enabling others to build, connect, and contribute to a collaborative global radio astronomy network.",
  },
];

export default function CurrentProjectsPage() {
  return (
    <div
      className={`${michroma.variable} ${spaceMono.variable} ${inter.variable}`}
      style={{ minHeight: "100vh", backgroundColor: INK }}
    >
      <Nav />

      {/* ────────────── HERO ────────────── */}
      <header
        style={{
          backgroundColor: INK,
          color: PAPER,
          /* Nav is fixed and ~93px tall — 8rem keeps the eyebrow clear of it */
          padding: "8rem 1.5rem 5.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Kept below 7rem so the fixed nav does not cover them */}
        <Star
          style={{
            position: "absolute",
            top: "7.5rem",
            right: "18%",
            width: "1.5rem",
            color: BLUE,
          }}
        />
        <Star
          style={{
            position: "absolute",
            top: "10.5rem",
            right: "13%",
            width: "0.8rem",
            color: RED,
          }}
        />
        <Orbit
          className="hidden md:block"
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "4%",
            width: "12rem",
            color: PAPER,
          }}
        />

        <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>
          <p
            style={{
              fontFamily: MONO,
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              color: "rgba(245,245,245,0.45)",
              marginBottom: "2rem",
            }}
          >
            MCMASTER ADVANCED SPACE SYSTEMS
          </p>

          <h1
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(2.25rem, 7vw, 4.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: "2.25rem",
            }}
          >
            Current
            <br />
            <span style={{ color: YELLOW }}>projects.</span>
          </h1>

          <div style={{ width: "4.5rem", height: "3px", backgroundColor: YELLOW }} />
        </div>
      </header>

      {/* ────────────── PROJECT BANDS ────────────── */}
      {PROJECTS.map((project) => {
        const fg = project.inverted ? PAPER : INK;
        const muted = project.inverted
          ? "rgba(245,245,245,0.55)"
          : "rgba(16,16,16,0.55)";

        return (
          <section
            key={project.name}
            style={{
              backgroundColor: project.inverted ? INK : PAPER,
              color: fg,
              borderTop: project.inverted
                ? "1px solid rgba(245,245,245,0.12)"
                : "none",
              padding: "5.5rem 1.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative — bled off the edge, clear of the text column */}
            <Star
              className="hidden md:block"
              style={{
                position: "absolute",
                top: project.inverted ? "auto" : "-2rem",
                bottom: project.inverted ? "-3rem" : "auto",
                right: "-2rem",
                width: "11rem",
                color: project.rule,
                opacity: 0.16,
              }}
            />

            <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>
              <div className="grid gap-6 md:grid-cols-[7rem_1fr] lg:grid-cols-[10rem_1fr]">
                {/* Left rail — ghosted index */}
                <p
                  style={{
                    fontFamily: MONO,
                    fontWeight: 700,
                    fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                    lineHeight: 1,
                    color: fg,
                    opacity: 0.18,
                  }}
                >
                  {project.num}
                </p>

                <div>
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.65rem",
                      letterSpacing: "0.22em",
                      color: muted,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.meta}
                  </p>

                  <h2
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "clamp(1.6rem, 4.5vw, 2.75rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {project.name}
                  </h2>

                  <div
                    style={{
                      width: "3rem",
                      height: "3px",
                      backgroundColor: project.rule,
                      marginBottom: "1.75rem",
                    }}
                  />

                  <p
                    style={{
                      fontFamily: BODY,
                      fontSize: "1.05rem",
                      lineHeight: 1.9,
                      color: fg,
                      opacity: project.inverted ? 0.82 : 0.75,
                      maxWidth: "62ch",
                    }}
                  >
                    {project.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </div>
  );
}
