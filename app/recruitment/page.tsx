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

export default function Recruitment() {
  const container: CSSProperties = {
    width: "100%", minHeight: "100vh", backgroundColor: "#121414",
  }

  return (
    <div style={container}>
      <Nav />

      {/* top intro */}
      <section style={{
          maxWidth: "1280px", margin: "0 auto", padding: "clamp(64px,10vw,120px) 32px clamp(48px,6vw,80px)", display: "grid",
          gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "end",
        }}
        className="hero-grid"
      >
        {/* Left mini title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "32px", height: "1px", backgroundColor: "#ffb1c6" }} />
            <span style={{
                fontFamily: "var(--font-display)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", color: "#ffb1c6", 
                textTransform: "uppercase",
              }} >
              Recruitment
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "48px", fontWeight: 700, lineHeight: 1.05, color: "#f0f0f2",
              margin: 0,letterSpacing: "-0.02em",
            }}
          >
            Join the
            <br /> <span style={{ color: "#a4a5f0" }}>CAN-SBX</span> <br />
            Team
          </h1>
        </div>

        {/* right description */}
        <p style={{fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.7, color: "rgba(240,240,242,0.72)", margin: 0,}}>
          CAN-SBX, hosted by SEDS, allows us to put a scientific experiment on a stratospheric
          balloon. Our team consists of 5 subteams: mechanical, electrical, science, software,
          and outreach. We&apos;re always on the lookout for more members, so feel free to send us
          an application and we&apos;ll take a look at it as soon as possible!
        </p>
      </section>

      {/* line */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ height: "1px", backgroundColor: "rgba(164,165,240,0.15)" }} />
      </div>

      {/* subteam cards */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(48px,6vw,80px) 32px clamp(64px,10vw,120px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px", flexWrap: "wrap", gap: "12px" }}>
          <h2 style={{fontFamily: "var(--font-display)", fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 600, color: "#f0f0f2"}}>
            Our Teams:
          </h2>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "12px"}}>
          {subteams.map(team => (
            <SubteamCard key={team.id} team={team} />
          ))}
        </div>
      </section>

      <Footer />

      {/* style */}
      <style>{`
        .subteam-card {
          background-color: rgba(30,32,32,0.6);
          border: 1px solid rgba(164,165,240,0.18);
          border-radius: 2px;
          padding: 28px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: background-color 0.2s ease, border-color 0.2s ease;
          cursor: default;
        }
        .subteam-card:hover {
          background-color: rgba(30,32,32,0.9);
          border-color: rgba(164,165,240,0.4);
        }
        .subteam-card--accent:hover {
          background-color: rgba(122,3,44,0.35);
          border-color: rgba(255,129,198,0.5);
        }
        .cta-btn:hover {
          background-color: #ffaad9 !important;
        }
        @media(max-width:768px){
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>

    </div>
  )
}
