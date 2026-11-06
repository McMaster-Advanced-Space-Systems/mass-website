"use client";

import { useEffect, useRef, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CARD, CARD_BG, DISPLAY, MONO, Pill, TITLE } from "../components/ui";
import { PROJECTS, type Project } from "../projects/data";
import { PAST_TEAMS, TEAMS, type MemberGroup, type PastTeam, type Team, type TeamMember } from "./team-data";

const PAST_ID = "past-teams";

const TABS = [
  ...TEAMS.map((team) => ({ id: team.id, label: team.tab, years: team.years })),
  { id: PAST_ID, label: "Past Teams", years: undefined },
];

/* Member cards: two across on phones, up to four on wide screens. */
const CARD_GRID = "grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4";

/* The selected tab lives in the URL hash so a tab can be linked to directly,
   e.g. /mass-team#solaris. */
function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}
const readHash = () => window.location.hash.slice(1);
const readServerHash = () => "";

function selectTab(id: string) {
  window.history.replaceState(null, "", `#${id}`);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

export default function TeamTabs() {
  const hash = useSyncExternalStore(subscribeToHash, readHash, readServerHash);
  const active = TABS.some((tab) => tab.id === hash) ? hash : TABS[0].id;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tablistRef = useRef<HTMLDivElement>(null);

  /* On narrow screens the tab bar scrolls sideways; keep the selected tab in
     view. Only the bar scrolls, never the page. */
  useEffect(() => {
    const list = tablistRef.current;
    const tab = tabRefs.current[TABS.findIndex((t) => t.id === active)];
    if (!list || !tab) return;
    const left = tab.offsetLeft - list.offsetLeft;
    const right = left + tab.offsetWidth;
    if (left < list.scrollLeft || right > list.scrollLeft + list.clientWidth) {
      list.scrollTo({ left: Math.max(0, left - 24), behavior: "smooth" });
    }
  }, [active]);

  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = TABS.length - 1;
    const next =
      e.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : e.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : -1;
    if (next < 0) return;
    e.preventDefault();
    selectTab(TABS[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="MASS teams"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {TABS.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectTab(tab.id)}
              onKeyDown={(e) => onTabKeyDown(e, index)}
              className={`min-h-11 cursor-pointer whitespace-nowrap rounded-full border px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mass-paper)] ${
                selected
                  ? "border-[var(--mass-paper)] bg-[var(--mass-paper)] text-[var(--mass-ink)]"
                  : "border-white/20 text-[var(--mass-paper)]/70 hover:border-white/50 hover:text-[var(--mass-paper)]"
              }`}
              style={TITLE}
            >
              {tab.label}
              {tab.years && <span className="ml-1.5 font-normal opacity-60">({tab.years})</span>}
            </button>
          );
        })}
      </div>

      {/* Inactive panels stay in the DOM (hidden) so every name is indexable;
          re-showing a panel replays the site's fade-up entrance. */}
      {TEAMS.map((team) => (
        <div
          key={team.id}
          role="tabpanel"
          id={`panel-${team.id}`}
          aria-labelledby={`tab-${team.id}`}
          tabIndex={0}
          hidden={active !== team.id}
          className="animate-fade-up pt-10 focus-visible:outline-none md:pt-12"
        >
          <PanelHeader team={team} project={PROJECTS.find((p) => p.slug === team.projectSlug)} />
          <TeamGroups teamId={team.id} groups={team.groups} />
        </div>
      ))}

      <div
        role="tabpanel"
        id={`panel-${PAST_ID}`}
        aria-labelledby={`tab-${PAST_ID}`}
        tabIndex={0}
        hidden={active !== PAST_ID}
        className="animate-fade-up pt-10 focus-visible:outline-none md:pt-12"
      >
        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-300">
          These teams completed their projects and are no longer active. They are
          listed here to recognise the work that got MASS where it is today.
        </p>
        <ul role="list" className="grid gap-5 md:grid-cols-2">
          {PAST_TEAMS.map((team) => (
            <PastTeamCard key={team.id} team={team} />
          ))}
        </ul>
      </div>
    </div>
  );
}

/* Top of a team's panel. Project teams get the project's photo, status and a
   link to its page; Management is just a heading and a description. */
function PanelHeader({ team, project }: { team: Team; project?: Project }) {
  const description = team.description ?? project?.blurb;

  if (!project) {
    return (
      <div className="mb-12 max-w-3xl">
        <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(1.35rem, 2.6vw, 1.9rem)", lineHeight: 1.2 }}>
          {team.tab}
        </h2>
        {description && <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>}
      </div>
    );
  }

  const active = project.status === "current";
  const photo = project.card ?? project.hero;

  return (
    <div className={`mb-12 grid overflow-hidden md:grid-cols-[20rem_1fr] ${CARD}`} style={CARD_BG}>
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-56">
        <Image
          src={photo.image ?? "/earth.jpg"}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
          style={photo.position ? { objectPosition: photo.position } : undefined}
        />
      </div>
      <div className="flex flex-col items-start p-6 sm:p-8">
        <Pill active={active}>
          {active ? "Active" : "Completed"} · {project.years}
        </Pill>
        <h2 className="mt-4" style={{ fontFamily: DISPLAY, fontSize: "clamp(1.35rem, 2.6vw, 1.9rem)", lineHeight: 1.2 }}>
          {project.name}
        </h2>
        {description && <p className="mt-3 max-w-2xl leading-7 text-slate-300">{description}</p>}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--mass-highlight)]"
        >
          View project <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

/* Groups with members get their own section. Groups whose members haven't
   been announced are gathered into one row at the end instead of each
   taking a full section. */
function TeamGroups({ teamId, groups }: { teamId: string; groups: MemberGroup[] }) {
  const staffed = groups.filter((group) => group.members.length > 0);
  const pending = groups.filter((group) => group.members.length === 0);

  return (
    <div className="flex flex-col gap-14">
      {staffed.map((group) => (
        <section key={group.name} aria-labelledby={headingId(teamId, group.name)}>
          <GroupHeading id={headingId(teamId, group.name)} count={group.members.length}>
            {group.name}
          </GroupHeading>
          <ul role="list" className={CARD_GRID}>
            {group.members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </ul>
        </section>
      ))}

      {pending.length > 0 && (
        <section aria-labelledby={headingId(teamId, "to-be-announced")}>
          <GroupHeading id={headingId(teamId, "to-be-announced")}>To be announced</GroupHeading>
          <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pending.map((group) => (
              <PendingCard key={group.name} name={group.name} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

/* Every panel stays in the DOM, so heading ids include the team to stay unique. */
function headingId(teamId: string, name: string) {
  return `${teamId}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function GroupHeading({ id, count, children }: { id: string; count?: number; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-5 flex items-baseline gap-3 border-b border-white/10 pb-3 text-[0.8rem] tracking-[0.14em] uppercase"
      style={{ fontFamily: MONO }}
    >
      {children}
      {count !== undefined && <span className="opacity-45">{count}</span>}
    </h2>
  );
}

/* Keeps "Level IV" together so the year never wraps onto a line by itself. */
function formatProgram(program: string) {
  return program.replace(/Level (\S+)/, "Level $1");
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <li className={`group flex h-full flex-col overflow-hidden transition-colors hover:border-white/25 ${CARD}`} style={CARD_BG}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#222]">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <Initials name={member.name} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-white sm:text-lg" style={TITLE}>
          {member.name}
        </h3>
        <p
          className="mt-1 text-[0.68rem] tracking-[0.12em] uppercase"
          style={{ fontFamily: MONO, color: "var(--mass-highlight)" }}
        >
          {member.role}
        </p>
        <p className="mt-auto pt-4 text-sm leading-5 text-slate-400" style={{ textWrap: "pretty" }}>
          {formatProgram(member.program)}
        </p>
      </div>
    </li>
  );
}

/* Shown until a member's headshot is added. */
function Initials({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background: "repeating-linear-gradient(135deg, rgba(245,245,245,0.03) 0 12px, transparent 12px 24px), #1d1d1d",
        fontFamily: DISPLAY,
        fontSize: "2.5rem",
        color: "rgba(245,245,245,0.35)",
      }}
    >
      {initials}
    </div>
  );
}

function PendingCard({ name }: { name: string }) {
  return (
    <li className="flex min-h-28 flex-col rounded-2xl border border-dashed border-white/25 p-5">
      <h3 className="text-base font-semibold text-white" style={TITLE}>
        {name}
      </h3>
      <p className="mt-auto pt-4 text-sm text-slate-500">Members coming soon</p>
    </li>
  );
}

function PastTeamCard({ team }: { team: PastTeam }) {
  return (
    <li className={`flex h-full flex-col p-6 sm:p-8 ${CARD}`} style={CARD_BG}>
      <p className="text-xs tracking-[0.12em] uppercase text-slate-400" style={{ fontFamily: MONO }}>
        Completed {team.year} · {team.location}
      </p>
      <h3 className="mt-3" style={{ fontFamily: DISPLAY, fontSize: "1.25rem", lineHeight: 1.3 }}>
        {team.name}
      </h3>
      <p className="mb-6 mt-3 leading-7 text-slate-300" style={{ textWrap: "pretty" }}>
        {team.description}
      </p>
      <p className="mt-auto border-t border-white/10 pt-4 text-sm text-slate-200">{team.legacy}</p>
    </li>
  );
}
