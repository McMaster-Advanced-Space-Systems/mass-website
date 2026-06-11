"use client";

import { useState } from "react";

export default function Home() {
  const palette = {
    black: "#010109",
    gray: "#14141441",
    white: "#f2f2f0",
    blue: "#33386d",
    darkBlue:	"#000649",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: palette.black, color: palette.darkBlue }}>
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url(/earth.jpg)" }}
      />
      <nav
        className="sticky top-0 z-50 flex flex-wrap items-center border-b-2 px-4 py-4 sm:px-8 sm:py-7 lg:px-24 xl:px-48"
        style={{
          backgroundColor: palette.black,
          borderColor: palette.darkBlue,
          color: palette.white,
          fontFamily: "var(--font-julius-sans-one)",
        }}
      >
        <div className="font-bold text-lg mr-4 sm:mr-8">MASS</div>
        <div className="flex flex-wrap gap-1 sm:gap-4 flex-1 justify-end">
          <a
            href="#"
            className="inline-block rounded-lg px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold bg-transparent transition-colors hover:bg-blue-950"
            style={{ color: palette.white }}
          >
            HOME
          </a>

          <a
            href="#"
            className="inline-block rounded-lg px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold bg-transparent transition-colors hover:bg-blue-950"
            style={{ color: palette.white }}
          >
            COMPETITIONS
          </a>
          <a
            href="#"
            className="inline-block rounded-lg px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold bg-transparent transition-colors hover:bg-blue-950"
            style={{ color: palette.white }}
          >
            CONTACT US
          </a>
          <a
            href="#"
            className="inline-block rounded-lg px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold bg-transparent transition-colors hover:bg-blue-950"
            style={{ color: palette.white }}
          >
            OUR TEAM
          </a>
        </div>
      </nav>

      <section
        className="relative z-10 flex items-center justify-center px-6 min-h-[calc(100vh-70px)]"
      >
        <div className="w-full max-w-2xl text-center">
          <h1
            className="inline-block mb-5 px-6 py-4 text-4xl font-semibold sm:text-5xl"
            style={{ color: palette.white }}
          >
            McMaster Advanced<br />Space Systems
          </h1>
          <p
            className="mb-7 rounded-lg px-5 py-3 text-lg"
            style={{ color: palette.white }}
          >
            Designing, building, and testing autonomous <br className="hidden sm:block"/>technologies for various challenges.
          </p>
          <a
            className="rounded-lg border-2 px-6 py-3 font-semibold shadow-black/50 transition-colors bg-[var(--bg)] hover:bg-[var(--bghover)] hover:shadow-xl"
            style={
              {
                color: palette.white,
                borderColor: palette.black,
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
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="w-full h-32 md:h-44 bg-black rounded-3xl p-4 md:p-6 backdrop-blur-sm flex flex-col items-center justify-center gap-2 md:gap-3 text-white"
                  >
                    <h1 className="text-center text-3xl md:text-4xl font-semibold">{stat.value}</h1>
                    <h1 className="text-center text-sm md:text-lg text-slate-300">{stat.label}</h1>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className="w-full max-w-512 px-10 sm:px-24 lg:px-48 text-center">
          <h2
            className="mb-8 rounded-md text-3xl sm:text-4xl mt-16 md:mt-32 font-semibold text-left pl-14 sm:pl-22 lg:pl-30"
            style={{ color: palette.white }}
          >
            Our Competitions
          </h2>

          <QueueCards palette={palette}/>
        </div>
      </main>

      <footer
        className="relative z-10"
        style={{
          backgroundColor: "rgba(1, 1, 9)",
          color: palette.white,
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10">
          <div className="grid gap-8 my-20 md:grid-cols-[1.6fr_1fr]">
            <div className="p-0">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                McMaster Advanced Space Systems
              </h2>
              <div className="mt-6 space-y-5 text-left text-sm sm:text-base text-slate-200">
                <div>
                  <h4 className="text-sm uppercase tracking-[0.32em] text-slate-400">Instagram</h4>
                  <a
                    href="https://www.instagram.com/mcmasteradvancedspacesystems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-3 rounded-2xl bg-black/20 px-4 py-3 text-white transition hover:bg-white/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2Zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.5a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm4.95-.3a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
                    </svg>
                    @mac.spacesystems
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-sm text-slate-400">
            © 2026 McMaster Advanced Space Systems. All rights reserved.
          </div>
        </div>
      </footer>
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
    {
      title: "Competition",
      description:
        "Build an intelligent robotic system for satellite servicing, debris removal, and cooperative payload deployment.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    setIsTransitioning(true);
    setActiveIndex((current) => (current === 0 ? competitions.length - 1 : current - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((current) => (current === competitions.length - 1 ? 0 : current + 1));
    setTimeout(() => setIsTransitioning(false), 500);
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
          className="flex-shrink-0 inline-flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      borderColor: isActive ? palette.blue : `${palette.darkBlue}40`,
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
          className="flex-shrink-0 inline-flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
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
              setTimeout(() => setIsTransitioning(false), 500);
            }}
            className="transition-all duration-300"
            style={{
              width: activeIndex === index ? 32 : 10,
              height: 10,
              backgroundColor: activeIndex === index ? palette.white : palette.white,
              borderRadius: 5,
              border: "none",
              cursor: "pointer",
              opacity: activeIndex === index ? 1 : 0.6,
            }}
            aria-label={`Go to competition ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
}
