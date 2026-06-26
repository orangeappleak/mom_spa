"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Two RAFs: let the new page mount AND paint before we measure/rebind,
        // otherwise the [data-speed] nodes may not exist yet.
        const raf = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const smoother = ScrollSmoother.get();

                if (smoother) {
                    // Re-bind parallax to THIS page's data-speed/data-lag nodes —
                    // the previous page's nodes unmounted during navigation, so the
                    // smoother's old effect bindings point at dead elements.
                    smoother.effects("[data-speed], [data-lag]", {});
                    smoother.scrollTo(0, false);
                } else {
                    // Safari / touch: ScrollSmoother is skipped, so parallax is off
                    // anyway here. Just reset native scroll.
                    window.scrollTo(0, 0);
                }

                // Recalculate all ScrollTrigger positions for the new layout.
                // Runs in both branches since ScrollTrigger animations stay active
                // on Safari even when ScrollSmoother is disabled.
                ScrollTrigger.refresh();
            });
        });

        return () => cancelAnimationFrame(raf);
    }, [pathname]);

    return null;
}