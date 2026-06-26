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
    const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isTouchDevice = hasTouchSupport && isCoarsePointer;

    // Detect Safari (including iOS Safari/Chrome-on-iOS, which is WebKit too,
    // and desktop Safari). Excludes Chrome/Edge/etc, which include "Safari"
    // in their UA string but also include "Chrome" or "CriOS"/"Chromium".
    const ua = navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua) || /CriOS|FxiOS/i.test(ua);

    const shouldSkipSmoother = isTouchDevice || isSafari;

    document.body.style.overflow = 'hidden';

    if (shouldSkipSmoother) {
      wrapper.current?.classList.add('is-touch-device');
      ScrollTrigger.refresh();

      const handleUnlock = () => {
        document.body.style.overflow = '';
      };
      window.addEventListener('intro-complete', handleUnlock);

      return () => {
        window.removeEventListener('intro-complete', handleUnlock);
        document.body.style.overflow = '';
      };
    }

    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current!,
      content: content.current!,
      smooth: 1.5,
      effects: true,
    });

    smoother.paused(true);

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