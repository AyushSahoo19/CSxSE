export interface LifecyclePhase {
  id: string;
  title: string;
  tagline: string;
  deliverable: string;
  wisdom: string;
  description: string;
  steps: string[];
  mistakes: string[];
  icon: string;
  color: string;
}

export const LIFECYCLE_PHASES: LifecyclePhase[] = [
  {
    id: "01",
    title: "Discovery",
    tagline: "Foundation of Purpose",
    deliverable: "Product PRD",
    wisdom: "A week of planning saves a year of wasted code.",
    description: "Before coding, we identify stakeholders, define constraints, and establish a 'Minimum Viable Problem' worth solving.",
    steps: [
      "User Research & Analysis",
      "Market Gap Identification",
      "Functional Requirements",
      "Technical Feasibility"
    ],
    mistakes: [
      "Building for yourself",
      "Ignoring existing solutions",
      "Vague success metrics"
    ],
    icon: "🔍",
    color: "#6366f1"
  },
  {
    id: "02",
    title: "Architecture",
    tagline: "Skeleton of the System",
    deliverable: "System Design Spec",
    wisdom: "Architecture is the art of decisions that are hard to change later.",
    description: "Mapping internal structure: data models, communication protocols, and infrastructure topology.",
    steps: [
      "Schema Design (ERD)",
      "Service Decomposition",
      "Persistence Selection",
      "IaC Planning"
    ],
    mistakes: [
      "Premature scaling",
      "Shiny Object Syndrome",
      "Tight service coupling"
    ],
    icon: "📐",
    color: "#818cf8"
  },
  {
    id: "03",
    title: "Build",
    tagline: "Craft of Construction",
    deliverable: "Verified Codebase",
    wisdom: "Code is a liability; keep it lean and focused.",
    description: "Iterative implementation cycles, rigorous 'Definition of Done', and CI/CD adherence.",
    steps: [
      "Environment Parity",
      "Sprint Implementation",
      "CI Integration Check",
      "Internal Peer Review"
    ],
    mistakes: [
      "Skipping documentation",
      "Ignoring tech debt",
      "Inconsistent standards"
    ],
    icon: "🔨",
    color: "#a78bfa"
  },
  {
    id: "04",
    title: "Verification",
    tagline: "Barrier to Failure",
    deliverable: "Test Suite & Audit",
    wisdom: "If it's not tested, it is broken by definition.",
    description: "Automated unit, integration, and E2E testing accompanied by security audits.",
    steps: [
      "Automated Test Suites",
      "Staging Validation",
      "Security Pen-Testing",
      "Load & Stress Tests"
    ],
    mistakes: [
      "Manual-only QA",
      "Happy path testing",
      "Ignoring performance"
    ],
    icon: "🛡️",
    color: "#c084fc"
  },
  {
    id: "05",
    title: "Release",
    tagline: "Moment of Truth",
    deliverable: "Live Environment",
    wisdom: "Deployments should be as boring as a bank transaction.",
    description: "Automated promote-to-production pipelines with full observability and rollback strategy.",
    steps: [
      "Canary Deployments",
      "DB Migration Execution",
      "Real-time Monitoring",
      "Incident Runbooks"
    ],
    mistakes: [
      "Manual production edits",
      "No rollback strategy",
      "Blind deployments"
    ],
    icon: "🚀",
    color: "#e879f9"
  },
  {
    id: "06",
    title: "Evolution",
    tagline: "The Long Road",
    deliverable: "Refined Roadmap",
    wisdom: "A system that doesn't evolve is already dead.",
    description: "Responding to feedback, refactoring legacy paths, and managing strategic feature sunsets.",
    steps: [
      "Feedback Integration",
      "Dependency Updates",
      "Strategic Refactoring",
      "Sunset Planning"
    ],
    mistakes: [
      "Ignoring user feedback",
      "Treating it as a 'Project'",
      "Allowing dependency rot"
    ],
    icon: "🔄",
    color: "#fb7185"
  }
];
