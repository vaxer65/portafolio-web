export type ProjectCategory = 'mobile' | 'web' | 'backend' | 'simulation';
export type ProjectStatus = 'Producción' | 'Completado' | 'En desarrollo';
export type BentoSpan = 'normal' | 'wide'; // 'normal' = 1 caja, 'wide' = 2 cajas de ancho

export interface ProjectItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    category: ProjectCategory;
    status: ProjectStatus;
    tags: string[];
    span: BentoSpan;
    githubUrl?: string;       // Opcional (?) por si aún no lo subes a GitHub
    liveUrl?: string;         // Opcional (?) por si es local
    hasDetailedView?: boolean; // Si es true, abrirá su propia página interna
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