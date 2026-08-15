"use client";

import Footer from "../footer";
import Nav from "../nav";

export default function AboutPage() {
  return (
    <>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .about-fade { transition: none; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", backgroundColor: "#121414" }}>

        <Nav />

        {/* ────────────── HERO ────────────── */}
        <header style={{ backgroundColor: "#0B0D17", padding: "6rem 1.5rem 5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-hanken-grotesk), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.3em",
                color: "#b9c5f6",
                marginBottom: "1.75rem",
              }}
            >
              MCMASTER ADVANCED SPACE SYSTEMS
            </p>

            <h1
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: 700,
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#e3e2e2",
                marginBottom: "2rem",
                maxWidth: "14ch",
              }}
            >
              Aerospace
              <br />
              <span style={{ color: "#b9c5f6" }}>research through</span>
              <br />
              competition.
            </h1>

            <div style={{ width: "3rem", height: "3px", backgroundColor: "#b9c5f6" }} />
          </div>
        </header>

        {/* ────────────── WHO WE ARE ────────────── */}
        <section style={{ padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-hanken-grotesk), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.3em",
                color: "#b9c5f6",
                marginBottom: "0.75rem",
              }}
            >
              WHO WE ARE
            </p>

            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2rem)",
                fontWeight: 600,
                lineHeight: "1.25",
                letterSpacing: "-0.01em",
                color: "#e3e2e2",
                marginBottom: "1.5rem",
                maxWidth: "24ch",
              }}
            >
              Student-led. Space-focused. Built on curiosity.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-hanken-grotesk), sans-serif",
                fontSize: "1rem",
                lineHeight: "1.75",
                color: "#c6c6cf",
                maxWidth: "68ch",
              }}
            >
              McMaster Advanced Space Systems (MASS) is a student-led team focused on
              advancing space research and inspiring the next generation of engineers.
              Founded in ####, our team has successfully competed in competitions like
              CAN-SBX and CAN-ARX, both hosted by SEDS Canada. We look forward to
              building new projects, hosting outreach events, and making McMaster proud!
            </p>
          </div>
        </section>
      <Footer />

      </div>
      
    </>
  );
}
