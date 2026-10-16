export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  badge: string;
  skills: {
    name: string;
    level: string; // e.g. "Practical Tool", "Applied Knowledge", "Core Capability"
    description: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  status: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: 'Completed' | 'Ongoing' | 'Currently Pursuing';
  year: string;
  description: string;
  skillsGained: string[];
}

export interface WorkshopItem {
  title: string;
  institution: string;
  year: string;
  type: 'Workshop' | 'Seminar';
  description: string;
  keyTopics: string[];
}

export interface ProjectConcept {
  id: string;
  title: string;
  tagline: string;
  status: 'Concept · In Development' | 'Planned Framework';
  objective: string;
  demonstratedSkills: string[];
  plannedOutputs: string[];
  framework: string[];
}

export interface CareerInterest {
  title: string;
  description: string;
  relevance: string;
}
