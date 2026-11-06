import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import PageShell from "../components/PageShell";
import {
  Banner,
  ButtonLink,
  CARD,
  CARD_BG,
  CtaBand,
  DISPLAY,
  Eyebrow,
  MONO,
  Section,
  TITLE,
} from "../components/ui";
import { PROJECTS } from "../projects/data";

import canArxTeam from "../../public/about/can-arx-2024-team.jpg";
import canSbxTeam from "../../public/about/can-sbx-2024-team.jpg";
import communityEvent from "../../public/about/community-event.jpg";
import groupPhoto from "../../public/projects/stellarscope/multi-team-photo.png";

export const metadata: Metadata = {
  title: "About Us — McMaster Advanced Space Systems",
  description:
    "McMaster Advanced Space Systems (MASS) is a student-run engineering team at McMaster University that designs and builds hardware for space research.",
};

const SUBTEAMS = [
  { name: "Mechanical", body: "Structures, mounts and enclosures that hold up in the field and in flight." },
  { name: "Electrical", body: "Circuits, power and sensors, from the first schematic to the finished board." },
  { name: "Software", body: "Flight software, data capture and the tools that analyse what we collect." },
  { name: "Science", body: "The experiment itself: the question we are asking and what the data says." },
];

type Milestone = {
  when: string;
  tag?: string;
  title: string;
  body: string;
  image: string | StaticImageData;
  alt: string;
  /** Show the whole image on a dark tile instead of cropping it. */
  contain?: boolean;
  href?: string;
};

const STORY: Milestone[] = [
  {
    when: "2023",
    title: "MASS is founded",
    body: "A student-led team forms at McMaster to advance space research and inspire the next generation of engineers.",
    image: "/emblem.png",
    alt: "The MASS emblem",
    contain: true,
  },
  {
    when: "2024",
    tag: "CAN-ARX",
    title: "A telescope on a summit",
    body: "Our CAN-ARX team builds a collapsible radio telescope and takes it to Baie-Saint-Paul, Quebec, to measure radio emissions from the Sun and from hydrogen gas in our galaxy.",
    image: "/projects/stellarscope/using-telescope.png",
    alt: "Team members operating the radio telescope on a mountain summit",
    href: "/projects/stellarscope",
  },
  {
    when: "2024",
    tag: "CAN-SBX",
    title: "Biology above 30 km",
    body: "Our CAN-SBX team sends E. coli and yeast into the stratosphere: the first biological payload in the history of SEDS Canada's CAN-SBX.",
    image: canSbxTeam,
    alt: "The CAN-SBX 2024 team standing behind a table with their payload, a weather balloon behind them",
    href: "/projects/stratogene",
  },
  {
    when: "Now",
    tag: "CAN-SBX",
    title: "SOLARIS",
    body: "Our CAN-SBX work continues with SOLARIS, which is studying how the atmosphere distorts optical signals travelling between the ground and space.",
    image: "/earth.jpg",
    alt: "Earth's atmosphere seen from high altitude",
    href: "/projects/solaris",
  },
];

const BEYOND_THE_LAB = [
  { title: "Technical workshops", body: "Hands-on sessions that share the skills behind our projects." },
  { title: "Industry Night", body: "Co-hosted with the other McMaster space teams." },
  { title: "Community events", body: "Sharing what we do with students and the wider community." },
];

export default function AboutPage() {
  const activeProjects = PROJECTS.filter((project) => project.status === "current").length;

  const glance = [
    { label: "Founded", value: "2023" },
    { label: "Members", value: "85" },
    { label: "Home", value: "McMaster University, Hamilton, Ontario" },
    { label: "Projects", value: `${PROJECTS.length} · ${activeProjects} active` },
  ];

  return (
    <PageShell>
      <Banner
        src={canArxTeam}
        alt="The CAN-ARX 2024 team on a rocky mountain summit, gathered around their radio telescope"
        position="center 35%"
        pill="McMaster University · Since 2023"
        caption="The CAN-ARX 2024 team with their radio telescope"
        credit="Baie-Saint-Paul, QC · 2024"
      />

      {/* ───── Intro + at a glance ───── */}
      <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_22rem] lg:gap-20">
        <div className="animate-fade-up" style={{ animationDelay: "0.08s" }}>
          <h1
            style={{
              fontFamily: DISPLAY,
              color: "var(--mass-paper)",
              fontSize: "clamp(1.5rem, 7.5vw, 3.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            About us.
          </h1>
          <div className="mt-4">
            <Eyebrow>McMaster Advanced Space Systems</Eyebrow>
          </div>
          <div className="mt-6 h-[3px] w-14" style={{ backgroundColor: "var(--mass-secondary)" }} />
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
            McMaster Advanced Space Systems is a student-run engineering team at McMaster
            University. We design, build and test hardware for space research, and we&rsquo;re
            growing every year.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/mass-team">Meet the team</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              Our projects
            </ButtonLink>
          </div>
        </div>

        <aside
          className={`animate-fade-up self-start p-6 sm:p-8 ${CARD}`}
          style={{ ...CARD_BG, animationDelay: "0.16s" }}
          aria-label="MASS at a glance"
        >
          <Eyebrow>At a glance</Eyebrow>
          <dl className="mt-5 divide-y divide-white/10">
            {glance.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-6 py-3.5 first:pt-0 last:pb-0">
                <dt className="text-xs tracking-[0.12em] text-slate-400 uppercase" style={{ fontFamily: MONO }}>
                  {row.label}
                </dt>
                <dd className="text-right font-semibold text-white">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* ───── Who we are ───── */}
      <Section heading="A student team that builds for space" eyebrow="Technical engineering club">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              MASS is a technical engineering club focused on space and space-adjacent
              technology. Most of our 85 members study engineering, and students from science
              and other programs work alongside them.
            </p>
            <p>
              We learn by building real hardware. Most of our projects are built for
              expeditions run by Students for the Exploration and Development of Space (SEDS)
              Canada, such as CAN-ARX, CAN-RGX and CAN-SBX.
            </p>
          </div>
          <figure className={`overflow-hidden ${CARD}`} style={CARD_BG}>
            <div className="relative aspect-[3/2]">
              <Image
                src={groupPhoto}
                alt="A group of MASS members posing together on a forest trail"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </div>
            <figcaption className="px-5 py-3 text-sm text-slate-300">MASS members</figcaption>
          </figure>
        </div>
      </Section>

      {/* ───── How we're organized ───── */}
      <Section heading="How we're organized" eyebrow="Project teams and an executive team">
        <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
          The club is organized around project teams. Each one has its own leads and subteams
          for mechanical, electrical, software and science work.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUBTEAMS.map((team) => (
            <li key={team.name} className={`p-5 sm:p-6 ${CARD}`} style={CARD_BG}>
              <h3 className="flex items-center gap-2.5 text-lg font-semibold text-white" style={TITLE}>
                <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--mass-secondary)" }} />
                {team.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{team.body}</p>
            </li>
          ))}
        </ul>
        <div className={`mt-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 p-5 sm:p-6 ${CARD}`} style={CARD_BG}>
          <div>
            <h3 className="text-lg font-semibold text-white" style={TITLE}>
              Executive team
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Looks after finance, outreach and the day-to-day running of the club.
            </p>
          </div>
          <Link
            href="/mass-team"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--mass-highlight)]"
          >
            Meet the executives <span aria-hidden>→</span>
          </Link>
        </div>
      </Section>

      {/* ───── Our story ───── */}
      <Section heading="Our story" eyebrow="2023 to today">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STORY.map((step) => (
            <li key={step.title} className={`flex flex-col overflow-hidden ${CARD}`} style={CARD_BG}>
              <div className="relative aspect-[4/3] bg-[#141414]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={step.contain ? "object-contain p-10" : "object-cover"}
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <Eyebrow>
                  {step.when}
                  {step.tag && ` · ${step.tag}`}
                </Eyebrow>
                <h3 className="mt-2 text-lg font-semibold text-white" style={TITLE}>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.body}</p>
                {step.href && (
                  <Link
                    href={step.href}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-semibold text-white transition-colors hover:text-[var(--mass-highlight)]"
                  >
                    View project <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ───── Beyond the lab ───── */}
      <Section heading="Beyond the lab" eyebrow="Workshops, industry and community">
        <div className="grid items-stretch gap-5 lg:grid-cols-[2fr_3fr]">
          <figure className={`flex flex-col overflow-hidden ${CARD}`} style={CARD_BG}>
            <div className="relative min-h-64 flex-1">
              <Image
                src={communityEvent}
                alt="A group of MASS members standing together outdoors at a community event"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-5 py-3 text-sm text-slate-300">MASS members at a community event</figcaption>
          </figure>
          <ul className="grid gap-4">
            {BEYOND_THE_LAB.map((item) => (
              <li key={item.title} className={`p-5 sm:p-6 ${CARD}`} style={CARD_BG}>
                <h3 className="text-lg font-semibold text-white" style={TITLE}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ───── Where we're headed ───── */}
      <Section heading="Aiming higher every year" eyebrow="Where we're headed">
        <div className="grid gap-8 text-lg leading-8 text-slate-300 lg:grid-cols-2 lg:gap-16">
          <p>
            That means taking on harder problems each year, growing what our CAN-ARX and
            CAN-SBX systems can do, and completing projects set by leading space organizations.
          </p>
          <p>
            We&rsquo;re also building closer ties with industry and academia, so that every
            student at Mac gets more out of being part of the team.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Want to be part of it?"
        body="We're always looking for motivated students across mechanical, electrical, science, software and outreach."
      >
        <ButtonLink href="/recruitment">Join MASS</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Get in touch
        </ButtonLink>
      </CtaBand>
    </PageShell>
  );
}
