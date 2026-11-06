/* Every project page renders from this file, using the section order of
   app/projects/[slug]/page.tsx. Anything marked "Placeholder" is filler
   waiting for real content from the project team.

   Images are paths under /public. Leave `image` out to show a labelled
   placeholder frame instead; its `alt` text says what photo belongs there. */

export type Media = {
  image?: string;
  /** Describes the photo. Also the placeholder label when `image` is unset. */
  alt: string;
  /** CSS object-position, to keep faces in frame when the photo is cropped. */
  position?: string;
};

export type Phase = { title: string; description: string };

export type Feature = { title: string; body: string };

export type Step = { label: string; title: string; body: string };

export type Subteam = { name: string; body: string };

export type Stat = { label: string; value: string; note: string };

export type GalleryItem = Media & { title: string; body: string };

export type Partner = { name: string; kind: string; role: string };

export type Project = {
  slug: string;
  name: string;
  years: string;
  status: "current" | "past";
  /** One line under the name, e.g. "Radio astronomy · CAN-ARX 2024". */
  tagline: string;
  /** One or two sentences. Used on the projects list, the homepage and in metadata. */
  blurb: string;
  /** Opening paragraphs on the project page. */
  details: string[];
  /** Smaller supporting paragraph under the details. */
  note?: string;

  hero: Media & { caption: string; credit: string };
  /** Photo for the homepage project card. Falls back to `hero`. */
  card?: Media;

  /** 1-based index into `phases`. Past projects show every phase as complete. */
  currentPhase: number;
  phases: Phase[];

  instrument: {
    heading: string;
    eyebrow: string;
    media: Media;
    overviewTitle: string;
    overview: string;
    features: Feature[];
  };

  architecture: {
    heading: string;
    eyebrow: string;
    steps: Step[];
  };

  team: {
    eyebrow: string;
    media: Media & { caption: string; credit: string };
    subteams: Subteam[];
  };

  results: {
    heading: string;
    eyebrow: string;
    summary: string;
    stats: Stat[];
    gallery: GalleryItem[];
  };

  partners: {
    eyebrow: string;
    items: Partner[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "solaris",
    name: "SOLARIS",
    years: "2026–2027",
    status: "current",
    tagline: "Stratospheric balloon payload · CAN-SBX",
    blurb:
      "A high-altitude balloon payload that studies how the atmosphere affects laser signals used for satellite communication.",
    details: [
      "SOLARIS investigates how atmospheric distortion from the ground up to approximately 30 km affects optical signal transmission, and assesses how well optical coatings reduce those effects.",
      "The data will support research into ground-to-satellite laser communication, where the atmosphere is one of the biggest sources of signal loss.",
    ],
    note: "SOLARIS is MASS's entry in SEDS Canada's CAN-SBX challenge, which flies student experiments on a stratospheric balloon.",

    hero: {
      image: "/earth.jpg",
      alt: "Earth's atmosphere seen from high altitude",
      caption: "Optical signal transmission through the atmosphere",
      credit: "MASS · CAN-SBX",
    },

    currentPhase: 2,
    phases: [
      { title: "Concept & Science Case", description: "Placeholder. Define the science question, the measurement approach and the flight requirements." },
      { title: "Payload Design", description: "Placeholder. Design the optical bench, the electronics and the structure that survives the flight." },
      { title: "Build & Integration", description: "Placeholder. Build the payload and integrate the subsystems." },
      { title: "Environmental Testing", description: "Placeholder. Test the payload against the cold, low pressure and vibration of a balloon flight." },
      { title: "Flight & Data Analysis", description: "Placeholder. Fly the payload and analyse the recovered data." },
    ],

    instrument: {
      heading: "The Payload & How It Works",
      eyebrow: "Stratospheric optical experiment",
      media: { alt: "Placeholder: render or photo of the SOLARIS payload" },
      overviewTitle: "Measuring optical distortion up to 30 km",
      overview:
        "As the balloon climbs, SOLARIS measures how an optical signal changes on its way through the atmosphere, with and without protective coatings.",
      features: [
        { title: "Optical Transmission Path", body: "Placeholder. Describe the light source, the optics and the detector." },
        { title: "Coating Samples", body: "Placeholder. Describe the coatings under test and how they are mounted." },
        { title: "Flight Electronics", body: "Placeholder. Describe the flight computer, power and sensors." },
        { title: "Structure & Thermal", body: "Placeholder. Describe the enclosure and how it keeps the experiment within limits." },
      ],
    },

    architecture: {
      heading: "System Architecture & Data Flow",
      eyebrow: "End-to-end measurement pipeline",
      steps: [
        { label: "Emit", title: "Optical Source", body: "Placeholder. What generates the signal." },
        { label: "Transmit", title: "Atmospheric Path", body: "Placeholder. How the signal travels and what distorts it." },
        { label: "Capture", title: "Detection", body: "Placeholder. How the signal is measured." },
        { label: "Analyse", title: "Data Processing", body: "Placeholder. How the recorded data becomes results." },
      ],
    },

    team: {
      eyebrow: "4 subteams",
      media: { alt: "Placeholder: photo of the SOLARIS team", caption: "The SOLARIS team", credit: "MASS · 2026" },
      subteams: [
        { name: "Mechanical", body: "Placeholder. Payload structure, mounting and thermal design." },
        { name: "Electrical", body: "Placeholder. Power, sensors and flight electronics." },
        { name: "Software", body: "Placeholder. Flight software, data logging and analysis tools." },
        { name: "Science", body: "Placeholder. Experiment design, coatings and data interpretation." },
      ],
    },

    results: {
      heading: "Flight & Results",
      eyebrow: "Results pending",
      summary: "SOLARIS has not flown yet. Results from the flight will be posted here.",
      stats: [
        { label: "Target altitude", value: "~30 km", note: "Stratospheric balloon" },
        { label: "Challenge", value: "CAN-SBX", note: "SEDS Canada" },
        { label: "Subteams", value: "4", note: "Mech · Elec · Software · Science" },
        { label: "Launch", value: "TBD", note: "Placeholder" },
      ],
      gallery: [
        { alt: "Placeholder: payload build photo", title: "Payload Build", body: "Placeholder. Photo and caption from the build." },
        { alt: "Placeholder: testing photo", title: "Testing", body: "Placeholder. Photo and caption from testing." },
      ],
    },

    partners: {
      eyebrow: "Support for SOLARIS",
      items: [
        { name: "SEDS Canada", kind: "Challenge host", role: "CAN-SBX" },
        { name: "Placeholder Sponsor", kind: "Sponsor type", role: "Support provided" },
      ],
    },
  },

  {
    slug: "stellarscope",
    name: "Stellarscope",
    years: "2023–2024",
    status: "past",
    tagline: "Radio astronomy · 21 cm hydrogen line · CAN-ARX",
    blurb:
      "A collapsible radio telescope that measured radio emissions from the Sun and from hydrogen gas in our galaxy.",
    details: [
      "Stellarscope is a collapsible, ground-based radio telescope designed and built by MASS for SEDS Canada's CAN-ARX expedition. The team took it to Baie-Saint-Paul, Quebec, and used it to measure radio emissions from the Sun and from the 21 cm (1420.405 MHz) line of neutral hydrogen in our galaxy.",
      "The telescope became the starting point for a larger goal: linking radio telescopes into a synchronized array, and eventually releasing the design as open source so others can build their own and join the network.",
    ],
    note: "Stellarscope gave students hands-on experience in RF design, mechanical design, signal processing and radio astronomy.",

    hero: {
      image: "/about/can-arx-2024-team.jpg",
      alt: "The CAN-ARX 2024 team on a mountain summit, gathered around their radio telescope",
      position: "center 20%",
      caption: "Radio telescope & 21 cm hydrogen line measurements",
      credit: "Baie-Saint-Paul, QC · 2024",
    },
    card: {
      image: "/projects/stellarscope/using-telescope.png",
      alt: "Team members operating the radio telescope on a mountain summit",
    },

    currentPhase: 5,
    phases: [
      { title: "Concept & Link Budget", description: "Placeholder. Define the targets (the Sun and the hydrogen line) and what the telescope needs to detect them." },
      { title: "Collapsible Dish & Mount", description: "Placeholder. Design a dish and mount that pack down for travel." },
      { title: "RF Front-End & Receiver", description: "Placeholder. Build and bench-test the amplifiers, filters and receiver." },
      { title: "Integration & Testing", description: "Placeholder. Assemble the telescope and test it before the expedition." },
      { title: "CAN-ARX Expedition", description: "Deploy the telescope in Baie-Saint-Paul, Quebec, and measure radio emissions from the Sun and galactic hydrogen." },
    ],

    instrument: {
      heading: "The Instrument & How It Works",
      eyebrow: "Portable radio telescope",
      media: {
        image: "/projects/stellarscope/cad.png",
        alt: "CAD render of the Stellarscope radio telescope on its mount",
        position: "center 30%",
      },
      overviewTitle: "Listening to the 1420.405 MHz hydrogen line",
      overview:
        "Neutral hydrogen gas across the galaxy emits faint radio waves at a wavelength of 21 cm. Stellarscope collects those emissions with a dish, amplifies and filters them, and digitizes them so the spectrum can be analysed.",
      features: [
        { title: "Collapsible Reflector & Feedhorn", body: "A dish that packs down for travel focuses incoming radio waves onto a feedhorn tuned for 1.42 GHz. Placeholder: add dish size and feed details." },
        { title: "Low-Noise RF Front-End", body: "Amplifiers and filters boost the very weak signal while rejecting terrestrial interference. Placeholder: add gain and noise figures." },
        { title: "Steerable Mount", body: "The mount points the dish at its targets in the sky. Placeholder: describe how it is aimed and tracked." },
        { title: "Software-Defined Radio Backend", body: "A software-defined radio digitizes the signal so it can be turned into spectra. Placeholder: add the SDR and software used." },
      ],
    },

    architecture: {
      heading: "System Architecture & Signal Flow",
      eyebrow: "End-to-end RF & data pipeline",
      steps: [
        { label: "Collect", title: "Feedhorn & Dish", body: "The reflector focuses 1420 MHz radio waves into the feedhorn." },
        { label: "Condition", title: "RF Front-End", body: "Low-noise amplification and band-pass filtering preserve the faint signal." },
        { label: "Digitize", title: "Software-Defined Radio", body: "The SDR samples the conditioned signal and streams it to a computer." },
        { label: "Process", title: "Spectra & Analysis", body: "Software turns the samples into spectra that show the Sun and the hydrogen line." },
      ],
    },

    team: {
      eyebrow: "Electrical & mechanical subteams",
      media: {
        image: "/projects/stellarscope/multi-team-photo.png",
        alt: "MASS members gathered together for a team photo",
        caption: "The Stellarscope team",
        credit: "MASS · 2024",
      },
      subteams: [
        { name: "Electrical", body: "RF front-end, receiver chain and power. Led by Dhavin Tandon." },
        { name: "Mechanical", body: "Collapsible dish, feed support and mount. Led by Marco Puchetti." },
        { name: "Software & Data", body: "Placeholder. SDR setup, data capture and spectrum analysis." },
        { name: "Project Management", body: "Planning, reviews and expedition logistics. Led by Kamyar Lakdashti." },
      ],
    },

    results: {
      heading: "Expedition & Field Results",
      eyebrow: "CAN-ARX · Baie-Saint-Paul, QC · 2024",
      summary:
        "At the CAN-ARX expedition in Baie-Saint-Paul, Quebec, the team deployed Stellarscope in the field and measured radio emissions from the Sun and from hydrogen gas in our galaxy. Placeholder: add what the measurements showed.",
      stats: [
        { label: "Target frequency", value: "1420.405 MHz", note: "21 cm hydrogen line" },
        { label: "Sources observed", value: "2", note: "The Sun · galactic hydrogen" },
        { label: "Field site", value: "Baie-Saint-Paul", note: "Quebec" },
        { label: "Expedition", value: "CAN-ARX", note: "SEDS Canada · 2024" },
      ],
      gallery: [
        {
          image: "/projects/stellarscope/using-telescope.png",
          alt: "Team members operating the radio telescope on a mountain summit",
          title: "Field Deployment",
          body: "Operating the telescope on site during the expedition.",
        },
        {
          alt: "Placeholder: photo of the RF front-end on the bench",
          title: "RF Front-End Bench Testing",
          body: "Placeholder. Photo and caption from lab testing.",
        },
      ],
    },

    partners: {
      eyebrow: "Support for Stellarscope",
      items: [
        { name: "SEDS Canada", kind: "Expedition host", role: "CAN-ARX" },
        { name: "Placeholder Sponsor", kind: "Sponsor type", role: "Support provided" },
      ],
    },
  },

  {
    slug: "stratogene",
    name: "StratoGene",
    years: "2023–2024",
    status: "past",
    tagline: "Biological payload · CAN-SBX",
    blurb:
      "The first biological payload in CAN-SBX history: E. coli and yeast flown more than 30 km into the stratosphere.",
    details: [
      "StratoGene sent E. coli and yeast more than 30 km into the stratosphere on a high-altitude balloon, making it the first biological payload in the history of SEDS Canada's CAN-SBX.",
      "The project was supported by the Canadian Space Agency, SNOLAB and NOSM University. Placeholder: add the science question and what the team measured.",
    ],

    hero: {
      image: "/about/can-sbx-2024-team.jpg",
      alt: "The CAN-SBX 2024 team standing behind a table with their payload, a weather balloon behind them",
      position: "center 30%",
      caption: "Biological payload to the stratosphere",
      credit: "CAN-SBX · 2024",
    },

    currentPhase: 5,
    phases: [
      { title: "Science Case", description: "Placeholder. Define what the experiment set out to learn about microorganisms in the stratosphere." },
      { title: "Payload Design", description: "Placeholder. Design containment and life support for the samples." },
      { title: "Build & Biosafety", description: "Placeholder. Build the payload and prepare the biological samples." },
      { title: "Launch & Recovery", description: "Fly the payload above 30 km on a stratospheric balloon and recover it." },
      { title: "Lab Analysis", description: "Placeholder. Analyse the flown samples against ground controls." },
    ],

    instrument: {
      heading: "The Payload & How It Works",
      eyebrow: "Stratospheric biology experiment",
      media: { alt: "Placeholder: photo or render of the StratoGene payload" },
      overviewTitle: "Living samples above 30 km",
      overview:
        "StratoGene carried E. coli and yeast into the stratosphere, where they were exposed to low pressure, cold and increased radiation. Placeholder: describe how the samples were held and monitored.",
      features: [
        { title: "Sample Containment", body: "Placeholder. How the E. coli and yeast samples were stored and protected." },
        { title: "Environmental Sensing", body: "Placeholder. Sensors that recorded the conditions the samples experienced." },
        { title: "Thermal Control", body: "Placeholder. How the payload kept the samples within limits." },
        { title: "Flight Structure", body: "Placeholder. The enclosure and how it attached to the balloon." },
      ],
    },

    architecture: {
      heading: "Experiment Flow",
      eyebrow: "From the lab to the stratosphere and back",
      steps: [
        { label: "Prepare", title: "Sample Preparation", body: "Placeholder. Culture and load the samples." },
        { label: "Fly", title: "Stratospheric Flight", body: "The payload climbs above 30 km on a high-altitude balloon." },
        { label: "Recover", title: "Recovery", body: "Placeholder. Recover the payload and preserve the samples." },
        { label: "Analyse", title: "Lab Analysis", body: "Placeholder. Compare flown samples with ground controls." },
      ],
    },

    team: {
      eyebrow: "CAN-SBX 2024 team",
      media: {
        image: "/about/can-sbx-2024-team.jpg",
        alt: "The CAN-SBX 2024 team with their payload",
        caption: "The StratoGene team with their payload",
        credit: "MASS · 2024",
      },
      subteams: [
        { name: "Science", body: "Placeholder. Experiment design and sample analysis." },
        { name: "Mechanical", body: "Placeholder. Payload structure and containment." },
        { name: "Electrical", body: "Placeholder. Sensors, power and data logging." },
        { name: "Software", body: "Placeholder. Flight software and data processing." },
      ],
    },

    results: {
      heading: "Flight & Results",
      eyebrow: "CAN-SBX · 2024",
      summary:
        "StratoGene flew E. coli and yeast more than 30 km into the stratosphere, the first biological payload in CAN-SBX history. Placeholder: add what the analysis found.",
      stats: [
        { label: "Altitude", value: "30+ km", note: "Stratosphere" },
        { label: "Organisms", value: "2", note: "E. coli · yeast" },
        { label: "A first", value: "1st", note: "Biological payload in CAN-SBX" },
        { label: "Supporters", value: "3", note: "CSA · SNOLAB · NOSM U" },
      ],
      gallery: [
        { alt: "Placeholder: launch photo", title: "Launch", body: "Placeholder. Photo and caption from launch day." },
        { alt: "Placeholder: lab analysis photo", title: "Lab Analysis", body: "Placeholder. Photo and caption from the lab." },
      ],
    },

    partners: {
      eyebrow: "Support for StratoGene",
      items: [
        { name: "Canadian Space Agency", kind: "Government", role: "Supporter" },
        { name: "SNOLAB", kind: "Research facility", role: "Supporter" },
        { name: "NOSM University", kind: "University", role: "Supporter" },
        { name: "SEDS Canada", kind: "Challenge host", role: "CAN-SBX" },
      ],
    },
  },
];
