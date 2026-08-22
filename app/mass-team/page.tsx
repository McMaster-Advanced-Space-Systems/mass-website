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
};
const executiveTeam: TeamMember[] = [
    { id: "e1", name: "Mateo Builes", role: "President", program: "Engineering Physics Level IV", imageUrl: "team/MateoBuiles.png" },
    { id: "e2", name: "Delina Mekonnen", role: "VP Finance", program: "Computer Engineering & Managemeent Level IV", imageUrl: "team/DelinaMekonnen.png"},
    { id: "e3", name: "Arub Syed", role: "Technical Advisor", program: "Mechanical Engineering & Management Level IV", imageUrl: "team/ArubSyed.png"},
    { id: "e4", name: "Gabriel Lonuzzo", role: "Technical Advisor", program: "Masters Biomedical Engineering", imageUrl: "team/GabrielLonuzzo.png"},
    { id: "e5", name: "Shayavan Shridar", role: "Technical Advisor", program: "Engineering Physics, Level V", imageUrl: "team/ShayavanShridar.png"},
    { id: "e6", name: "Sanya Khurana", role: "Co-VP Outreach", program: "Engineering Physics & Management Level IV", imageUrl: "team/SanyaKhurana.png"},
    { id: "e7", name: "Marco Puchetti", role: "Co-VP Outreach", program: "Mechanical Engineering Level III", imageUrl: "team/MarcoPuchetti.png"},
];

const can_sbxLeads: TeamMember[] = [
  { id: "c1", name: "Tharani Elilvannan", role: "Co-Project Manager", program: "Electrical Engineering Level III", imageUrl: "#" },
  { id: "c2", name: "Chloe Hoang", role: "Co-Project Manager", program: "Engineering Physics level IV", imageUrl: "#" },
  { id: "c3", name: "Parul Hedau", role: "Electrical Design Team Lead", program: "Science Lead Level IV", imageUrl: "#" },
];

const stellarscopeLeads: TeamMember[] = [
  { id: "s1", name: "Kamyar Lakdashti", role: "Project Manager", program: "Electrical Engineering Level IV", imageUrl: "#" },
  { id: "s2", name: "Dhavin Tandon", role: "Electrical Engineering Team Lead", program: "Electrical Engineering Team Lead", imageUrl: "#" },
  { id: "s3", name: "Marco Puchetti", role: "Mechanical Engineering Team Lead", program: "Mechanical Engineering Level III", imageUrl: "#" },
];

const StarDot = ({ color }: { color: string }) => (
  <svg width="10" height="10" viewBox="0 0 100 100" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0 C50 0 54 42 100 50 C54 58 50 100 50 100 C50 100 46 58 0 50 C46 42 50 0 50 0Z" />
  </svg>
);

{
  /* team cards */
}
const TeamCard = ({ member, accent }: { member: TeamMember; accent: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex flex-col transition-all duration-200"
      style={{background: "#181818", border: `1px solid ${hovered ? accent + "50" : "#ffffff10"}`, borderRadius: "3px", padding: "14px", transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

        {/* Photo */}
      <div className="overflow-hidden mb-3 w-full" style={{ height: 200, borderRadius: "2px", background: "#1a1a1a" }}>
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ filter: "grayscale(15%)" }}
        />
      </div>

      {/* Role */}
      <div className="mb-1">
        <span className="tracking-widest uppercase" style={{ fontFamily: "'Space Mono', monospace", color: accent, fontSize: "8px" }} >
          {member.role}
        </span>
      </div>

      {/* Name */}
      <p className="leading-tight mb-1" style={{ fontFamily: "'Michroma', sans-serif", color: "#dde2ee", fontSize: "12px" }}>
        {member.name}
      </p>

      {/* Program */}
      <p className="leading-tight" style={{ fontFamily: "'Space Mono', monospace", color: "#3d4f6e", fontSize: "9px" }}>
        {member.program}
      </p>
    </div>
  );
};

const SectionDivider = ({ accent }: { accent: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${accent}60, transparent)` }} />
    <StarDot color={accent} />
    <div className="h-px w-8" style={{ background: `${accent}30` }} />
  </div>
);

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  accent: string;
  columns?: number;
}

const TeamSection = ({title, members, accent}: TeamSectionProps) => (
  <section className="mb-16">
    <div className="mb-6">
      <h2
        className="text-xl tracking-wide"
        style={{ fontFamily: "'Michroma', sans-serif", color: "#dde2ee" }}
      >
        {title}
      </h2>
    </div>
    <SectionDivider accent={accent} />
    <div
      className="grid gap-x-6 gap-y-8"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
    >
      {members.map((m) => (
        <TeamCard key={m.id} member={m} accent={accent} />
      ))}
    </div>
  </section>
);


export default function MassTeam() {
  return (
    <div className="min-h-full" style={{ background: "#0f0f0f" }}>
      <div className="max-w-5xl mx-auto px-8 py-16">

        <Nav />
       
        {/* Title */}
        <header className="mt-16 mb-16 flex flex-col gap-4">

          <div className="mt-2">
            <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Space Mono', monospace", color: "#3d4f6e", fontSize: "10px" }}>
              2026 — 2027
            </p>
            <h1 className="text-3xl md:text-4xl tracking-tight leading-tight" style={{ fontFamily: "'Michroma', sans-serif", color: "#dde2ee" }}>
              Meet the Team
            </h1>
          </div>

          <div className="h-px mt-2" style={{ background: "linear-gradient(to right, #1050bf, #1050bf30, transparent)" }} />
        </header>

        {/* Sections */}
        <TeamSection
          title="Executive Leads"
          members={executiveTeam}
          accent="#1050bf"
          columns={4}
        />
        <TeamSection
          title="CAN-SBX"
          members={can_sbxLeads}
          accent="#1050bf"
          columns={4}
        />
        <TeamSection
          title="StellarScope"
          members={stellarscopeLeads}
          accent="#1050bf"
          columns={4}
        />
        
       </div>
       <Footer />
    </div>
  );
}