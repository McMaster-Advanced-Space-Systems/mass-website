import type { Metadata } from "next";
import { Inter, Michroma, Space_Mono } from "next/font/google";
import Nav from "../nav";
import Footer from "../footer";
import TeamTabs from "./team-tabs";

/* MASS Preliminary Branding Standards 2025-2026: Michroma for titles, Space
   Mono for highlights, Akzidenz-Grotesk for body text. Akzidenz-Grotesk has
   no Google Fonts release, so Inter stands in behind it (same approach as
   the Current Projects page). */
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const YELLOW = "#f7901f";
const INK = "#101010";
const PAPER = "#f5f5f5";

const DISPLAY = "var(--font-michroma), sans-serif";
const MONO = "var(--font-space-mono), ui-monospace, monospace";
const BODY =
  '"Akzidenz-Grotesk", "Akzidenz-Grotesk Pro", var(--font-inter), "Helvetica Neue", Arial, sans-serif';

export const metadata: Metadata = {
  title: "Our Team — McMaster Advanced Space Systems",
  description:
    "Meet the people behind McMaster Advanced Space Systems (MASS): the management team, the SOLARIS team, and the teams behind our past projects.",
};

export default function MassTeamPage() {
  return (
    <div
      className={`${michroma.variable} ${spaceMono.variable} ${inter.variable}`}
      style={{ minHeight: "100vh", backgroundColor: INK, color: PAPER }}
    >
      <Nav />

      <header className="px-6 pb-12 pt-32 md:px-10 xl:px-16">
        <div className="mx-auto max-w-[96rem]">
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
            Our <span style={{ color: YELLOW }}>team.</span>
          </h1>

          <div style={{ width: "4.5rem", height: "3px", backgroundColor: YELLOW, marginBottom: "2.25rem" }} />

          <p style={{ fontFamily: BODY, fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.78, maxWidth: "60ch" }}>
            The people behind McMaster&rsquo;s student-led space systems team: the
            management team that runs the club, the SOLARIS project team, and the
            teams behind our past projects.
          </p>
        </div>
      </header>

      <main className="px-6 pb-24 md:px-10 xl:px-16">
        <div className="mx-auto max-w-[96rem]">
          <TeamTabs />
        </div>
      </main>

      <Footer />
    </div>
  );
}
