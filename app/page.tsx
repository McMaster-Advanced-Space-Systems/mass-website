"use client";

import { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
import HeroBackground from "./hero-background";

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
      <HeroBackground />
      <Nav />

      <section
        className="relative z-10 flex items-center justify-center px-6 min-h-screen"
      >
        <div className="w-full max-w-2xl text-center">
          <h1
            className="animate-fade-up inline-block mb-5 px-6 py-4 text-4xl font-semibold sm:text-5xl"
            style={{ color: palette.white, animationDelay: "0.05s" }}
          >
            McMaster Advanced<br />Space Systems
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
                "--bg": palette.darkBlue,
                "--bghover": palette.blue,
              } as React.CSSProperties
            }
            href="#"
          >
            Learn More
          </a>
        </div>
      </section>

      <main
        className="relative z-10 mx-auto flex w-full flex-col items-center py-12"
      >
        <div className="flex justify-center w-full text-center">
            <div className="w-full py-24 md:py-24 mt-16" style={{ backgroundImage: "linear-gradient(135deg, #33386d99, #00064999)" }}>
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
