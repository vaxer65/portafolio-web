import { ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/certifications.data';

export function CertificationsSection() {
    return (
        <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <h2 className="text-sm font-medium tracking-wider text-zinc-300 uppercase">
                        Certificaciones & Formación Continua
                    </h2>
                </div>
                <span className="text-xs text-zinc-500">Verificables</span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {CERTIFICATIONS_DATA.map((cert) => (
                    <div
                        key={cert.id}
                        className="group flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-zinc-900/25 p-6 transition-all duration-300 hover:border-white/[0.15] hover:bg-zinc-900/45"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                                    <CheckCircle2 className="h-3 w-3" />
                                    {cert.status}
                                </span>
                                <span className="text-xs font-mono text-zinc-500">{cert.date}</span>
                            </div>

                            <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white">
                                {cert.title}
                            </h3>

                            <p className="text-xs font-medium text-zinc-400">
                                {cert.institution}
                            </p>

                            <p className="text-sm leading-relaxed text-zinc-400 pt-1">
                                {cert.details}
                            </p>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-white/[0.05] pt-3">
                            <span className="text-[11px] font-mono text-zinc-500">
                                {cert.badgeText}
                            </span>

                            {cert.verifyUrl && (
                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 transition-colors hover:text-emerald-400"
                                >
                                    Verificar CSV
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}