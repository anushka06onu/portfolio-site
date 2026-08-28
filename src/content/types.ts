export type ProjectStatus = "complete" | "prototype" | "ongoing";

export interface EvidenceItem {
  label: string;
  value: string;
  detail?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export interface ProjectCaseStudy {
  problem: string;
  context: string;
  role: string;
  architecture: {
    overview: string;
    highlights: string[];
    diagramAlt?: string;
  };
  decisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  methodology: string;
  evaluation: {
    metrics: string[];
    summary: string;
  };
  results: string[];
  limitations: string[];
  learnings: string[];
  statusNote: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryTrack: string;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  whyItMatters: string;
  myContribution: string;
  evidence: string[];
  technologies: string[];
  links: {
    caseStudy: string;
    demo?: string;
    github?: string;
    methodology?: string;
  };
  featured: boolean;
  order: number;
  caseStudy?: ProjectCaseStudy;
}

export interface AdditionalProject {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  highlights: string[];
}

export type ResearchStatus =
  | "Ongoing"
  | "Manuscript in preparation"
  | "Submitted"
  | "Under review"
  | "Accepted"
  | "Published";

export interface ResearchOutput {
  title: string;
  venueOrType: string;
  role: string;
  status: ResearchStatus;
  statusNote?: string;
  year: string;
  summary: string;
  topics: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export interface ExperienceRole {
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "Research" | "Engineering" | "Leadership" | "Teaching";
  bullets: string[];
  technologies?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  distinction?: string;
  notes: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}
