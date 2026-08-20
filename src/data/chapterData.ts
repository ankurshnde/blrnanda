export interface Person {
  id: string;
  name: string;
  role: string;
  affiliation?: string;
  imageUrl?: string;
  linkedIn?: string;
  twitter?: string;
  bio?: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  iconName: string;
}

export const CHAPTER_INFO = {
  chapterName: "Bangalore Chapter",
  organization: "Project NANDA",
  tagline: "Network of AI Agents in Decentralized Architecture",
  city: "Bangalore",
  region: "Karnataka, India",
  heroDescription:
    "Advancing decentralized AI agent infrastructure in Bengaluru. Connecting builders, researchers, and innovators to shape the Open Agentic Web.",
  aboutTitle: "About Project NANDA",
  aboutText1:
    "Project NANDA is building foundational infrastructure for the Open Agentic Web — enabling trillions of autonomous AI agents to discover, collaborate, and transact securely across organizational boundaries.",
  aboutText2:
    "Project NANDA develops open agent registries, cross-platform bridges (A2A, MCP), and verifiable trust primitives to empower a decentralized ecosystem.",
  socials: {
    whatsapp: "https://chat.whatsapp.com/F4FgELgoRqjFdX8XvDn9h2",
    linkedin: "https://www.linkedin.com/company/projectnanda/",
    luma: "https://lu.ma/nanda",
    github: "https://github.com/projnanda",
    twitter: "https://x.com/projnanda",
    email: "ankur@agenticnet.org",
    mainSite: "https://projectnanda.org",
    joinForm: "https://forms.gle/kt1g8CtfrtMxJ4zw5",
  },
  // Global stats from Project NANDA
  stats: [
    {
      value: "10,000+",
      title: "COMMUNITY MEMBERS",
      subtitle: "Global Network Participants",
    },
    {
      value: "75+",
      title: "PROJECTS",
      subtitle: "Active Initiatives",
    },
    {
      value: "15+",
      title: "PAPERS",
      subtitle: "Research Publications",
    },
    {
      value: "20+",
      title: "LOCATIONS",
      subtitle: "Global Chapters",
    },
  ],
};

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "Fully Open-Source Protocols",
    description:
      "Build, fork, and contribute to the Project NANDA ecosystem. Open agent registries, agent-to-agent (A2A) communication protocols, and verifiable execution standards.",
    iconName: "Code2",
  },
  {
    title: "Global Community",
    description:
      "Connect directly with AI researchers, developers, and founders from around the world building the future of autonomous agents.",
    iconName: "Globe2",
  },
  {
    title: "Innovation & Research Hub",
    description:
      "Access workshops, hackathons, research collaborations, and resources to accelerate your AI agent projects and discoveries.",
    iconName: "Sparkles",
  },
  {
    title: "Startup Ecosystem",
    description:
      "Join a thriving ecosystem of 100+ startups building on agentic technologies with access to mentorship and funding opportunities.",
    iconName: "Rocket",
  },
];

// Official Chapter Leaders
export const CHAPTER_LEADERS: Person[] = [
  {
    id: "lead-1",
    name: "Santanu Bhattacharya",
    role: "Chapter Lead",
    imageUrl: "/santanu.png",
    linkedIn: "https://www.linkedin.com/in/santanub/",
  },
  {
    id: "lead-2",
    name: "Sneha Biradar",
    role: "Co-Leader",
    imageUrl: "/sneha.png",
    linkedIn: "https://www.linkedin.com/in/snehabiradar2424/",
  },
];

// FAQs fetched and distilled from projectnanda.org & Linux Foundation A2A specs
export const FAQS = [
  {
    q: "What is Project NANDA?",
    a: "Project NANDA is building foundational infrastructure for an Internet of AI Agents — an open, decentralized system where trillions of AI agents discover, collaborate, and transact across organizational boundaries. NANDA provides the universal index, protocols, and developer SDKs.",
  },
  {
    q: "What role does Project NANDA play in the agentic AI space?",
    a: "NANDA serves as the connective tissue across three core layers: (1) Open discovery & cross-platform interoperability, (2) Economic primitives for service pricing and settlement, and (3) Privacy-aware collaboration so agent populations learn together without exposing raw data.",
  },
  {
    q: "What does NANDA add beyond today's communication standards?",
    a: "While standards like A2A handle messaging once connected, NANDA provides the address system: universal discovery via the NANDA Index, cross-protocol translation (A2A, MCP, HTTPS), verifiable AgentFacts credentials, and privacy-preserving lookup paths.",
  },
  {
    q: "What are the development stages of Project NANDA?",
    a: "NANDA progresses in three phases: Stage 1 (Foundations & Index for identity, discovery, and SDK onboarding), Stage 2 (Agentic Commerce for knowledge pricing and resource markets), and Stage 3 (Society of Agents for Large Population Models and cross-silo collaborative learning).",
  },
  {
    q: "Do Project NANDA and the A2A protocol compete?",
    a: "No, they are complementary. A2A defines the wire syntax for how two connected agents talk. NANDA provides the semantic discovery and routing city on top, making any A2A-compliant agent globally discoverable and verifiable.",
  },
  {
    q: "How can builders and researchers get involved in the Bangalore Chapter?",
    a: "Join our official Bangalore WhatsApp community, connect on LinkedIn, participate in local build-days and hackathons, and contribute to open-source NANDA protocols on GitHub.",
  },
];
