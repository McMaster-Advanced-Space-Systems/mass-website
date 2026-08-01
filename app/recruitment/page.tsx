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
    label: "01",
    name: "Electrical Subteam",
    tag: "HARDWARE",
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
    label: "02",
    name: "Mechanical Subteam",
    tag: "STRUCTURES",
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
    label: "03",
    name: "Science Subteam",
    tag: "RESEARCH",
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
    label: "04",
    name: "Software Subteam",
    tag: "EMBEDDED",
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
    label: "05",
    name: "Science Subteam Lead",
    tag: "LEADERSHIP",
    accent: true,
    requirements: [
      "Strong leadership experience and/or willingness to lead",
      "Excellent organizational skills",
      "Strong communication skills",
    ],
  },
  {
    id: "outreach-lead",
    label: "06",
    name: "Outreach Lead",
    tag: "LEADERSHIP",
    accent: true,
    requirements: [
      "Enthusiasm, proactive, excellent spoken and written communication skills, and a willingness to lead",
      "Familiarity with developing outreach strategies",
      "Excellent organizational and time management skills",
      "Experience leading workshops and working with high school students an asset",
    ],
  },
]
