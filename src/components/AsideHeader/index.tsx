import { AsideButton } from "./AsideButton"
import { AsideBackground } from "./AsideBackground"
import { AsidePanel } from "./AsidePanel"
import { useState, useEffect } from 'react';

export function AsideHeader() {
    const [isAsideOpen, setIsAsideOpen] = useState(false);
    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 1060) {setIsAsideOpen(false);}
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <AsideButton setIsAsideOpen={setIsAsideOpen} />
            <AsideBackground isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} />
            <AsidePanel isAsideOpen={isAsideOpen} />
        </>
    )
}