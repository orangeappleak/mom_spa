"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Shared layout for the Terms and Privacy pages.
 *
 * Matches the site style: black background, font-google-sans headings,
 * a centered reading column, a slight Framer Motion fade-in (same easing
 * as the About hero), top padding to clear the fixed Navbar, and
 * pb-32 sm:pb-40 to clear the absolute-positioned Footer.
 *
 * Body elements are styled via descendant variants so the page content
 * can stay as clean semantic JSX (no Tailwind typography plugin needed).
 */
export default function LegalPage({ title, lastUpdated, children }) {
  useEffect(() => {
    // SmoothScroll locks document.body scroll on mount and only releases it
    // when an "intro-complete" event fires. These legal pages have no intro
    // animation to fire it (same root cause as the About-page reload
    // scroll-lock).
    //
    // Why the double rAF: React runs child effects BEFORE parent effects, so a
    // synchronous dispatch here fires before SmoothScroll (an ancestor) has
    // attached its listener and applied the lock — the event is missed and the
    // lock never releases. Deferring two frames pushes the dispatch past the
    // mount-effect phase, by which point the listener exists. Fired on both
    // window and document so it lands regardless of which SmoothScroll uses.
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        window.dispatchEvent(new Event("intro-complete"));
        document.dispatchEvent(
          new Event("intro-complete", { bubbles: true })
        );
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white">
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-3xl px-6 pt-28 pb-32 sm:pt-36 sm:pb-40"
      >
        <h1 className="font-google-sans text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>

        {lastUpdated && (
          <p className="mt-3 text-sm text-gray-500">{lastUpdated}</p>
        )}

        <div className="mt-10 h-px w-full bg-white/10" />

        <div
          className="
            mt-10 space-y-6 text-[15px] leading-relaxed text-gray-400
            [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-google-sans [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white
            [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-gray-200
            [&_p]:text-gray-400
            [&_strong]:font-semibold [&_strong]:text-gray-200
            [&_a]:text-white [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gray-300
            [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-gray-600
            [&_li]:text-gray-400
            [&_li_strong]:text-gray-200
            [&_.table-wrap]:overflow-x-auto
            [&_table]:w-full [&_table]:min-w-[480px] [&_table]:border-collapse [&_table]:text-sm
            [&_th]:border-b [&_th]:border-white/10 [&_th]:px-3 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-gray-200
            [&_td]:border-b [&_td]:border-white/5 [&_td]:px-3 [&_td]:py-3 [&_td]:align-top [&_td]:text-gray-400
          "
        >
          {children}
        </div>
      </motion.article>
    </main>
  );
}