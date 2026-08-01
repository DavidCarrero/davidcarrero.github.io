export const site = {
  name: "David Carrero",
  fullName: "David Andrés Carrero Tinoco",
  role: "Software Architect & Full Stack Developer",
  tagline:
    "I design event-driven architectures and build end-to-end products for healthcare, education, and professional communities.",
  email: "david.carrero.dev@outlook.com",
  linkedin: "https://www.linkedin.com/in/davidandrescarrero/",
  github: "https://github.com/DavidCarrero",
  certs: [
    "Oracle Cloud Infrastructure Architect Associate (2026)",
    "ISO 27001:2022 Internal Auditor",
  ],
};

export const about = {
  paragraphs: [
    "I'm a Systems and Computing Engineer passionate about technology, with 3+ years of experience building software for the healthcare, education, and professional-association sectors.",
    "I work across the whole stack — REST APIs and microservices with NestJS and ASP.NET Core, frontends with React and Next.js, and event-driven architectures on Apache Kafka — applying Hexagonal Architecture, DDD, and SOLID principles.",
    "On the platform side, I provision cloud infrastructure with Terraform on OCI and Azure, containerize with Docker and Kubernetes, and automate delivery with CI/CD pipelines.",
  ],
};

export const experience = [
  {
    role: "Applications & Integrations Architect",
    company: "Universidad Tecnológica de Bolívar — DTIC",
    period: "02/2026 — Present",
    points: [
      "Designed event-driven architectures with Apache Kafka (OCI Streaming) and OCI Queue, processing ~50K ERP events/month with resilience patterns.",
      "Provisioned OCI and Azure infrastructure with Terraform — deployment time went from ~3 hours to ~20 minutes.",
      "Built pub/sub messaging on Apache Kafka and enterprise integrations with Banner ERP, HubSpot CRM, and Microsoft Graph API over REST, SOAP, and DB adapters.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Zenoex — client: Colombian Computing Society (SCo2)",
    period: "06/2026 — 07/2026",
    points: [
      "Built the membership management API with NestJS, TypeORM, and PostgreSQL 16 under hexagonal architecture.",
      "Developed payments, QR-code tickets, events, and audit modules; payment gateway checkout behind a multi-gateway domain port.",
      "Continuous deployment to a production VM with GitHub Actions, Docker Hub, and SSH, served over HTTPS via Caddy.",
    ],
  },
  {
    role: "IT Developer — Integration & APIs",
    company: "Universidad Tecnológica de Bolívar — DTIC",
    period: "06/2025 — 01/2026",
    points: [
      "Developed APIs and integrations with Oracle ORDS/PL-SQL and NestJS.",
      "Refactored 15+ legacy integration flows with EIP patterns — cutting incidents by 70%.",
    ],
  },
  {
    role: "Full Stack Developer — Healthcare",
    company: "Innovations Analytics",
    period: "10/2023 — 01/2026",
    points: [
      "Built a home-healthcare platform connecting patients, corporate clients, and care staff — from service request to PDF quote and contract.",
      "ASP.NET Core 9 + NestJS + React; JWT/RBAC security with tablet digital signature — approved on the first security review.",
      "Bulk Excel ingestion pipeline handling 50,000+ records per batch, with validation and automatic rollback.",
    ],
  },
  {
    role: "Backend Developer",
    company: "IncubApp",
    period: "01/2024 — 01/2025",
    points: [
      "Backend services with NestJS and high-performance search with Elasticsearch — 60% latency reduction.",
    ],
  },
];

export const projects = [
  {
    title: "Event-Driven Integration Layer",
    description:
      "Pub/sub architecture on Apache Kafka (OCI Streaming) and OCI Queue processing ~50K ERP events/month, with Claim-Check, Idempotent Receiver, Circuit Breaker, Saga, and Retry with exponential backoff.",
    stack: ["Apache Kafka", "OCI", "Terraform", "NestJS"],
    link: null,
  },
  {
    title: "SCo2 Membership API",
    description:
      "Membership platform for the Colombian Computing Society: payments, QR-code tickets, events, global audit log, email verification, and rate limiting — deployed to production via GitHub Actions.",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "Docker", "Caddy"],
    link: "https://api.sco2.org/docs",
  },
  {
    title: "Home-Healthcare Platform",
    description:
      "Full-stack platform managing service requests, approvals, PDF quotes, and contracts with tariff details for patients, corporate clients, and care staff.",
    stack: ["ASP.NET Core 9", "NestJS", "React", "PostgreSQL", "SignalR"],
    link: null,
  },
  {
    title: "ERP Services on Kubernetes",
    description:
      "Containerized institutional ERP services and ran them on a Kubernetes (k3s) cluster with autoscaling (HPA) and sticky-session load balancing, with CI/CD pipelines pushing images to a private registry.",
    stack: ["Kubernetes", "Docker", "Jenkins", "OCI"],
    link: null,
  },
  {
    title: "LMS High-Availability Platform",
    description:
      "High-availability learning platform lab: load balancing, autoscaling, and infrastructure as code.",
    stack: ["Terraform", "OCI", "Docker"],
    link: "https://github.com/DavidCarrero/lms-ha-platform",
  },
  {
    title: "Cromia",
    description:
      "Objective skin-tone measurement (ITA over CIELAB) using computer vision — measures physical pigmentation.",
    stack: ["Python", "OpenCV", "Computer Vision"],
    link: "https://github.com/DavidCarrero/cromia",
  },
];

export const skills = [
  { group: "Backend", items: ["NestJS", "Node.js", "TypeScript", "ASP.NET Core", "C#", "REST APIs", "GraphQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux/Zustand", "React Query"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Oracle DB / PL-SQL", "Redis", "Elasticsearch"] },
  { group: "Messaging", items: ["Apache Kafka", "OCI Streaming", "OCI Queue", "EIP Patterns"] },
  { group: "Cloud & DevOps", items: ["OCI", "Azure", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Azure DevOps"] },
  { group: "Security", items: ["OAuth 2.0", "OIDC", "JWT", "RBAC", "OCI Vault", "ISO 27001"] },
];
