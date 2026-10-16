import { 
  SkillCategory, 
  EducationItem, 
  CertificationItem, 
  WorkshopItem, 
  ProjectConcept, 
  CareerInterest 
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Aditya Yadav",
  monogram: "AY",
  role: "BBA Student",
  institution: "Allenhouse Business School",
  tagline: "Building my future at the intersection of Business, Marketing & Finance.",
  shortBio: "I'm a Business Administration student developing practical skills in digital marketing, financial accounting, business operations, and data-driven problem-solving. I'm eager to learn, collaborate, and contribute to meaningful business projects.",
  email: "adityaydv42007@gmail.com",
  phone: "+91 9956237287",
  location: "Kanpur, Uttar Pradesh, India",
  linkedin: "https://linkedin.com/in/adityayadav42007",
  resumePath: "/resume.pdf",
  focusAreas: [
    "Business Administration",
    "Digital Marketing",
    "Financial Accounting",
    "Operations & Management"
  ]
};

export const ABOUT_CARDS = [
  {
    title: "Education",
    subtitle: "Bachelor of Business Administration",
    institution: "Allenhouse Business School (2025 – 2028)",
    description: "Building strong fundamentals in management principles, organizational behavior, marketing dynamics, and corporate finance."
  },
  {
    title: "Focus Areas",
    subtitle: "Business, Marketing, Sales & Finance",
    institution: "Core Disciplines",
    description: "Deeply interested in how modern businesses acquire customers, allocate capital, structure sales pipelines, and optimize unit economics."
  },
  {
    title: "Tools & Technologies",
    subtitle: "Excel, Tally, Canva & AI Workflows",
    institution: "Applied Toolset",
    description: "Leveraging spreadsheet modeling, accounting software, creative assets, and AI-assisted research to accelerate operational efficiency."
  },
  {
    title: "Career Goal",
    subtitle: "Practical Learning & Business Impact",
    institution: "Immediate Target",
    description: "Seeking competitive internships, part-time opportunities, remote positions, and entry-level business roles to create real value."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "business-skills",
    name: "Business & Professional Skills",
    description: "Core interpersonal and strategic competencies developed through academic coursework and team initiatives.",
    badge: "Professional Core",
    skills: [
      {
        name: "Verbal & Written Communication",
        level: "Core Capability",
        description: "Articulating ideas clearly in business presentations, reports, emails, and collaborative discussions."
      },
      {
        name: "Teamwork & Cross-functional Collaboration",
        level: "Core Capability",
        description: "Coordinating smoothly within student teams, aligning on shared milestones, and executing group assignments."
      },
      {
        name: "Adaptability & Rapid Learning",
        level: "Core Capability",
        description: "Embracing new business methodologies, software tools, and evolving project requirements with agility."
      },
      {
        name: "Problem-Solving & Critical Inquiry",
        level: "Core Capability",
        description: "Breaking down complex operational bottlenecks into structured questions and actionable options."
      },
      {
        name: "Analytical Thinking",
        level: "Core Capability",
        description: "Interpreting qualitative market indicators and quantitative business data to draw sound conclusions."
      },
      {
        name: "Professional Learning Mindset",
        level: "Core Capability",
        description: "Proactively seeking workshops, industry certifications, and mentor feedback for continuous skill growth."
      }
    ]
  },
  {
    id: "digital-tools",
    name: "Digital & Productivity Tools",
    description: "Practical software utilized for financial analysis, design communication, and research workflows.",
    badge: "Practical Tools",
    skills: [
      {
        name: "Microsoft Excel",
        level: "Certified Training (2025)",
        description: "Organizing business spreadsheets, applying formulas, calculating financial ratios, and structuring data summaries."
      },
      {
        name: "Canva",
        level: "Practical Proficiency",
        description: "Designing clean marketing collateral, social media creatives, slide pitch decks, and visual communication assets."
      },
      {
        name: "AI-Assisted Research & Productivity",
        level: "Certified Training (2026)",
        description: "Utilizing modern language models and generative tools for market research synthesis, drafting, and productivity."
      }
    ]
  },
  {
    id: "business-learning",
    name: "Business & Technical Learning",
    description: "Academic and professional training programs currently expanding domain knowledge.",
    badge: "Domain Learning",
    skills: [
      {
        name: "Tally & Financial Accounting",
        level: "Pursuing Master Certification",
        description: "Studying ledger maintenance, voucher entry, balance sheets, and standard bookkeeping principles at VCEC Tally Academy."
      },
      {
        name: "Digital Marketing Fundamentals",
        level: "Ongoing Academic Training (2026)",
        description: "Understanding audience segmentation, SEO/SEM fundamentals, social media strategy, and campaign metrics."
      },
      {
        name: "Financial Accounting Concepts",
        level: "Academic Coursework",
        description: "Comprehending income statements, cash flow dynamics, asset valuation, and financial reporting standards."
      },
      {
        name: "Business Operations & Management",
        level: "Academic Coursework",
        description: "Studying supply chain workflows, resource allocation, organizational structures, and operational governance."
      }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Allenhouse Business School",
    timeline: "2025 — Expected 2028",
    status: "Currently Enrolled",
    location: "Kanpur, Uttar Pradesh",
    highlights: [
      "Rigorous undergraduate curriculum emphasizing management theory, corporate finance, marketing strategies, and organizational behavior.",
      "Participating in active business clubs, student seminars, and practical industrial immersion programs.",
      "Developing analytical frameworks for business problem-solving, project management, and corporate leadership."
    ]
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "R G Academy",
    timeline: "Completed",
    status: "Completed",
    location: "Uttar Pradesh",
    highlights: [
      "Completed secondary education with focused discipline, analytical reasoning, and academic rigor.",
      "Built a solid foundation in communication, quantitative reasoning, and structured study habits."
    ]
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: "Master in Financial Accounting",
    issuer: "VCEC Tally Academy",
    status: "Currently Pursuing",
    year: "Ongoing",
    description: "Comprehensive hands-on training in financial bookkeeping, Tally ERP/Prime operations, tax basics, ledger reconciliations, and statement preparation.",
    skillsGained: ["Tally Operations", "Ledger Management", "Voucher Entry", "Financial Bookkeeping"]
  },
  {
    title: "Digital Marketing Training",
    issuer: "Allenhouse Business School",
    status: "Ongoing",
    year: "2026",
    description: "Specialized campus training focused on organic and paid digital marketing channels, content creation, social media branding, and lead generation.",
    skillsGained: ["Brand Positioning", "Campaign Planning", "Audience Targeting", "Content Strategy"]
  },
  {
    title: "MS Excel Training",
    issuer: "Allenhouse Business School",
    status: "Completed",
    year: "2025",
    description: "Practical certificate course covering essential spreadsheet formulas, data filtering, sorting, conditional formatting, and visualization charts.",
    skillsGained: ["Spreadsheet Modeling", "Formulas & Functions", "Data Sorting & Filters", "Chart Visualization"]
  },
  {
    title: "AI Fundamentals: Language and Vision in AI",
    issuer: "IBM SkillsBuild",
    status: "Completed",
    year: "2026",
    description: "Foundational certification examining artificial intelligence concepts, large language models, computer vision mechanisms, and ethical AI applications.",
    skillsGained: ["AI Literacy", "Prompt Structuring", "Machine Learning Concepts", "Ethical AI Principles"]
  }
];

export const INDUSTRIAL_EXPOSURE = {
  title: "Industrial Visit to Amul Dairy Factory",
  theme: "Learning Beyond the Classroom",
  organization: "Amul (Gujarat Cooperative Milk Marketing Federation)",
  type: "Industrial Immersion & Field Study",
  description: "An intensive on-site exposure program studying the operations of one of India's largest and most efficient FMCG and dairy supply chains.",
  takeaways: [
    {
      title: "Large-Scale Supply Chain Operations",
      detail: "Observed end-to-end inbound raw material procurement, cold-chain logistics, and regional inventory routing."
    },
    {
      title: "Production & Pasteurization Processing",
      detail: "Gained firsthand insight into continuous manufacturing lines, high-volume milk processing, and packaging speed."
    },
    {
      title: "Quality Control & Hygiene Standards",
      detail: "Studied laboratory sampling checkpoints, automated testing parameters, and international food safety compliances."
    },
    {
      title: "Automated Dairy Distribution Workflows",
      detail: "Examined robotic conveyor systems, palletizing automation, and temperature-controlled dispatch management."
    },
    {
      title: "Real-World Manufacturing Governance",
      detail: "Learned how operations managers maintain uptime, monitor waste reduction, and optimize shift scheduling."
    }
  ],
  academicNote: "Conducted as an academic industrial visit to bridge classroom theory with real-world corporate manufacturing and supply-chain logistics."
};

export const WORKSHOPS_LIST: WorkshopItem[] = [
  {
    title: "Fundamentals of Brand Building",
    institution: "Allenhouse Business School",
    year: "2026",
    type: "Workshop",
    description: "Interactive workshop covering consumer perception, brand equity development, messaging consistency, and value proposition design for emerging enterprises.",
    keyTopics: ["Brand Identity", "Customer Perception", "Value Proposition", "Brand Architecture"]
  },
  {
    title: "Fintech Club Seminar",
    institution: "Allenhouse Business School",
    year: "2026",
    type: "Seminar",
    description: "Insightful departmental seminar exploring digital payment revolutions, neo-banking ecosystems, UPI infrastructure, and tech-driven financial services.",
    keyTopics: ["Digital Payments", "Fintech Ecosystems", "Financial Inclusion", "Banking Technology"]
  }
];

export const PROJECT_CONCEPTS: ProjectConcept[] = [
  {
    id: "digital-marketing-plan",
    title: "Digital Marketing Campaign Plan",
    tagline: "Omnichannel Acquisition & Content Strategy for D2C Brands",
    status: "Concept · In Development",
    objective: "Formulate a comprehensive launch campaign framework covering target persona definition, organic content calendar, paid funnel mapping, and KPI benchmarks.",
    demonstratedSkills: [
      "Audience Persona Mapping",
      "Content Matrix & Funnel Design",
      "Social Media Strategy",
      "Cost-per-Acquisition (CPA) Economics",
      "Canva Asset Planning"
    ],
    plannedOutputs: [
      "30-day multi-platform content roadmap with thematic pillars",
      "Ad copy variants targeting top-of-funnel vs bottom-of-funnel segments",
      "Campaign ROI tracking spreadsheet with conversion metrics"
    ],
    framework: [
      "1. Market & Competitor Audit: Reviewing brand presence across key competitor channels.",
      "2. Persona Development: Outlining demographics, pain points, and preferred media.",
      "3. Content Pillars: Designing educational, entertaining, and conversion-focused posts.",
      "4. Performance Metrics: Establishing benchmarks for CTR, CPC, and conversion rates."
    ]
  },
  {
    id: "financial-dashboard",
    title: "Financial Analysis Dashboard",
    tagline: "Excel-Driven Revenue & Expense Modeling with Key Ratios",
    status: "Concept · In Development",
    objective: "Build an interactive Microsoft Excel financial model to organize operational revenues, categorize expenses, compute gross/operating margins, and chart cash flows.",
    demonstratedSkills: [
      "Microsoft Excel Formulas (INDEX/MATCH, SUMIFS, XLOOKUP)",
      "Financial Ratio Computation (Liquidity, Profitability, Solvency)",
      "Dynamic Charting & KPI Cards",
      "Tally Ledger Data Structuring"
    ],
    plannedOutputs: [
      "Consolidated multi-period income and expense tracking workbook",
      "Visual executive dashboard with margin trends and variance alerts",
      "Automated summary report suitable for non-financial stakeholders"
    ],
    framework: [
      "1. Data Schema Design: Standardizing revenue streams and operational overheads.",
      "2. Formula Architecture: Applying error-checked formulas for automated totals.",
      "3. Financial Ratios: Computing Gross Profit Margin, Net Margin, and Current Ratio.",
      "4. Visual Layout: Structuring clean, professional executive charts without clutter."
    ]
  },
  {
    id: "business-case-study",
    title: "Business Case Study: Operations & Expansion",
    tagline: "Strategic Analysis of Supply Chain Challenges & Solutions",
    status: "Concept · In Development",
    objective: "Conduct a structured case analysis investigating how FMCG businesses resolve distribution bottlenecks, manage working capital, and scale into tier-2/tier-3 cities.",
    demonstratedSkills: [
      "SWOT & PESTLE Strategic Analysis",
      "Supply Chain Workflow Mapping",
      "Working Capital Assessment",
      "Structured Report Writing & Executive Summary"
    ],
    plannedOutputs: [
      "Detailed 5-section strategic analysis deck with root-cause diagnoses",
      "Actionable recommendations prioritized by implementation feasibility",
      "Risk mitigation matrix for operational distribution hiccups"
    ],
    framework: [
      "1. Problem Definition: Identifying core operational friction and market pressures.",
      "2. Diagnostic Framework: Evaluating inventory turnover and supplier dependencies.",
      "3. Strategic Alternatives: Comparing centralized vs hub-and-spoke distribution models.",
      "4. Implementation Roadmap: Phased 6-month execution checklist with key milestones."
    ]
  }
];

export const CAREER_INTERESTS: CareerInterest[] = [
  {
    title: "Digital Marketing",
    description: "Developing targeted digital campaigns, managing social channels, crafting compelling copy, and analyzing engagement metrics to build customer awareness.",
    relevance: "Hands-on experience through Allenhouse training, Canva visual design, and audience segmentation coursework."
  },
  {
    title: "Marketing Strategy",
    description: "Understanding brand identity, market positioning, competitive benchmarking, and creating value propositions that resonate with target demographics.",
    relevance: "Supported by Brand Building workshops and consumer behavior coursework in BBA."
  },
  {
    title: "Sales & Client Acquisition",
    description: "Communicating product value, qualifying prospects, handling client queries, and supporting sales pipeline velocity with persistence and enthusiasm.",
    relevance: "Strong verbal communication, active listening, and relationship-building orientation."
  },
  {
    title: "Business Development",
    description: "Identifying market opportunities, researching strategic partnerships, supporting outreach efforts, and assisting in business growth initiatives.",
    relevance: "Passionate about exploring how organizations expand, form partnerships, and enter new market segments."
  },
  {
    title: "Finance & Accounting",
    description: "Assisting with ledger maintenance, spreadsheet modeling, financial record-keeping, and understanding foundational corporate accounting concepts.",
    relevance: "Pursuing Master in Financial Accounting (VCEC Tally Academy) alongside MS Excel certification."
  },
  {
    title: "Management & Team Coordination",
    description: "Facilitating team communication, keeping project deliverables on schedule, aligning priorities, and supporting organized workflow execution.",
    relevance: "Demonstrated through academic group leadership and team collaboration exercises."
  },
  {
    title: "Business Operations",
    description: "Streamlining daily processes, minimizing administrative friction, tracking supply chain activities, and ensuring operational standards are met.",
    relevance: "Grounded in BBA coursework and insights gained from the Amul factory industrial visit."
  }
];
