import type { ProjectItem } from '../types/portfolio.types';

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: 'mercado-local-ec',
        title: 'Mercado Local EC',
        subtitle: 'Aplicación Móvil Nativa',
        description:
            'Plataforma móvil para comercio local con autenticación en la nube, persistencia de datos offline, generación de reportes PDF y realidad aumentada.',
        category: 'mobile',
        status: 'Completado',
        tags: ['Kotlin', 'Jetpack Compose', 'Room v7', 'Firebase Auth', 'ARCore'],
        span: 'wide', // Ocupa 2 columnas por ser proyecto principal
        githubUrl: 'https://github.com',
        hasDetailedView: true,
    },
    {
        id: 'queue-simulator',
        title: 'Simulador de Colas y Atención',
        subtitle: 'Simulación & Algoritmos',
        description:
            'Sistema interactivo de simulación estocástica con lógica de cajeros, controles de supervisor en tiempo real y métricas de rendimiento.',
        category: 'simulation',
        status: 'Completado',
        tags: ['JavaScript', 'Modelado Matemático', 'Reportes', 'UI Interactiva'],
        span: 'normal', // 1 columna
        githubUrl: 'https://github.com',
    },
    {
        id: 'local-trade-tracker',
        title: 'Sistema de Seguimiento Comercial',
        subtitle: 'Fullstack & Mobile',
        description:
            'Arquitectura cliente-servidor para digitalización y seguimiento de pedidos en comercios y restaurantes locales.',
        category: 'backend',
        status: 'En desarrollo',
        tags: ['Laravel', 'Flutter', 'MySQL', 'REST API'],
        span: 'normal', // 1 columna
    },
    {
        id: 'restaurant-landing',
        title: 'Portal Web Gastronómico',
        subtitle: 'Frontend & Despliegue Cloud',
        description:
            'Landing page moderna optimizada para conversión y visualización de catálogo digital con despliegue continuo.',
        category: 'web',
        status: 'Producción',
        tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Vercel'],
        span: 'wide', // Ocupa 2 columnas por ser proyecto principal
        liveUrl: 'https://vercel.com',
        githubUrl: 'https://github.com',
    },
];