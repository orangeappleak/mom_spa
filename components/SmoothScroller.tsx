"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1.5,       // how long it takes to catch up
      effects: true,     // enables data-speed parallax attributes
      normalizeScroll: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        {children}
      </div>
    </div>
  );
}