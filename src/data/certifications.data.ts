import type { CertificationItem } from '../types/portfolio.types';

export const CERTIFICATIONS_DATA: CertificationItem[] = [
    {
        id: 'unir-cybersecurity',
        title: 'Curso en Ciberseguridad para Entornos Universitarios',
        institution: 'Universidad Internacional de La Rioja (UNIR) · España',
        date: 'Nov 2026 – Feb 2027',
        status: 'Matriculado / En curso',
        badgeText: '6 ECTS · CSV: 077-9ccad01c7bd6808efefaed3ad2ed57a6-001',
        details:
            'Formación internacional especializada en seguridad informática, protección de infraestructuras académicas y mitigación de vulnerabilidades.',
        verifyUrl: '/certificados/unir-ciberseguridad.pdf',
    },
    {
        id: 'pypizza-guaranda-2026',
        title: 'PyPizza Guaranda 2026 · Comunidad Python Ecuador',
        institution: 'Python Ecuador (PyGDA)',
        date: '30 de mayo de 2026',
        status: 'Completado',
        badgeText: 'Certificado de Participación Técnica',
        details:
            'Participación activa en el encuentro de desarrollo, aprendizaje e intercambio de conocimientos tecnológicos en torno al ecosistema Python en Guaranda, Ecuador.',
        verifyUrl: '/certificados/pypizza-2026.jpg',
    },
];