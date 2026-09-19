import type { Metadata } from "next";
import Nav from "../nav";
import Footer from "../footer";

export const metadata: Metadata = {
  title: "About Us — McMaster Advanced Space Systems",
  description:
    "McMaster Advanced Space Systems (MASS) is a student-led team advancing space research and inspiring the next generation of engineers.",
};

export default function AboutPage() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--mass-black)" }}
    >
      <Nav />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-40 pb-16 sm:pt-52 sm:pb-24">
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
      </main>

      <Footer />
    </div>
  );
}
