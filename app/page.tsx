"use client";

import { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";

export default function Home() {
  const palette = {
    black: "var(--mass-black)",
    gray: "var(--mass-gray)",
    white: "var(--mass-white)",
    blue: "var(--mass-blue)",
    darkBlue: "var(--mass-darkblue)",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: palette.black, color: palette.darkBlue }}>
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url(/pexels_spacex_586072.jpg.png)" }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(1,1,9,0.45) 0%, rgba(1,1,9,0.7) 55%, rgba(1,1,9,0.9) 100%)",
        }}
      />
      <Nav />

      <section
        className="relative z-10 flex items-center justify-center px-6 min-h-screen"
      >
        <div className="w-full max-w-3xl text-center">
          <h1
            className="animate-fade-up mb-6"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(3rem, 8vw, 5.25rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--op-on-surface)",
              animationDelay: "0.05s",
            }}
          >
            McMaster Advanced
            <br />
            <span style={{ color: "var(--op-primary)" }}>Space Systems</span>
          </h1>
          <p
            className="animate-fade-up mx-auto mb-9 max-w-xl"
            style={{
              fontFamily: "var(--font-hanken-grotesk), sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "var(--op-on-surface-variant)",
              animationDelay: "0.15s",
            }}
          >
            A student-run club building real projects in space, aerospace, and
            everything that supports them.
          </p>
          <div
            className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              className="inline-block px-7 py-3 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                fontFamily: "var(--font-hanken-grotesk), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "var(--op-on-surface)",
                backgroundColor: "var(--op-primary-container)",
                border: "1px solid var(--op-primary)",
                textDecoration: "none",
              }}
              href="/recruitment"
            >
              JOIN OUR TEAM
            </a>
            <a
              className="inline-block px-7 py-3 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                fontFamily: "var(--font-hanken-grotesk), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "var(--op-on-surface)",
                backgroundColor: "transparent",
                border: "1px solid var(--op-outline)",
                textDecoration: "none",
              }}
              href="/competitions"
            >
              EXPLORE OUR PROJECTS
            </a>
          </div>
        </div>
      </section>

      <main
        className="relative z-10 mx-auto flex w-full flex-col items-center py-12"
        style={{ backgroundColor: "rgba(1, 1, 9, 0.9)" }}
      >
        <div className="flex justify-center w-full text-center">
            <div className="w-full py-24 md:py-24 mt-16" style={{ backgroundImage: `linear-gradient(135deg, ${palette.blue}, ${palette.darkBlue})` }}>
              <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-4 md:gap-8 px-[8%]">
                {[
                  { value: "50+", label: "Club Members" },
                  { value: "3", label: "Active Competitions" },
                  { value: "5", label: "Engineering Sub-Teams" },
                  { value: "2024", label: "Founded" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="animate-fade-up w-full h-32 md:h-44 bg-black rounded-3xl p-4 md:p-6 backdrop-blur-sm flex flex-col items-center justify-center gap-2 md:gap-3 text-white transition-transform duration-200 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <p className="text-center text-3xl md:text-4xl font-semibold">{stat.value}</p>
                    <p className="text-center text-sm md:text-lg text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className="w-full max-w-512 px-10 sm:px-24 lg:px-48 text-center">
          <h2
            className="animate-fade-up mb-8 rounded-md text-3xl sm:text-4xl mt-16 md:mt-32 font-semibold text-left pl-14 sm:pl-22 lg:pl-30"
            style={{ color: palette.white }}
          >
            Our Competitions
          </h2>

          <QueueCards palette={palette}/>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function QueueCards({ palette }: { palette: { black: string; white: string; blue: string; darkBlue: string } }) {
  const competitions = [
    {
      title: "CAN-SBX",
      description:
        "Design and operate an autonomous rover to complete science and navigation tasks in a simulated Martian environment.",
    },
    {
      title: "Competition",
      description:
        "Develop a habitat concept for crewed exploration, focusing on systems integration, sustainability, and human factors.",
    },
  ];

  const TRANSITION_MS = 500;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveIndex((current) => (current === 0 ? competitions.length - 1 : current - 1));
    setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((current) => (current === competitions.length - 1 ? 0 : current + 1));
    setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
  };

  // Get card position (left=-1, center=0, right=1)
  const getCardPosition = (index: number) => {
    const distance = index - activeIndex;
    if (distance > competitions.length / 2) {
      return distance - competitions.length;
    } else if (distance < -competitions.length / 2) {
      return distance + competitions.length;
    }
    return distance;
  };

  return (
    <div className="w-full">
      {/* Carousel with Buttons */}
      <div className="flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="flex-shrink-0 inline-flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:bg-gray-800 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Previous competition"
          style={{
            border: `2px solid ${palette.blue}`,
          }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="relative mx-auto w-full overflow-hidden">
          {/* Cards Container */}
          <div className="relative h-[28rem] sm:h-[32rem] lg:h-160">
            {competitions.map((competition, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 1;

              return (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
                  style={{
                    opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                    transform: `translateX(${position * 110}%) scale(${isActive ? 1 : 0.85})`,
                    pointerEvents: isActive ? "auto" : "none",
                    zIndex: isActive ? 10 : 5 - Math.abs(position),
                  }}
                >
                  <div
                    className="w-full h-[24rem] sm:h-[28rem] lg:h-128 mx-4 sm:mx-8 lg:mx-16 rounded-3xl border shadow-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm"
                    style={{
                      backgroundColor: palette.white,
                      borderColor: isActive ? palette.blue : "var(--mass-darkblue-soft)",
                      color: palette.black,
                    }}
                  >
                    <h3
                      className="text-left text-2xl md:text-3xl px-2 sm:px-8 mt-8 sm:mt-16 mb-6 sm:mb-8 font-semibold"
                      style={{ color: palette.black }}
                    >
                      {competition.title}
                    </h3>
                    <p className="text-left leading-7 px-2 sm:px-8 mb-4 text-slate-700">
                      {competition.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="flex-shrink-0 inline-flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:bg-gray-800 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Next competition"
          style={{
            border: `2px solid ${palette.blue}`,
          }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mb-24">
        {competitions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setActiveIndex(index);
              setTimeout(() => setIsTransitioning(false), TRANSITION_MS);
            }}
            className="transition-all duration-300"
            style={{
              width: activeIndex === index ? 32 : 10,
              height: 10,
              backgroundColor: palette.white,
              borderRadius: 5,
              border: "none",
              cursor: "pointer",
              opacity: activeIndex === index ? 1 : 0.6,
            }}
            aria-label={`Go to competition ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>


    </div>
  );
}
