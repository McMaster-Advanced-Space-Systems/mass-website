"use client";

import { useEffect, useRef, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";
import { PAST_TEAMS, TEAMS, type MemberGroup, type PastTeam, type TeamMember } from "./team-data";

/* Branding standards: Red and Blue are decorative only, never a font colour.
   Yellow is the highlight colour, matching the active item in the nav. */
const YELLOW = "#f7901f";
/* Same lifted surface as the homepage cards (--mass-surface). */
const SURFACE = "#1a1a1a";
const CARD_BORDER = "rgba(245,245,245,0.1)";

const DISPLAY = "var(--font-michroma), sans-serif";
const MONO = "var(--font-space-mono), ui-monospace, monospace";
const BODY =
  '"Akzidenz-Grotesk", "Akzidenz-Grotesk Pro", var(--font-inter), "Helvetica Neue", Arial, sans-serif';

const PAST_ID = "past-teams";

const TABS = [
  ...TEAMS.map((team) => ({ id: team.id, label: team.tab, years: team.years })),
  { id: PAST_ID, label: "Past Teams", years: undefined },
];

/* Every member grid uses the same columns, so every card is the same width;
   auto-rows-fr keeps the cards in a grid the same height. */
const CARD_GRID =
  "grid auto-rows-fr grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";

const GROUP_HEADING = {
  fontFamily: MONO,
  fontSize: "0.8rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
} as const;

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
        className="flex gap-x-6 overflow-x-auto border-b [scrollbar-width:none] sm:gap-x-10"
        style={{ borderColor: "rgba(245,245,245,0.15)" }}
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
              className={`-mb-px whitespace-nowrap border-b-2 py-4 text-[0.95rem] font-medium transition-colors ${
                selected ? "text-[#f5f5f5]" : "border-transparent text-[#f5f5f5]/55 hover:text-[#f5f5f5]"
              }`}
              style={{ fontFamily: BODY, borderBottomColor: selected ? YELLOW : undefined }}
            >
              {tab.label}
              {tab.years && <span className="ml-1.5 opacity-60">({tab.years})</span>}
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
          {team.description && <PanelIntro>{team.description}</PanelIntro>}
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
        <PanelIntro>
          These teams completed their projects and are no longer active. They are
          listed here to recognise the work that got MASS where it is today.
        </PanelIntro>
        <ul role="list" className="grid gap-4 md:grid-cols-2">
          {PAST_TEAMS.map((team) => (
            <PastTeamCard key={team.id} team={team} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function PanelIntro({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-12"
      style={{ fontFamily: BODY, fontSize: "1.05rem", lineHeight: 1.75, opacity: 0.75, maxWidth: "68ch", textWrap: "pretty" }}
    >
      {children}
    </p>
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
          <ul role="list" className={CARD_GRID}>
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
      className="mb-5 flex items-baseline gap-3 border-b pb-3"
      style={{ ...GROUP_HEADING, borderColor: "rgba(245,245,245,0.1)" }}
    >
      {children}
      {count !== undefined && <span style={{ opacity: 0.45 }}>{count}</span>}
    </h2>
  );
}

/* Keeps "Level IV" together so the year never wraps onto a line by itself. */
function formatProgram(program: string) {
  return program.replace(/Level (\S+)/, "Level\u00a0$1");
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <li
      className="flex h-full flex-col rounded-lg border p-5 transition-colors hover:border-[#f5f5f5]/25"
      style={{ backgroundColor: SURFACE, borderColor: CARD_BORDER }}
    >
      <DefaultHeadshot />
      <h3 className="mt-4" style={{ fontFamily: MONO, fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}>
        {member.name}
      </h3>
      <p className="mt-1" style={{ fontFamily: BODY, fontSize: "0.9rem", fontWeight: 600, opacity: 0.85 }}>
        {member.role}
      </p>
      <p
        className="mt-auto pt-5"
        style={{ fontFamily: BODY, fontSize: "0.85rem", lineHeight: 1.5, opacity: 0.55, textWrap: "pretty" }}
      >
        {formatProgram(member.program)}
      </p>
    </li>
  );
}

/* Grey placeholder shown until real headshots are added. */
function DefaultHeadshot() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-16 w-16 shrink-0 rounded-full" style={{ backgroundColor: "#2e2e2e" }}>
      <circle cx="32" cy="25" r="11" fill="#6b6b6b" />
      <path d="M10 64c0-13 10-22 22-22s22 9 22 22Z" fill="#6b6b6b" />
    </svg>
  );
}

function PendingCard({ name }: { name: string }) {
  return (
    <li
      className="flex h-full min-h-32 flex-col rounded-lg border border-dashed p-5"
      style={{ borderColor: "rgba(245,245,245,0.25)" }}
    >
      <h3 style={{ fontFamily: MONO, fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}>{name}</h3>
      <p className="mt-auto pt-5" style={{ fontFamily: BODY, fontSize: "0.85rem", opacity: 0.55 }}>
        Members coming soon
      </p>
    </li>
  );
}

function PastTeamCard({ team }: { team: PastTeam }) {
  return (
    <li
      className="flex h-full flex-col rounded-lg border p-6 sm:p-7"
      style={{ backgroundColor: SURFACE, borderColor: CARD_BORDER }}
    >
      <p style={{ fontFamily: MONO, fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55 }}>
        Completed {team.year} · {team.location}
      </p>
      <h3 className="mt-3" style={{ fontFamily: DISPLAY, fontSize: "1.25rem", lineHeight: 1.3 }}>
        {team.name}
      </h3>
      <p className="mb-6 mt-3" style={{ fontFamily: BODY, fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.75, textWrap: "pretty" }}>
        {team.description}
      </p>
      <p className="mt-auto border-t pt-4" style={{ fontFamily: BODY, fontSize: "0.9rem", borderColor: "rgba(245,245,245,0.1)" }}>
        {team.legacy}
      </p>
    </li>
  );
}
