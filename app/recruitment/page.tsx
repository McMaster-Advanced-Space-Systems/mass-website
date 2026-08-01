import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Nav from "../nav"
import Footer from "../footer"

export const metadata: Metadata = {
  title: "Recruitment — McMaster Advanced Space Systems",
  description:
    "Join CAN-SBX, hosted by SEDS. We are looking for motivated students across mechanical, electrical, science, software, and outreach subteams.",
}

const subteams = [
  {
    id: "electrical",
    name: "Electrical Subteam",
    num: "01",
    accent: false,
    requirements: [
      "Proficiency in communication protocols (UART, SPI, I2C, etc.)",
      "Understanding of microcontrollers and/or proficiency in PCB design software (KiCAD, etc.)",
      "Familiarity with circuit design",
      "Interest in space systems",
    ],
  },
  {
    id: "mechanical",
    name: "Mechanical Subteam",
    num: "02",
    accent: false,
    requirements: [
      "Proficiency in CAD software (Inventor, AutoCAD, etc.)",
      "Knowledge of manufacturing techniques (3D printing, etc.)",
      "Knowledge of thermal systems, kinematic and dynamic design theory",
      "Excellent communication and organizational skills",
      "Interest in space systems",
    ],
  },
  {
    id: "science",
    name: "Science Subteam",
    num: "03",
    accent: false,
    requirements: [
      "Familiarity with lab work",
      "Experience with report writing and research",
      "Familiarity with conducting biological experiments",
      "Interest in biological research",
    ],
  },
  {
    id: "software",
    name: "Software Subteam",
    num: "04",
    accent: false,
    requirements: [
      "Proficiency in C/C++ and Python",
      "Knowledge of data structures, algorithms, and OOP design principles",
      "Knowledge of communication protocols (UART, SPI, I2C, etc.)",
      "Excellent communication, teamwork, and organizational skills",
      "Some knowledge of RTOS",
      "Interest in embedded systems",
    ],
  },
  {
    id: "science-lead",
    name: "Science Subteam Lead",
    num: "05",
    accent: true,
    requirements: [
      "Strong leadership experience and/or willingness to lead",
      "Excellent organizational skills",
      "Strong communication skills",
    ],
  },
  {
    id: "outreach-lead",
    name: "Outreach Lead",
    num: "06",
    accent: true,
    requirements: [
      "Enthusiasm, proactive, excellent spoken and written communication skills, and a willingness to lead",
      "Familiarity with developing outreach strategies",
      "Excellent organizational and time management skills",
      "Experience leading workshops and working with high school students an asset",
    ],
  },
]

function SubteamCard({ team }: { team: typeof subteams[0] }) {
  return (
    <div className={team.accent ? "subteam-card subteam-card--accent" : "subteam-card"}>

      {/* card number */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{fontFamily: "var(--font-display)", fontSize: "11px", fontWeight: 600, color: team.accent ? "#ffb1c6" : "#a4a5f0"}}>
          {team.num}
        </span>
      </div>

      {/* subteam */}
      <h3 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(18px,2vw,22px)", fontWeight: 600, color: "#C9C6C5", margin: 0, lineHeight: 1.2,
        }}
      >
        {team.name}
      </h3>

      {/* line */}
      <div style={{
          height: "1px", backgroundColor: team.accent ? "rgba(255,129,198,0.2)" : "rgba(164,165,240,0.15)"}}
      />

      {/* requirements */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{
            fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", color: "var(--muted)", margin: 0, textTransform: "uppercase",
          }}
        >
          We are looking for
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
          {team.requirements.map((req, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                lineHeight: 1.55,
                color: "rgba(240,240,242,0.75)",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: "7px",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: team.accent ? "#ffb1c6" : "#a4a5f0",
                  opacity: 0.7,
                }}
              />
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}