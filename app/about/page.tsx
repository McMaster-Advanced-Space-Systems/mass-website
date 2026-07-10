import type { Metadata } from "next";
import Nav from "../nav";
import Footer from "../footer";

export const metadata: Metadata = {
  title: "About Us — McMaster Advanced Space Systems",
  description:
    "McMaster Advanced Space Systems (MASS) is a student-led team advancing space research and inspiring the next generation of engineers.",
};

const STATS = [
  { value: "2", label: "Competitions entered" },
  { value: "CAN-SBX", label: "SEDS Canada" },
  { value: "CAN-ARX", label: "SEDS Canada" },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--mass-black)" }}>
      <Nav />

      <main className="mx-auto w-full max-w-3xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <h1
          className="animate-fade-up text-4xl font-semibold text-white sm:text-5xl"
          style={{ animationDelay: "0.05s" }}
        >
          About Us
        </h1>

        <div
          className="animate-fade-up mt-6 space-y-6 text-lg leading-8 text-slate-200"
          style={{ animationDelay: "0.12s" }}
        >
          <p>
            McMaster Advanced Space Systems (MASS) is a student-led team focused on
            advancing space research and inspiring the next generation of engineers.
            Founded in 2023, our team has successfully competed in competitions like
            CAN-SBX and CAN-ARX, both hosted by SEDS Canada.
          </p>
          <p>
            We look forward to building new projects, hosting outreach events, and
            making McMaster proud!
          </p>
        </div>

        <dl
          className="animate-fade-up mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
          style={{ animationDelay: "0.2s" }}
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label + value}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-6 text-center"
            >
              <dt className="text-2xl font-semibold text-white">{value}</dt>
              <dd className="mt-1 text-sm text-slate-400">{label}</dd>
            </div>
          ))}
        </dl>
      </main>

      <Footer />
    </div>
  );
}
