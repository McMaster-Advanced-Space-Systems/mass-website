"use client";

import { useState } from "react";

export default function Home() {
  const palette = {
    black: "#010109",
    white: "#f2f2f0",
    blue: "#33386d",
    darkBlue:	"#000649",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: palette.black, color: palette.darkBlue }}>
      <nav
        className="sticky top-0 z-10 flex items-center border-b-2 py-7"
        style={{
          backgroundColor: palette.black,
          borderColor: palette.darkBlue,
          color: palette.white,
          paddingLeft: '250px',
          paddingRight: '200px',
        }}
      >
        <div className="font-bold text-lg mr-8">MASS</div>
        <div className="flex gap-4 flex-1 justify-end">
          <a
            href="#"
            className="inline-block rounded-lg px-6 py-3 text-sm font-semibold bg-transparent transition-colors hover:bg-blue-950"
            style={{ color: palette.white }}
          >
            HOME
          </a>

          <a
            href="#"
            className="inline-block rounded-lg px-6 py-3 text-sm font-semibold bg-transparent transition-colors hover:bg-blue-950"
            style={{ color: palette.white }}
          >
            COMPETITIONS
          </a>
          <a
            href="#"
            className="inline-block rounded-lg px-6 py-3 text-sm font-semibold bg-transparent transition-colors hover:bg-blue-950"
            style={{ color: palette.white }}
          >
            CONTACT US
          </a>
          <a
            href="#"
            className="inline-block rounded-lg px-6 py-3 text-sm font-semibold bg-transparent transition-colors hover:bg-blue-950"
            style={{ color: palette.white }}
          >
            OUR TEAM
          </a>
        </div>
      </nav>

      <section
        className="flex items-center justify-center px-6"
        style={{ backgroundColor: palette.white, height: 'calc(100vh - 70px)' }}
      >
        <div className="w-full max-w-2xl text-center">
          <h1
            className="inline-block mb-5 px-6 py-4 text-4xl font-semibold sm:text-5xl"
            style={{ color: palette.black }}
          >
            McMaster Advanced<br />Space Systems
          </h1>
          <p
            className="mb-7 rounded-lg px-5 py-3 text-lg"
            style={{ backgroundColor: palette.white, color: palette.black }}
          >
            Designing, building, and testing autonomous <br/>technologies for various challenges.
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
        className="mx-auto flex w-full flex-col items-center py-12"
        style={{ backgroundColor: palette.black }}
      >
        <div className="flex justify-center w-full h-128 text-center">
            <div className="w-full h-96 mt-16" style={{ backgroundImage: `linear-gradient(135deg, ${palette.blue}, ${palette.darkBlue})` }}>
              <div className="flex flex-row justify-center items-center mt-16 gap-4 px-64">
                <div className="w-full h-64 mx-4 bg-black rounded-3xl p-8 md:p-10 backdrop-blur-sm flex items-center justify-center text-white">
                  <h1 className="text-center text-2xl font-semibold">8000</h1>
                </div>
                <div className="w-full h-64 mx-4 bg-black rounded-3xl p-8 md:p-10 backdrop-blur-sm flex items-center justify-center text-white">
                  <h1 className="text-center text-2xl font-semibold">8000</h1>
                </div>
                <div className="w-full h-64 mx-4 bg-black rounded-3xl p-8 md:p-10 backdrop-blur-sm flex items-center justify-center text-white">
                  <h1 className="text-center text-2xl font-semibold">8000</h1>
                </div>
                <div className="w-full h-64 mx-4 bg-black rounded-3xl p-8 md:p-10 backdrop-blur-sm flex items-center justify-center text-white">
                  <h1 className="text-center text-2xl font-semibold">8000</h1>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full max-w-512 text-center">
          <h2
            className="mb-8 rounded-md text-4xl mt-32 font-semibold"
            style={{ color: palette.white }}
          >
            Our Competitions
          </h2>

          <QueueCards palette={palette}/>
        </div>
      </main>

      <footer
        style={{
          backgroundColor: palette.black,
          color: palette.darkBlue,
          borderTop: `2px solid ${palette.black}`,
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-6 sm:px-10">
          <p className="text-center"></p>
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
          className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
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
          <div className="relative h-160">
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
                    className="w-full h-128 mx-16 rounded-3xl border shadow-2xl p-8 md:p-10 backdrop-blur-sm"
                    style={{
                      backgroundColor: palette.white,
                      borderColor: isActive ? palette.blue : `${palette.darkBlue}40`,
                      color: palette.black,
                    }}
                  >
                    <h3
                      className="text-left text-2xl md:text-3xl px-8 mt-16 mb-8 font-semibold"
                      style={{ color: palette.black }}
                    >
                      {competition.title}
                    </h3>
                    <p className="text-left leading-7 px-8 mb-4 text-slate-700">
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
          className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
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
      <div className="flex items-center justify-center gap-2">
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
              backgroundColor: activeIndex === index ? palette.blue : palette.darkBlue,
              borderRadius: 5,
              border: "none",
              cursor: "pointer",
              opacity: activeIndex === index ? 1 : 0.5,
            }}
            aria-label={`Go to competition ${index + 1}`}
          />
        ))}
      </div>


    </div>
  );
}
