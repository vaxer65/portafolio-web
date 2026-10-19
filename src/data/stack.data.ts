export interface TechItem {
    name: string;
    category: 'Mobile' | 'Backend' | 'Frontend' | 'DevOps & Tools';
    level: string;
}

export const TECH_STACK: TechItem[] = [
    { name: 'Kotlin & Jetpack Compose', category: 'Mobile', level: 'Avanzado' },
    { name: 'Flutter & Dart', category: 'Mobile', level: 'Intermedio / Avanzado' },
    { name: 'Laravel (PHP)', category: 'Backend', level: 'Intermedio' },
    { name: 'Node.js & TypeScript', category: 'Backend', level: 'Intermedio' },
    { name: 'React & Vite', category: 'Frontend', level: 'Intermedio' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Avanzado' },
    { name: 'MySQL & Room DB', category: 'Backend', level: 'Avanzado' },
    { name: 'Git, GitHub & Linux (Ubuntu)', category: 'DevOps & Tools', level: 'Avanzado' },
];