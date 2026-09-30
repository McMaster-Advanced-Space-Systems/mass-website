import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Inter, Michroma, Space_Mono } from "next/font/google";
import Nav from "../nav";
import Footer from "../footer";

import canSbxTeam from "../../public/about/can-sbx-2024-team.jpg";
import canArxTeam from "../../public/about/can-arx-2024-team.jpg";
import communityEvent from "../../public/about/community-event.jpg";
import groupPhoto from "../../public/projects/stellarscope/multi-team-photo.png";

/* MASS Preliminary Branding Standards 2025-2026: Michroma for titles, Space
   Mono for highlights, Akzidenz-Grotesk for body text (Inter stands in, as on
   the Our Team and Current Projects pages). */
const michroma = Michroma({ weight: "400", subsets: ["latin"], variable: "--font-michroma", display: "swap" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const YELLOW = "#f7901f";
const INK = "#101010";
const PAPER = "#f5f5f5";

const DISPLAY = "var(--font-michroma), sans-serif";
const MONO = "var(--font-space-mono), ui-monospace, monospace";
const BODY =
  '"Akzidenz-Grotesk", "Akzidenz-Grotesk Pro", var(--font-inter), "Helvetica Neue", Arial, sans-serif';

export const metadata: Metadata = {
  title: "About Us — McMaster Advanced Space Systems",
  description:
    "McMaster Advanced Space Systems (MASS) is a student-run engineering team at McMaster University that designs and builds hardware for space research.",
};

export default function AboutPage() {
  return (
    <div
      className={`${michroma.variable} ${spaceMono.variable} ${inter.variable}`}
      style={{ minHeight: "100vh", backgroundColor: INK, color: PAPER }}
    >
      <Nav />

      {/* Top padding clears the fixed nav (~136px tall). */}
      <main className="px-6 pb-24 pt-44 md:px-10">
        <header className="mx-auto max-w-3xl">
          <p style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.3em", color: "rgba(245,245,245,0.45)", marginBottom: "2rem" }}>
            MCMASTER ADVANCED SPACE SYSTEMS
          </p>
          <h1
            className="animate-fade-up"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(2.25rem, 7vw, 4.75rem)", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "2.25rem" }}
          >
            About <span style={{ color: YELLOW }}>us.</span>
          </h1>
          <div style={{ width: "4.5rem", height: "3px", backgroundColor: YELLOW, marginBottom: "2.25rem" }} />
          <p className="animate-fade-up" style={{ ...LEAD, animationDelay: "0.1s" }}>
            McMaster Advanced Space Systems is a student-run engineering team at
            McMaster University. We design, build and test hardware for space
            research, and we&rsquo;re growing every year.
          </p>
        </header>

        <Photo
          src={canSbxTeam}
          alt="The CAN-SBX 2024 team standing behind a table with their payload, a weather balloon behind them"
          caption="The CAN-SBX 2024 team with their payload"
          priority
          className="mx-auto mt-16 max-w-6xl"
        />

        <Chapter title="We're a student team that builds for space.">
          <p>
            MASS is a technical engineering club focused on space and
            space-adjacent technology. Most of our 85 members study engineering,
            and students from science and other programs work alongside them.
          </p>
          <p>
            The club is organized around project teams. Each one has its own leads
            and subteams for mechanical, electrical, software and science work,
            and an executive team handles finance, outreach and the day-to-day
            running of the club.
          </p>
        </Chapter>

        <Photo
          src={groupPhoto}
          alt="A group of MASS members posing together on a forest trail"
          caption="MASS members"
          className="mx-auto mt-16 max-w-5xl"
        />

        <Chapter title="We learn by building real hardware.">
          <p>
            Most of our projects are built for expeditions run by Students for the
            Exploration and Development of Space (SEDS) Canada, such as CAN-ARX,
            CAN-RGX and CAN-SBX.
          </p>
          <p>
            In 2024, our CAN-ARX team designed and built a collapsible radio
            telescope and took it to Baie-Saint-Paul, Quebec, to measure radio
            emissions from the Sun and from hydrogen gas in our galaxy. That same
            year, our CAN-SBX team sent E.&nbsp;coli and yeast more than 30&nbsp;km
            into the stratosphere: the first biological payload in the history of
            SEDS Canada&rsquo;s CAN-SBX, with support from the Canadian Space
            Agency, SNOLAB and NOSM University.
          </p>
          <p>
            That telescope became the starting point for Stellarscope, a project
            to link radio telescopes into a synchronized array. Our CAN-SBX work
            continues with SOLARIS, which is studying how the atmosphere distorts
            optical signals travelling between the ground and space.
          </p>
        </Chapter>

        <Photo
          src={canArxTeam}
          alt="The CAN-ARX 2024 team on a rocky mountain summit, gathered around their radio telescope"
          caption="The CAN-ARX 2024 team with their radio telescope in Baie-Saint-Paul, Quebec"
          className="mx-auto mt-16 max-w-5xl"
        />

        <Chapter>
          <p>
            Outside the lab, we run technical workshops, co-host Industry Night
            with other McMaster space teams, and take part in community events to
            share what we do.
          </p>
        </Chapter>

        {/* This photo is only 637px wide, so it is never shown larger than that. */}
        <Photo
          src={communityEvent}
          alt="A group of MASS members standing together outdoors at a community event"
          caption="MASS members at a community event"
          className="mx-auto mt-16 max-w-[637px]"
        />

        <Chapter title="We're aiming higher every year.">
          <p>
            We want MASS to be where McMaster students do meaningful aerospace
            engineering: hands-on work that turns what they learn in class into
            real experience.
          </p>
          <p>
            That means taking on harder problems each year, growing what our
            CAN-ARX and CAN-SBX systems can do, and completing projects set by
            leading space organizations. We&rsquo;re also building closer ties with
            industry and academia, so that every student at Mac gets more out of
            being part of the team.
          </p>
        </Chapter>

        <div className="mx-auto mt-16 flex max-w-3xl flex-wrap gap-x-10 gap-y-4 border-t pt-10" style={{ borderColor: "rgba(245,245,245,0.12)" }}>
          <CtaLink href="/mass-team">Meet the team</CtaLink>
          <CtaLink href="/contact">Get in touch</CtaLink>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const LEAD = { fontFamily: BODY, fontSize: "1.15rem", lineHeight: 1.8, opacity: 0.85, textWrap: "pretty" } as const;

function Chapter({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="mx-auto mt-16 max-w-3xl">
      {title && (
        <h2 className="mb-6" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.3rem, 3vw, 1.75rem)", lineHeight: 1.3, textWrap: "balance" }}>
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-5" style={{ fontFamily: BODY, fontSize: "1.05rem", lineHeight: 1.85, opacity: 0.8, textWrap: "pretty" }}>
        {children}
      </div>
    </section>
  );
}

function Photo({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        placeholder="blur"
        sizes="(min-width: 1200px) 1152px, 100vw"
        className="h-auto w-full rounded-lg"
      />
      <figcaption
        className="mt-3"
        style={{ fontFamily: MONO, fontSize: "0.72rem", letterSpacing: "0.08em", opacity: 0.55 }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

function CtaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="border-b pb-1 transition-colors hover:border-[#f7901f] hover:text-[#f7901f]"
      style={{ fontFamily: MONO, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", borderColor: "rgba(245,245,245,0.35)" }}
    >
      {children} →
    </Link>
  );
}
