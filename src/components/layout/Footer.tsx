import { Mail, FileText, ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="mt-24 border-t border-white/[0.06] pt-10 pb-6 text-sm text-zinc-400">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div className="space-y-1">
                    <p className="font-medium text-zinc-200">Valentín Alexander Valle Sánchez</p>
                    <p className="text-xs text-zinc-500">
                        Ingeniería de Software · Construido con React, TypeScript & Tailwind v4
                    </p>
                </div>

                {/* Enlaces de acción rápida */}
                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href="mailto:valenchus258@gmail.com"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        <Mail className="h-3.5 w-3.5 text-emerald-400" />
                        Contactar por Correo
                    </a>

                    <a
                        href="https://github.com/vaxer65"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        GitHub
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/valentin-valle-8b3550212"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        LinkedIn
                        <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                    </a>

                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-white"
                    >
                        <FileText className="h-3.5 w-3.5" />
                        Descargar CV
                    </a>
                </div>
            </div>
        </footer>
    );
}