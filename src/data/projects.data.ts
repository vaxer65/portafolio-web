import type { ProjectItem } from '../types/portfolio.types';

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: 'mercado-local-ec',
        title: 'Mercado Local EC',
        subtitle: 'Aplicación Móvil Nativa Android',
        description:
            'Plataforma móvil orientada a la digitalización del comercio local con persistencia offline, autenticación en la nube, consumo de servicios REST, Realidad Aumentada y generación de reportes PDF.',
        architecture:
            'Diseñada en Android nativo con Kotlin y Jetpack Compose siguiendo una arquitectura desacoplada por capas. Utiliza Room v7 para persistencia local con migraciones estructuradas, Retrofit para comunicación asíncrona con APIs REST y Firebase Auth para control de sesiones seguras.',
        features: [
            'Persistencia de datos local y caché offline mediante Room Database v7.',
            'Autenticación de usuarios y gestión de sesiones con Firebase Auth.',
            'Visualización interactiva de productos en el espacio físico usando ARCore.',
            'Motor integrado de generación y exportación de reportes transaccionales en formato PDF.',
        ],
        category: 'mobile',
        status: 'Completado',
        tags: ['Kotlin', 'Jetpack Compose', 'Room v7', 'Retrofit', 'Firebase Auth', 'ARCore'],
        span: 'wide',
        githubUrl: 'https://github.com/vaxer65/Mercado_Local_EC',
        hasDetailedView: true,
    },
    {
        id: 'vex-autonomous-agent',
        title: 'VEX · Asistente Autónomo Multiagente',
        subtitle: 'IA Híbrida & Arquitectura Hexagonal',
        description:
            'Sistema multiagente autónomo multiplataforma con enrutador inteligente de IA (modelos locales con Ollama y APIs en la nube), indexación semántica Zero-Move y seguridad Zero-Trust.',
        architecture:
            'Estructurado bajo Arquitectura Hexagonal (Puertos y Adaptadores) para aislar el núcleo de negocio de los proveedores de IA y del sistema operativo. Incluye un enrutador híbrido que delega tareas entre LLMs locales (Ollama) y APIs externas garantizando latencia mínima y costo cero.',
        features: [
            'Enrutamiento dinámico multiagente entre ejecución local (Ollama) y modelos en la nube.',
            'Capa de seguridad Zero-Trust con cifrado autenticado AES-256-GCM para credenciales y datos.',
            'Indexador semántico bajo filosofía Zero-Move para catalogar archivos sin alterar rutas físicas.',
            'Diseño multiplataforma compatible con entornos Linux y Windows.',
        ],
        category: 'ai',
        status: 'En desarrollo',
        tags: ['Python', 'Multi-Agent AI', 'Ollama', 'Arquitectura Hexagonal', 'AES-256-GCM'],
        span: 'normal',
        hasDetailedView: true,
    },
    {
        id: 'demand-analysis-tool',
        title: 'Análisis y Proyección de Demanda Comercial',
        subtitle: 'Automatización & Algoritmia',
        description:
            'Herramienta de recolección y análisis de datos de mercado para 35 establecimientos comerciales locales, integrando cálculo algorítmico de tasas de crecimiento (TCA y TCPP).',
        architecture:
            'Pipeline automatizado en Python para procesamiento estadístico de encuestas de mercado y modelado matemático de proyecciones de demanda comercial local.',
        features: [
            'Automatización y validación de muestras para 35 establecimientos comerciales.',
            'Cálculo algorítmico de Tasa de Crecimiento Anual (TCA) y Ponderada (TCPP).',
            'Estructuración de matrices de datos para toma de decisiones en servicios locales.',
        ],
        category: 'simulation',
        status: 'Completado',
        tags: ['Python', 'Análisis de Datos', 'Modelado TCA/TCPP', 'Automatización'],
        span: 'normal',
    },
    {
        id: 'queue-simulator',
        title: 'Software de Simulación de Atención y Filas',
        subtitle: 'Simulación & Sistemas',
        description:
            'Sistema interactivo con interfaces diferenciadas para cajeros y supervisores, permitiendo el análisis de tiempos de espera y detección de cuellos de botella operativos.',
        architecture:
            'Motor de simulación de eventos discretos con separación entre la lógica de colas estocásticas y el panel de control en tiempo real.',
        features: [
            'Panel de supervisor con controles en vivo para apertura y cierre de cajas.',
            'Métricas analíticas de tiempos de espera, atención y saturación del sistema.',
            'Generación de reportes detallados de rendimiento operativo.',
        ],
        category: 'simulation',
        status: 'Completado',
        tags: ['Python', 'JavaScript', 'Algoritmia', 'Simulación Estocástica'],
        span: 'normal',
    },
    {
        id: 'gastronomic-web-platform',
        title: 'Plataforma Web Gastronómica y Comercial',
        subtitle: 'Fullstack MVC & Cloud',
        description:
            'Aplicación web con arquitectura MVC para catálogos comerciales interactivos, diseño de base de datos relacional y maquetación responsiva optimizada para móviles.',
        architecture:
            'Aplicación estructurada bajo el patrón Modelo-Vista-Controlador (MVC) utilizando Laravel y MySQL, con interfaz responsiva de carga rápida desplegada en la nube.',
        features: [
            'Modelado de base de datos relacional en MySQL para gestión de catálogos.',
            'Interfaz adaptativa optimizada para experiencia móvil y escritorio.',
            'Despliegue continuo en entorno cloud (Vercel).',
        ],
        category: 'web',
        status: 'Producción',
        tags: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Vercel'],
        span: 'normal',
    },
];