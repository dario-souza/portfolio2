export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  cvUrl: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  social: {
    github: string;
    linkedin: string;
  };
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}