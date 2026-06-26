'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current!,
      content: content.current!,
      smooth: 1.5,
      effects: true,
    });

    // Hard lock: prevent any scroll input from registering at all
    smoother.paused(true);
    document.body.style.overflow = 'hidden';

    const handleUnlock = () => {
      smoother.paused(false);
      document.body.style.overflow = '';
    };

    window.addEventListener('intro-complete', handleUnlock);

    return () => {
      window.removeEventListener('intro-complete', handleUnlock);
      document.body.style.overflow = '';
      smoother.kill();
    };
  }, []);

  return (
    <div ref={wrapper} id="smooth-wrapper">
      <div ref={content} id="smooth-content">
        {children}
      </div>
    </div>
  );
}