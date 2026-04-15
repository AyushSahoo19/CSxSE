export interface TechStack {
  id: string;
  slug: string;
  title: string;
  name: string;
  tools: string[];
  useCase: string;
  when: string;
  color: string;
  description: string;
  learningPath: string[];
}

export const TECH_STACKS: TechStack[] = [
  {
    id: "01",
    slug: "modern-fullstack-web",
    title: "Modern Full-Stack Web",
    name: "The T3 Stack",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    useCase: "Data-heavy SaaS, high-performance dashboards, and content-rich platforms.",
    when: "When you need type-safety from DB to UI and the fastest possible iteration speed.",
    color: "#0ea5e9",
    description: "The T3 Stack is a focused, opinionated approach to full-stack web development. It emphasizes end-to-end type safety, allowing developers to catch errors in the UI that originated in the database schema.",
    learningPath: [
      "Master TypeScript fundamentals",
      "Understand Next.js App Router and Server Components",
      "Learn Orms with Prisma",
      "Adopt utility-first CSS with Tailwind",
      "Deploy on Vercel or Railway"
    ]
  },
  {
    id: "02",
    slug: "realtime-high-scale",
    title: "Real-time & High-Scale",
    name: "The Distributed Core",
    tools: ["Go / Elixir", "Redis", "Kafka", "gRPC", "Kubernetes"],
    useCase: "Chat applications, live stock tickers, and high-throughput microservices.",
    when: "When low-latency, concurrent connections, and extreme horizontal scale are the priority.",
    color: "#10b981",
    description: "Built for massive throughput and low-latency interaction. This stack utilizes the BEAM VM (Elixir) or Go's lightweight concurrency to handle millions of simultaneous connections.",
    learningPath: [
      "Learn Go Goroutines or Elixir Processes",
      "Understand Pub/Sub patterns with Redis",
      "Implement event-driven architecture with Kafka",
      "Master container orchestration with Kubernetes"
    ]
  },
  {
    id: "03",
    slug: "ai-data-engineering",
    title: "AI & Data Engineering",
    name: "The Intelligence Engine",
    tools: ["Python", "PyTorch / TensorFlow", "FastAPI", "Snowflake", "Ray"],
    useCase: "Large Language Model (LLM) apps, computer vision, and predictive analytics.",
    when: "When your product relies on complex mathematical computing and massive data processing.",
    color: "#8b5cf6",
    description: "A data-first architecture designed to move training and inference workloads from localized scripts to production-grade distributed systems.",
    learningPath: [
      "Advanced Python for Data Science",
      "Deep Learning fundamentals with PyTorch",
      "Asynchronous API development with FastAPI",
      "Cloud data warehousing with Snowflake",
      "Distributed compute with Ray"
    ]
  },
  {
    id: "04",
    slug: "enterprise-systems",
    title: "Enterprise Systems",
    name: "The Mission Critical",
    tools: ["Java (Spring Boot)", "Hibernate", "Oracle DB", "Azure/AWS", "RabbitMQ"],
    useCase: "Banking systems, healthcare records, and global logistics ERPs.",
    when: "When reliability, observability, and long-term maintainability for large teams are paramount.",
    color: "#f43f5e",
    description: "The gold standard for systems that simply cannot go down. This stack focuses on strong contracts, rigorous testing, and enterprise-grade security standards.",
    learningPath: [
      "Deep dive into Java & Spring Boot ecosystem",
      "Master JPA patterns with Hibernate",
      "Enterprise messaging with RabbitMQ",
      "Compliance and Identity management on Cloud"
    ]
  }
];
