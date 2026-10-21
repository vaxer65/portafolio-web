import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio.types';
import { cn } from '../../utils/cn';

interface BentoCardProps {
    project: ProjectItem;
}

export function BentoCard({ project }: BentoCardProps) {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <article
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                'group relative flex flex-col justify-between overflow-hidden rounded-2xl',
                'border border-white/[0.07] bg-zinc-900/30 p-6 backdrop-blur-sm',
                'transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-white/[0.15] hover:bg-zinc-900/50',
                project.span === 'wide' ? 'md:col-span-2' : 'md:col-span-1'
            )}
        >
            {/* EFECTO SPOTLIGHT INTERNO */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.08), transparent 70%)`,
                }}
            />

            {/* CABECERA DE LA TARJETA */}
            <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300 transition-colors group-hover:border-white/20 group-hover:text-white">
                        <FolderGit2 className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
                        {project.subtitle}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="shrink-0 whitespace-nowrap rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                        {project.status}
                    </span>

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                            title="Ver código en GitHub"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    )}

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                            title="Abrir Demo"
                        >
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                        </a>
                    )}
                </div>
            </div>

            {/* CUERPO DE LA TARJETA */}
            <div className="relative z-10 my-6 space-y-2">
                <Link to={`/proyecto/${project.id}`} className="inline-block">
                    <h3 className="flex items-center gap-1.5 text-lg font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-emerald-400">
                        {project.title}
                        <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-300 group-hover:opacity-100" />
                    </h3>
                </Link>
                <p className="text-sm leading-relaxed text-zinc-400">
                    {project.description}
                </p>
            </div>

            {/* PIE DE LA TARJETA */}
            <div className="relative z-10 flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-zinc-300 transition-colors group-hover:bg-white/[0.08]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}