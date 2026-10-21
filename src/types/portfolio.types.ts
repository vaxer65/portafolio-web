export type ProjectCategory = 'mobile' | 'web' | 'backend' | 'simulation' | 'ai';
export type ProjectStatus = 'Producción' | 'Completado' | 'En desarrollo';
export type BentoSpan = 'normal' | 'wide';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architecture: string;     // Explicación de la arquitectura de este proyecto
  features: string[];       // Lista de logros técnicos / módulos clave
  category: ProjectCategory;
  status: ProjectStatus;
  tags: string[];
  span: BentoSpan;
  githubUrl?: string;
  liveUrl?: string;
  hasDetailedView?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Prácticas' | 'Investigación' | 'Liderazgo';
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  date: string;
  status: 'Completado' | 'Matriculado / En curso';
  details: string;
  verifyUrl?: string;
  badgeText: string;
}