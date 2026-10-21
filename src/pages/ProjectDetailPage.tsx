import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects.data';

export function ProjectDetailPage() {
    // 1. Capturamos el ID que viene en la URL (/proyecto/:id)
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // 2. Buscamos el proyecto correspondiente en nuestra capa de datos
    const project = PROJECTS_DATA.find((p) => p.id === id);

    // Si alguien escribe un ID que no existe en la URL:
    if (!project) {
        return (
            <div className="space-y-4 py-20 text-center">
                <h2 className="text-2xl font-semibold text-zinc-100">Proyecto no encontrado</h2>
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:underline">
                    <ArrowLeft className="h-4 w-4" /> Volver al inicio
                </Link>
            </div>
        );
    }

    return (
        <article className="space-y-12">
            {/* Botón de regreso con micro-interacción */}
            <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Volver al portafolio
            </Link>

            {/* Cabecera Técnica del Proyecto */}
            <header className="space-y-4 border-b border-white/[0.08] pb-8">
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                        {project.subtitle}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-xs text-zinc-300">
                        {project.status}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-100">
                    {project.title}
                </h1>

                <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
                    {project.description}
                </p>

                {/* Botones de Acción (Repositorio y Demo) */}
                <div className="flex flex-wrap gap-3 pt-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-zinc-200"
                        >
                            <Code2 className="h-4 w-4" />
                            Ver Código en GitHub
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-200 transition hover:bg-white/[0.08]"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Abrir Demo en Vivo
                        </a>
                    )}
                </div>
            </header>

            {/* Bloques Bento de Especificación Técnica */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="md:col-span-2 rounded-2xl border border-white/[0.07] bg-zinc-900/30 p-6 space-y-6">
                    <div className="space-y-3">
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-200 uppercase tracking-wider">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                            Arquitectura y Enfoque Técnico
                        </h3>
                        <p className="text-sm leading-relaxed text-zinc-400">
                            {project.architecture}
                        </p>
                    </div>

                    <div className="space-y-3 border-t border-white/[0.06] pt-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                            Características de Ingeniería Implementadas
                        </h4>
                        <ul className="space-y-2.5">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-zinc-900/30 p-6 space-y-4 h-fit">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-200 uppercase tracking-wider">
                        <Cpu className="h-4 w-4 text-emerald-400" />
                        Tecnologías Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}