import { useState, useEffect } from 'react';

interface MousePosition {
    x: number;
    y: number;
}

export function useMousePosition(): MousePosition {
    // 1. Memoria (Estado) que guarda la posición X y Y actual (empieza en 0, 0)
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        // 2. Función que lee las coordenadas exactas del cursor en la ventana
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        // 3. Escuchamos el evento 'mousemove' en toda la ventana del navegador
        window.addEventListener('mousemove', updateMousePosition);

        // 4. Limpieza de seguridad: apaga el sensor si el componente se cierra
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
}