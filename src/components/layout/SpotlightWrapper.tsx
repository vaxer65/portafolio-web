import type { ReactNode } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { Footer } from './Footer';

interface SpotlightWrapperProps {
    children: ReactNode;
}

export function SpotlightWrapper({ children }: SpotlightWrapperProps) {
    // Conectamos el sensor que creamos en src/hooks/useMousePosition.ts
    const { x, y } = useMousePosition();

    return (
        <div className="relative min-h-screen w-full bg-[#09090b] text-zinc-100 selection:bg-zinc-800">
            {/* CAPA 1: El Halo de Luz dinámico que sigue al cursor (X, Y) */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.045), transparent 80%)`,
                }}
            />

            {/* CAPA 2: Cuadrícula técnica ultra sutil de fondo (Inspiración Taste / Linear) */}
            <div
                className="pointer-events-none fixed inset-0 z-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                }}
            />

            {/* CAPA 3: El contenido real de tu página */}
            <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
                {children}
            </main>

            {/* CAPA 4: Pie de página */}
            <Footer />
        </div>
    );
}