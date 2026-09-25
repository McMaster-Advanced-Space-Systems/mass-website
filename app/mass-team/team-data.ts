/* Roster for the Our Team page. Edit names and roles here; the page lays
   everything out from this data. */

export type TeamMember = {
  name: string;
  role: string;
  program: string;
};

/* A group with no members yet shows under "To be announced" until names are added. */
export type MemberGroup = {
  name: string;
  members: TeamMember[];
};

export type Team = {
  id: string;
  /* Label on the tab; also the anchor, e.g. /mass-team#solaris. */
  tab: string;
  description: string;
  groups: MemberGroup[];
};

export type PastTeam = {
  id: string;
  name: string;
  year: string;
  location: string;
  description: string;
  legacy: string;
};

export const TEAMS: Team[] = [
  {
    id: "management",
    tab: "Management",
    description:
      "The executives, outreach and marketing teams, and technical advisors who run MASS and support every project team.",
    groups: [
      {
        name: "Executives",
        members: [
          { name: "Mateo Builes", role: "President", program: "Engineering Physics, Level IV" },
          { name: "Delina Mekonnen", role: "VP Finance", program: "Computer Engineering & Management, Level IV" },
          { name: "Sanya Khurana", role: "Co-VP Outreach", program: "Engineering Physics & Management, Level IV" },
          { name: "Marco Puchetti", role: "Co-VP Outreach", program: "Mechanical Engineering, Level III" },
        ],
      },
      {
        name: "Technical Advisors",
        members: [
          { name: "Shayavan Shridar", role: "Technical Advisor", program: "Engineering Physics, Level V" },
          { name: "Arub Syed", role: "Technical Advisor", program: "Mechanical Engineering & Management, Level IV" },
          { name: "Gabriel Lonuzzo", role: "Technical Advisor", program: "Masters, Biomedical Engineering" },
        ],
      },
      { name: "Outreach Team", members: [] },
      { name: "Marketing Team", members: [] },
    ],
  },
  {
    id: "solaris",
    tab: "SOLARIS",
    description:
      "SOLARIS investigates how atmospheric distortion affects optical signal transmission from ground level to 30 kilometres up, and how well optical coatings reduce it, to support ground-to-satellite laser communication.",
    groups: [
      {
        name: "Project Leads",
        members: [
          { name: "Tharani Elilvannan", role: "Co-Project Manager", program: "Electrical Engineering, Level III" },
          { name: "Chloe Hoang", role: "Co-Project Manager", program: "Engineering Physics, Level IV" },
          { name: "Parul Hedau", role: "Electrical Design Team Lead", program: "Science, Level IV" },
        ],
      },
      { name: "Mechanical Subteam", members: [] },
      { name: "Electrical Subteam", members: [] },
      { name: "Software Subteam", members: [] },
      { name: "Science Subteam", members: [] },
    ],
  },
];

export const PAST_TEAMS: PastTeam[] = [
  {
    id: "can-arx-2024",
    name: "CAN-ARX 2024",
    year: "2024",
    location: "Baie-Saint-Paul, Quebec",
    description:
      "Designed and built a collapsible radio telescope that measured solar radio flux and the 21 cm hydrogen line, and deployed it in a low-interference analog environment for SEDS Canada's CAN-ARX expedition.",
    legacy: "Became the foundation for the Stellarscope project.",
  },
  {
    id: "can-sbx-2024",
    name: "CAN-SBX 2024",
    year: "2024",
    location: "Montreal, Quebec",
    description:
      "Launched E. coli and yeast payloads more than 30 km into the stratosphere, the first biological payload in the history of SEDS Canada's CAN-SBX. Partnered with the Canadian Space Agency, SNOLAB and NOSM University.",
    legacy: "The CAN-SBX work continues with the SOLARIS team.",
  },
];
