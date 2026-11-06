import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import { Banner, ButtonLink, CtaBand, DISPLAY, Eyebrow } from "../components/ui";
import TeamTabs from "./team-tabs";

import teamPhoto from "../../public/projects/stellarscope/multi-team-photo.png";

export const metadata: Metadata = {
  title: "Our Team — McMaster Advanced Space Systems",
  description:
    "Meet the people behind McMaster Advanced Space Systems (MASS): the management team, our project teams, and the teams behind our past projects.",
};

export default function MassTeamPage() {
  return (
    <PageShell>
      <Banner
        src={teamPhoto}
        alt="A group of MASS members posing together on a forest trail"
        position="center 30%"
        caption="MASS members"
        credit="McMaster University"
      />

      <div className="animate-fade-up py-14 sm:py-16" style={{ animationDelay: "0.08s" }}>
        <h1
          style={{
            fontFamily: DISPLAY,
            color: "var(--mass-paper)",
            fontSize: "clamp(1.5rem, 7.5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Our team.
        </h1>
        <div className="mt-4">
          <Eyebrow>McMaster Advanced Space Systems</Eyebrow>
        </div>
        <div className="mt-6 h-[3px] w-14" style={{ backgroundColor: "var(--mass-secondary)" }} />
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
          The people behind McMaster&rsquo;s student-led space systems team: the management
          team that runs the club, our project teams, and the teams behind our past projects.
        </p>
      </div>

      <TeamTabs />

      <div className="mt-24">
        <CtaBand
          title="Want to be on this page?"
          body="We're always looking for motivated students across mechanical, electrical, science, software and outreach."
        >
          <ButtonLink href="/recruitment">Join MASS</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Get in touch
          </ButtonLink>
        </CtaBand>
      </div>
    </PageShell>
  );
}
