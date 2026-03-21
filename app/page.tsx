export default function Home() {
  const palette = {
    deepBlue: "#355872",
    skyBlue: "#7AAACE",
    lightBlue: "#9CD5FF",
    cream: "#F7F8F0",
  };

  const colorList = [palette.deepBlue, palette.skyBlue, palette.lightBlue, palette.cream];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: colorList[3], color: colorList[0] }}>
      <nav
        className="sticky top-0 z-10 flex flex-wrap items-center justify-center gap-3 border-b-2 px-6 py-4 sm:justify-end"
        style={{
          backgroundColor: colorList[0],
          borderColor: colorList[1],
        }}
      >
        <a
          href="#"
          className="inline-block rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: colorList[1],
            color: colorList[0],
            borderColor: colorList[3],
          }}
        >
          Home
        </a>
        <a
          href="#"
          className="inline-block rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: colorList[1],
            color: colorList[0],
            borderColor: colorList[3],
          }}
        >
          Contact Us
        </a>
        <a
          href="#"
          className="inline-block rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: colorList[1],
            color: colorList[0],
            borderColor: colorList[3],
          }}
        >
          About Us
        </a>
      </nav>

      <section
        className="flex min-h-screen items-center justify-center px-6"
        style={{ backgroundColor: colorList[3] }}
      >
        <div className="w-full max-w-2xl text-center">
          <h1
            className="mb-5 rounded-xl px-6 py-4 text-4xl font-semibold sm:text-5xl"
            style={{ backgroundColor: colorList[0], color: colorList[3] }}
          >
            McMaster Advanced Space Systems
          </h1>
          <p
            className="mb-7 rounded-lg px-5 py-3 text-lg"
            style={{ backgroundColor: colorList[2], color: colorList[0] }}
          >
            Designing, building, and testing autonomous rover systems for planetary exploration challenges.
          </p>
          <button
            className="rounded-lg border-2 px-6 py-3 font-semibold"
            style={{
              backgroundColor: colorList[1],
              color: colorList[0],
              borderColor: colorList[0],
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 sm:px-10">
        <section
          className="rounded-2xl border-2 p-6"
          style={{ backgroundColor: colorList[2], borderColor: colorList[0] }}
        >
          <h2
            className="mb-4 rounded-md px-4 py-2 text-2xl font-semibold"
            style={{ backgroundColor: colorList[0], color: colorList[3] }}
          >
            About the Team
          </h2>
          <p className="mb-3">
            The team develops advanced rover platforms focused on mobility, manipulation, and autonomy under
            realistic mission constraints.
          </p>
          <p>
            Work spans mechanical design, embedded systems, software integration, and field testing for dependable
            performance in extreme environments.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article
            className="rounded-xl border-2 p-5"
            style={{ backgroundColor: colorList[3], borderColor: colorList[0] }}
          >
            <h3
              className="mb-3 rounded px-3 py-2 font-semibold"
              style={{ backgroundColor: colorList[0], color: colorList[3] }}
            >
              Mission
            </h3>
            <p
              className="rounded-md px-3 py-4"
              style={{ backgroundColor: colorList[2], color: colorList[0] }}
            >
              Build robust rover systems for competitive analog Mars missions.
            </p>
          </article>
          <article
            className="rounded-xl border-2 p-5"
            style={{ backgroundColor: colorList[3], borderColor: colorList[0] }}
          >
            <h3
              className="mb-3 rounded px-3 py-2 font-semibold"
              style={{ backgroundColor: colorList[0], color: colorList[3] }}
            >
              Projects
            </h3>
            <p
              className="rounded-md px-3 py-4"
              style={{ backgroundColor: colorList[2], color: colorList[0] }}
            >
              Ongoing subsystems include drivetrain, navigation, science, and communications.
            </p>
          </article>
          <article
            className="rounded-xl border-2 p-5"
            style={{ backgroundColor: colorList[3], borderColor: colorList[0] }}
          >
            <h3
              className="mb-3 rounded px-3 py-2 font-semibold"
              style={{ backgroundColor: colorList[0], color: colorList[3] }}
            >
              Community
            </h3>
            <p
              className="rounded-md px-3 py-4"
              style={{ backgroundColor: colorList[2], color: colorList[0] }}
            >
              Students collaborate across disciplines while mentoring new members each term.
            </p>
          </article>
        </section>
      </main>

      <footer
        style={{
          backgroundColor: colorList[0],
          color: colorList[3],
          borderTop: `2px solid ${colorList[0]}`,
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-6 sm:px-10">
          <p className="text-center"></p>
        </div>
      </footer>
    </div>
  );
}
