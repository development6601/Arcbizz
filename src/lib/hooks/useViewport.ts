
import { useEffect, useState } from "react";

export function useViewport() {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleResize = () => setIsMobile(window.innerWidth < 768);
        const handleScroll = () => setIsScrolled(window.scrollY > 1);

        // set initial state on mount
        handleResize();
        handleScroll();

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [mounted]);

    return { isMobile, isScrolled, mounted };
}
