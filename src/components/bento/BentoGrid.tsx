import type { ReactNode } from 'react';

interface BentoGridProps {
    children: ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {children}
        </div>
    );
}