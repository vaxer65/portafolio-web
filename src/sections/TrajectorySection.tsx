import { Briefcase, Award } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/experience.data';

export function TrajectorySection() {
    return (
        <section className="space-y-8">
            {/* Cabecera de la sección */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2.5">
                    <Briefcase className="h-4 w-4 text-zinc-400" />
                    <h2 className="text-sm font-medium tracking-wider text-zinc-300 uppercase">
                        Trayectoria, Investigación & Liderazgo
                    </h2>
                </div>
                <span className="text-xs text-zinc-500">Experiencia comprobada</span>
            </div>

            {/* Lista estructurada estilo Linear / Emil Kowalski */}
            <div className="grid grid-cols-1 gap-4">
                {EXPERIENCE_DATA.map((item) => (
                    <div
                        key={item.id}
                        className="group relative flex flex-col justify-between gap-4 rounded-2xl border border-white/[0.06] bg-zinc-900/20 p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-zinc-900/40 md:flex-row md:items-start"
                    >
                        <div className="space-y-2 md:max-w-2xl">
                            <div className="flex flex-wrap items-center gap-2.5">
                                <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white">
                                    {item.role}
                                </h3>
                                <span className="text-zinc-600">•</span>
                                <span className="text-sm font-medium text-emerald-400/90">
                                    {item.organization}
                                </span>
                            </div>

                            <p className="text-sm leading-relaxed text-zinc-400">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {item.highlights.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Columna derecha: Fecha y Tipo */}
                        <div className="flex shrink-0 items-center gap-2 md:flex-col md:items-end">
                            <span className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-0.5 text-[11px] font-medium text-zinc-300">
                                <Award className="h-3 w-3 text-emerald-400" />
                                {item.type}
                            </span>
                            <span className="text-xs font-mono text-zinc-500">
                                {item.period}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}