import { CertificationsSection } from '../sections/CertificationsSection';
import { useState } from 'react';
import { BentoGrid } from '../components/bento/BentoGrid';
import { BentoCard } from '../components/bento/BentoCard';
import { PROJECTS_DATA } from '../data/projects.data';
import { TrajectorySection } from '../sections/TrajectorySection';
import { TECH_STACK } from '../data/stack.data';
import type { ProjectCategory } from '../types/portfolio.types';
import { Terminal, Cpu, Layers } from 'lucide-react';

type FilterType = 'all' | ProjectCategory;

export function HomePage() {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filteredProjects = activeFilter === 'all'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((p) => p.category === activeFilter);

    const categories: { label: string; value: FilterType }[] = [
        { label: 'Todos', value: 'all' },
        { label: 'Móvil', value: 'mobile' },
        { label: 'IA & Agentes', value: 'ai' },
        { label: 'Web', value: 'web' },
        { label: 'Simulación', value: 'simulation' },
    ];

    return (
        <div className="space-y-20">
            {/* SECCIÓN 1: Presentación (Hero Principal) */}
            <header className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Disponible para proyectos · Ingeniería de Software
                </div>

                <div className="space-y-3">
                    {/* Insignia estilo VEX Core */}
                    <div className="inline-flex items-center gap-3 font-mono text-xs text-[#00ff9d]">
                        <span className="rounded border border-[#00ff9d]/40 bg-[#00ff9d]/10 px-2 py-0.5 font-bold tracking-widest shadow-[2px_2px_0px_rgba(0,255,157,0.4)]">
                            V.V
                        </span>
                        <span className="text-zinc-500">System Core · Zero-Trust Architecture</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-100">
                        Valentín Valle
                    </h1>
                    <p className="text-lg font-medium text-zinc-400">
                        Ingeniería de Software · Desarrollador Fullstack & Móvil
                    </p>
                </div>

                <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
                    Apasionado por la arquitectura limpia, el desarrollo nativo en Android y la
                    creación de ecosistemas de software robustos. Combino lógica de sistemas,
                    rendimiento y diseño de interfaces de alta precisión.
                </p>

                <div className="pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">
                        <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                        Stack Tecnológico Principal
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {TECH_STACK.slice(0, 6).map((tech) => (
                            <span
                                key={tech.name}
                                className="rounded-lg border border-white/[0.06] bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            {/* SECCIÓN 2: Bento Grid de Proyectos con Filtros */}
            <section className="space-y-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-2.5">
                        <Layers className="h-4 w-4 text-zinc-400" />
                        <h2 className="text-sm font-medium tracking-wider text-zinc-300 uppercase">
                            Proyectos Seleccionados
                        </h2>
                        <span className="rounded-full bg-white/[0.04] px-2 py-0.5 text-xs text-zinc-500">
                            {filteredProjects.length}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 bg-zinc-900/40 p-1 rounded-xl border border-white/[0.06]">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setActiveFilter(cat.value)}
                                className={`rounded-lg px-3 py-1 text-xs font-medium transition-all duration-300 ${activeFilter === cat.value
                                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredProjects.length > 0 ? (
                    <BentoGrid>
                        {filteredProjects.map((project) => (
                            <BentoCard key={project.id} project={project} />
                        ))}
                    </BentoGrid>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08] p-12 text-center">
                        <Terminal className="h-8 w-8 text-zinc-600 mb-3" />
                        <p className="text-sm text-zinc-400">No hay proyectos en esta categoría por el momento.</p>
                    </div>
                )}
            </section>

            {/* SECCIÓN 3: Trayectoria Profesional */}
            <TrajectorySection />

            {/* SECCIÓN 4: Cursos y Certificados */}
            <CertificationsSection />
        </div>
    );
}