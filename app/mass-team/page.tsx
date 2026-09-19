"use client";

import { useState } from "react";

import Nav from "../nav";
import Footer from "../footer";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  program: string;
  imageUrl: string;
  linkedin: string;
};

type SubTeam = {
  name: string;
  members: TeamMember[];
};

type Project = {
  id: string;
  title: string;
  leads: TeamMember[];
  subTeams?: SubTeam[];
};

const executiveTeam: TeamMember[] = [
  { id: "e1", name: "Mateo Builes", role: "President", program: "Engineering Physics Level IV", imageUrl: "", linkedin: "" },
  { id: "e2", name: "Delina Mekonnen", role: "VP Finance", program: "Computer Engineering & Managemeent Level IV", imageUrl: "", linkedin: "" },
  { id: "e3", name: "Arub Syed", role: "Technical Advisor", program: "Mechanical Engineering & Management Level IV", imageUrl: "", linkedin: "" },
  { id: "e4", name: "Gabriel Lonuzzo", role: "Technical Advisor", program: "Masters Biomedical Engineering", imageUrl: "", linkedin: "" },
  { id: "e5", name: "Shayavan Shridar", role: "Technical Advisor", program: "Engineering Physics, Level V", imageUrl: "", linkedin: "" },
  { id: "e6", name: "Sanya Khurana", role: "Co-VP Outreach", program: "Engineering Physics & Management Level IV", imageUrl: "", linkedin: "" },
  { id: "e7", name: "Marco Puchetti", role: "Co-VP Outreach", program: "Mechanical Engineering Level III", imageUrl: "", linkedin: "" },
];

const projects: Project[] = [
  { id: "cansbx", title: "CAN-SBX",
    leads: [
      { id: "c1", name: "Tharani Elilvannan", role: "Co-Project Manager",           program: "Electrical Engineering Level III",  imageUrl: "", linkedin: "" },
      { id: "c2", name: "Chloe Hoang",        role: "Co-Project Manager",           program: "Engineering Physics Level IV",      imageUrl: "", linkedin: "" },
      { id: "c3", name: "Parul Hedau",        role: "Electrical Design Team Lead",  program: "Science Level IV",                  imageUrl: "", linkedin: "" },
    ],
    subTeams: [
      { name: "Mechanical Systems",
        members: [
          { id: "cm1", name: "Eng. 1", role: "Mechanical", program: "", imageUrl: "", linkedin: "" },
          { id: "cm2", name: "Eng. 2", role: "Mechanical", program: "", imageUrl: "", linkedin: "" },
          { id: "cm3", name: "Eng. 3", role: "Mechanical", program: "", imageUrl: "", linkedin: "" },
        ],
      },
      {
        name: "Software Systems",
        members: [
          { id: "cs1", name: "Eng. 1", role: "Software", program: "", imageUrl: "", linkedin: "" },
          { id: "cs2", name: "Eng. 2", role: "Software", program: "", imageUrl: "", linkedin: "" },
          { id: "cs3", name: "Eng. 3", role: "Software", program: "", imageUrl: "", linkedin: "" },
        ],
      },
      {
        name: "Science Systems",
        members: [
          { id: "csc1", name: "Eng. 1", role: "Science", program: "", imageUrl: "", linkedin: "" },
          { id: "csc2", name: "Eng. 2", role: "Science", program: "", imageUrl: "", linkedin: "" },
          { id: "csc3", name: "Eng. 3", role: "Science", program: "", imageUrl: "", linkedin: "" },
        ],
      },
      {
        name: "Electrical Systems",
        members: [
          { id: "ce1", name: "Eng. 1", role: "Electrical", program: "", imageUrl: "", linkedin: "" },
          { id: "ce2", name: "Eng. 2", role: "Electrical", program: "", imageUrl: "", linkedin: "" },
          { id: "ce3", name: "Eng. 3", role: "Electrical", program: "", imageUrl: "", linkedin: "" },
        ],
      },
    ],
  },
  { id: "stellarscope", title: "StellarScope",
    leads: [
      { id: "s1", name: "Kamyar Lakdashti", role: "Project Manager", program: "Electrical Engineering Level IV",  imageUrl: "", linkedin: "" },
      { id: "s2", name: "Dhavin Tandon", role: "Electrical Engineering Team Lead", program: "Electrical Engineering Level III", imageUrl: "", linkedin: "" },
      { id: "s3", name: "Marco Puchetti", role: "Mechanical Engineering Team Lead", program: "Mechanical Engineering Level III", imageUrl: "", linkedin: "" },
    ],
  },
];

const ACCENT = "#1050bf";
const mono = "'Space Mono', monospace";
const display = "'Michroma', sans-serif";
const body = "'Outfit', sans-serif";

const RoleLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <div style={{ width: 2, height: 14, background: ACCENT, borderRadius: 1, flexShrink: 0 }} />
    <span style={{ fontFamily: mono, fontSize: "9px", color: "#8b9ab5", letterSpacing: "0.2em" }} className="uppercase">
      {children}
    </span>
  </div>
);

const Avatar = ({ src, size }: { src: string; size: number }) => (
  <div style={{ width: size, height: size, flexShrink: 0, borderRadius: "3px", overflow: "hidden", background: "#1e1e1e" }}>
    {src && src !== "#" && <img src={src} alt="" className="w-full h-full object-cover" />}
  </div>
);

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  return { hovered, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) };
};

const cardBase = (hovered: boolean) => ({
  background: "#141414",
  border: `1px solid ${hovered ? ACCENT + "45" : "#ffffff0e"}`,
  borderRadius: "4px",
  transition: "border-color 0.15s",
});

/* President card */
const BigCard = ({ member }: { member: TeamMember }) => {
  const { hovered, ...events } = useHover();
  return (
    <div className="flex overflow-hidden" style={cardBase(hovered)} {...events}>
      <div style={{ width: 210, flexShrink: 0, background: "#1a1a1a" }}>
        <Avatar src={member.imageUrl} size={210} />
      </div>
      <div className="flex flex-col justify-center px-8 py-6" style={{ flex: 1 }}>
        <h3 style={{ fontFamily: display, fontSize: "20px", color: "#dde2ee", marginBottom: 6 }}>{member.name}</h3>
        <p style={{ fontFamily: mono, fontSize: "9px", color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>
          {member.role}
        </p>
        <p style={{ fontFamily: body, fontSize: "12px", color: "#6b7a96", lineHeight: 1.7 }}>
          {member.program}
        </p>
      </div>
    </div>
  );
};


/* co-lead card */
const MediumCard = ({ member }: { member: TeamMember }) => {
  const { hovered, ...events } = useHover();
  return (
    <div className="flex items-start gap-4" style={{ ...cardBase(hovered), padding: 14, flex: 1, minWidth: 220 }} {...events}>
      <Avatar src={member.imageUrl} size={72} />
      <div style={{ paddingTop: 2 }}>
        <p style={{ fontFamily: display, fontSize: "13px", color: "#dde2ee", marginBottom: 4 }}>{member.name}</p>
        <p style={{ fontFamily: mono, fontSize: "9px", color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{member.role}</p>
        <p style={{ fontFamily: body, fontSize: "11px", color: "#4a5568", lineHeight: 1.5 }}>{member.program}</p>
      </div>
    </div>
  );
}

/* team card */
const SmallCard = ({ member }: { member: TeamMember }) => {
  const { hovered, ...events } = useHover();
  return (
    <div className="flex items-center gap-3" style={{ ...cardBase(hovered), padding: "10px 12px" }} {...events}>
      <Avatar src={member.imageUrl} size={38} />
      <div className="min-w-0">
        <p style={{ fontFamily: display, fontSize: "11px", color: "#dde2ee", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{member.name}</p>
        <p style={{ fontFamily: mono, fontSize: "8px", color: "#4a5568", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{member.role}</p>
      </div>
    </div>
  );
};

const SectionHeader = ({ label, title, badge }: { label?: string; title: string; badge?: string }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <div>
        {label && <p style={{ fontFamily: mono, fontSize: "9px", color: "#3d4f6e", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 2 }}>{label}</p>}
        <h2 style={{ fontFamily: display, fontSize: "20px", color: "#dde2ee" }}>{title}</h2>
      </div>
    </div>
    {badge && (
      <div className="flex items-center gap-2">
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT }} />
        <span style={{ fontFamily: mono, fontSize: "9px", color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase" }}>{badge}</span>
      </div>
    )}
  </div>
);




const ProjectSection = ({ project }: { project: Project }) => (
  <section style={{ marginBottom: 52 }}>
    <SectionHeader title={project.title} badge="Active Mission" />

    <RoleLabel>Project Management</RoleLabel>
    <div className="flex flex-wrap gap-4" style={{ marginBottom: project.subTeams ? 24 : 0 }}>
      {project.leads.map((m) => <MediumCard key={m.id} member={m} />)}
    </div>

    {project.subTeams && (
      <div className="flex flex-col gap-3" style={{ marginTop: 8 }}>
        {project.subTeams.map((sub) => (
          <div key={sub.name} style={{ background: "#141414", border: "1px solid #ffffff0e", borderRadius: "4px", padding: "14px 16px" }}>
            {/* Sub-team header */}
            <div className="flex items-center justify-between mb-3">
              <p style={{ fontFamily: display, fontSize: "13px", color: "#dde2ee" }}>{sub.name}</p>
              <span style={{ fontFamily: mono, fontSize: "8px", color: "#4a5568", letterSpacing: "0.1em", background: "#1e1e1e", padding: "2px 8px", borderRadius: "2px" }}>
                {sub.members.length} Active
              </span>
            </div>
            {/* Member grid */}
            <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))" }}>
              {sub.members.map((m) => <SmallCard key={m.id} member={m} />)}
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default function MassTeam() {

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100%" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 32px 64px" }}>

        <Nav />

        {/* Page header */}
        <header style={{ marginBottom: 48, marginTop: 70 }}>
          <h1 style={{ fontFamily: display, fontSize: "clamp(32px, 5vw, 52px)", color: "#dde2ee", lineHeight: 1.1, marginBottom: 16 }}>
            Meet the Team.
          </h1>
          <p style={{ fontFamily: body, fontSize: "13px", color: "#6b7a96", lineHeight: 1.7, maxWidth: 420 }}>
            The engineers, scientists, and visionaries driving McMaster Advanced Space Systems. United by precision, propelled by curiosity.
          </p>
        </header>

        {/* ── Exec ── */}
        <section style={{ marginBottom: 52 }}>
          <SectionHeader label="Club Leadership" title="Executive Command" />

          <RoleLabel>PRESIDENT</RoleLabel>
          <BigCard member={executiveTeam.find((m) => m.id === "e1")!} />

          <div style={{ height: 20 }} />
          <RoleLabel>CO-VP OUTREACH</RoleLabel>
          <div className="flex gap-4 flex-wrap">
            <MediumCard member={executiveTeam.find((m) => m.id === "e6")!} />
            <MediumCard member={executiveTeam.find((m) => m.id === "e7")!} />
          </div>

          <div style={{ height: 20 }} />
          <RoleLabel>Team</RoleLabel>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
            {executiveTeam
              .filter((m) => !["e1", "e6", "e7"].includes(m.id))
              .map((m) => <SmallCard key={m.id} member={m} />)}
          </div>
        </section>

        {/* Projects */}
        {projects.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}

      </div>
      <Footer />
    </div>
  );
}
