import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ChartCandlestick,
  Globe2,
  GraduationCap,
  LineChart,
  Mail,
  PenLine,
  Plane,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

export const profile = {
  name: "Andy Zheng",
  label: "Economics | Finance | Global Markets",
  headline: "Building a path across economics, valuation, and global financial markets.",
  intro:
    "I'm an Economics student interested in investment banking, valuation, market research, and the way global markets connect business decisions.",
  email: "qz2806@nyu.edu",
  secondaryEmail: "zhengqinzhou726@gmail.com",
  linkedin: "https://www.linkedin.com/in/qinzhou-zheng",
  github: "https://github.com/",
  resumeUrl: "/resume.pdf",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Interests", href: "/interests" },
  { label: "Timeline", href: "/timeline" },
  { label: "Contact", href: "/contact" },
];

export const previews = [
  {
    number: "01",
    title: "Profile",
    href: "/profile",
    description: "A concise introduction to my interests in economics, markets, people, and decision-making.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Resume",
    href: "/resume",
    description: "Education, experience placeholders, coursework, and technical finance skills in one clean view.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Projects",
    href: "/projects",
    description: "Selected finance, research, modeling, and statistics work presented as a recruiter-friendly portfolio.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Interests & Habits",
    href: "/interests",
    description: "The personal routines, global interests, and learning habits that shape how I grow.",
    icon: Trophy,
  },
  {
    number: "05",
    title: "Timeline",
    href: "/timeline",
    description: "A simple path through tennis, international study, finance curiosity, and technical skill-building.",
    icon: CalendarDays,
  },
  {
    number: "06",
    title: "Contact",
    href: "/contact",
    description: "Ways to connect about finance, markets, internships, research, and global business.",
    icon: Mail,
  },
];

export const profileHighlights = [
  {
    title: "Economics & Markets",
    description: "Studying macroeconomics, market behavior, and how financial systems influence business decisions.",
    icon: ChartCandlestick,
  },
  {
    title: "Valuation & Modeling",
    description: "Building skills in Excel modeling, DCF analysis, comparable companies, and revenue forecasting.",
    icon: LineChart,
  },
  {
    title: "Global Perspective",
    description: "Interested in the U.S., China, Asia-Pacific markets, and Japanese language and culture.",
    icon: Globe2,
  },
  {
    title: "Communication & Research",
    description: "Translating numbers, narratives, and market context into clear analysis for better decisions.",
    icon: PenLine,
  },
];

export const resume = {
  education: [
    {
      title: "Economics Student",
      institution: "Boston University / transfer student background placeholder",
      details: ["Relevant coursework: Macroeconomics, Statistics, Calculus, Writing, Japanese"],
    },
  ],
  experience: [
    {
      role: "Investment Banking Internship",
      company: "Placeholder",
      description: "Prepared to support valuation, market research, pitch materials, and transaction analysis.",
    },
    {
      role: "Equity Research Internship",
      company: "Placeholder",
      description: "Focused on company analysis, industry drivers, earnings research, and investment narratives.",
    },
    {
      role: "Venture Capital Internship",
      company: "Placeholder",
      description: "Explored startup markets, business models, competitive landscapes, and founder-facing research.",
    },
  ],
  skills: [
    "Excel financial modeling",
    "DCF valuation",
    "Comparable company analysis",
    "Market research",
    "Revenue forecasting",
    "R programming",
    "Data analysis",
    "Public speaking",
    "Japanese language",
  ],
};

export const projects = [
  {
    title: "Apple Financial Forecast",
    slug: "apple-forecast",
    category: "Forecasting",
    description: "A forward-looking revenue and margin model exploring the operating drivers behind Apple's performance.",
    tools: ["Excel", "Revenue drivers", "Scenario analysis"],
  },
  {
    title: "DCF Valuation Model",
    slug: "dcf-valuation",
    category: "Valuation",
    description: "A discounted cash flow framework with assumptions, free cash flow projections, and sensitivity outputs.",
    tools: ["Excel", "DCF", "WACC"],
  },
  {
    title: "Company Overview in Excel",
    slug: "company-overview",
    category: "Company Research",
    description: "A compact company profile summarizing business segments, financials, competitors, and market positioning.",
    tools: ["Excel", "Research", "Comps"],
  },
  {
    title: "Revenue Driver Analysis",
    slug: "revenue-driver",
    category: "Business Analysis",
    description: "A driver-based analysis connecting unit economics, pricing, volume, and growth assumptions.",
    tools: ["Excel", "Forecasting", "Charts"],
  },
  {
    title: "R Statistics Project",
    slug: "r-statistics",
    category: "Statistics",
    description: "A statistics project using R to clean, analyze, visualize, and explain economic or market data.",
    tools: ["R", "Data analysis", "Visualization"],
  },
  {
    title: "Market Research Notes",
    slug: "market-research",
    category: "Markets",
    description: "A research notebook tracking macro themes, valuation debates, company news, and investor questions.",
    tools: ["Research", "Writing", "Markets"],
  },
];

export const interests = [
  {
    title: "Tennis",
    description: "A long-term habit that builds discipline, competition, focus, and patience under pressure.",
    icon: Trophy,
  },
  {
    title: "Financial Markets",
    description: "Following macroeconomics, valuation, investing, and market news to understand business in motion.",
    icon: ChartCandlestick,
  },
  {
    title: "Japanese Language & Culture",
    description: "Learning language and culture as a way to widen perspective and communicate across borders.",
    icon: BookOpen,
  },
  {
    title: "Travel & Global Perspective",
    description: "Curious about the U.S., China, UK, and Asia-Pacific as connected business and cultural regions.",
    icon: Plane,
  },
  {
    title: "Reading & Self-Improvement",
    description: "Using reflection, career learning, and consistent reading to keep getting sharper.",
    icon: Sparkles,
  },
  {
    title: "Data & Technology",
    description: "Building fluency with R, Excel, AI tools, and productivity systems that improve analysis.",
    icon: Target,
  },
];

export const timelineItems = [
  "Started tennis and developed discipline",
  "Built interest in economics and markets",
  "Studied in the United States",
  "Developed finance and investment banking career interest",
  "Built technical skills in Excel, R, valuation, and research",
  "Continuing to grow through internships, projects, and networking",
];

export const floatingTopics = ["DCF", "Valuation", "Market Research", "Economics", "R / Excel", "Global Markets"];
