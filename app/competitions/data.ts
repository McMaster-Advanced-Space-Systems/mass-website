export type Competition = {
  slug: string;
  name: string;
  years: string;
  blurb: string;
  status: "current" | "past";
  /** Body paragraphs, shown on the list and project page. */
  details: string[];
  /** Placement or outcome. Renders only when set. */
  result?: string;
  /** Path under /public. Falls back to earth.jpg. */
  heroImage?: string;
  /** 1-based index into `phases`. Only meaningful for current projects. */
  currentPhase: number;
  /** Exactly 5 descriptions, one per timeline phase. */
  phases: string[];
  specs: { label: string; value: string }[];
  results: string[];
};

const FILLER_PHASES = [1, 2, 3, 4, 5].map(
  (n) => `Filler text. Describe what the team did during phase ${n}: the goals, the work completed, and the decisions made.`,
);

const FILLER_SPECS = [
  { label: "Mass", value: "TBD" },
  { label: "Dimensions", value: "TBD" },
  { label: "Power", value: "TBD" },
  { label: "Target Altitude", value: "TBD" },
  { label: "Flight Computer", value: "TBD" },
  { label: "Sensors", value: "TBD" },
];

const FILLER_RESULTS = [
  "Filler text. Summarize what the project found: the data collected, how the system performed against its requirements, and what the team learned.",
];

// One list, split by `status` — so the two sections can never drift apart.
export const COMPETITIONS: Competition[] = [
  {
    slug: "can-sbx",
    name: "CAN-SBX",
    years: "2026–2027",
    blurb:
      "SEDS Canada's stratospheric balloon experiment challenge. Teams design a payload that survives the ascent, collects data at altitude, and returns it intact.",
    status: "current",
    details: [
      "Filler text. Describe the experiment MASS is flying this cycle — the science question, the payload architecture, and the constraints the balloon platform imposes.",
      "Filler text. Add how each sub-team contributes, the review milestones, and where the team is in the build.",
    ],
    currentPhase: 2,
    phases: FILLER_PHASES,
    specs: FILLER_SPECS,
    results: FILLER_RESULTS,
  },
  {
    slug: "can-arx",
    name: "CAN-ARX",
    years: "2026–2027",
    blurb:
      "SEDS Canada's advanced rocketry experiment challenge, pairing an experimental payload with a launch vehicle and a full design-review process.",
    status: "current",
    details: [
      "Filler text. Describe the payload and the launch vehicle pairing, plus the design-review cadence the competition requires.",
      "Filler text. Add objectives, deliverables, and the team's approach once confirmed.",
    ],
    currentPhase: 1,
    phases: FILLER_PHASES,
    specs: FILLER_SPECS,
    results: FILLER_RESULTS,
  },
  {
    slug: "comp-3",
    name: "Comp 3",
    years: "2025–2026",
    blurb: "Filler text. Replace with a one-line summary of this competition.",
    status: "past",
    details: [
      "Filler text. Replace with the full write-up: what MASS built, how it performed, and what the team took away from it.",
    ],
    currentPhase: 5,
    phases: FILLER_PHASES,
    specs: FILLER_SPECS,
    results: FILLER_RESULTS,
  },
  {
    slug: "comp-4",
    name: "Comp 4",
    years: "2024–2025",
    blurb: "Filler text. Replace with a one-line summary of this competition.",
    status: "past",
    details: [
      "Filler text. Replace with the full write-up: what MASS built, how it performed, and what the team took away from it.",
    ],
    currentPhase: 5,
    phases: FILLER_PHASES,
    specs: FILLER_SPECS,
    results: FILLER_RESULTS,
  },
];
