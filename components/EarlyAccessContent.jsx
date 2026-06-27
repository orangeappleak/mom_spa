"use client";

import { motion } from "framer-motion";
import WaitlistForm from "@/components/WaitlistForm";
import { useEffect } from "react";

// Parent orchestrates timing; children just declare their own start/end.
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function EarlyAccessContent() {

    // inside the component, before the return:
    useEffect(() => {
        // No intro animation gates this page, so release any global scroll lock
        // immediately on mount (same failsafe pattern as the About hero).
        window.dispatchEvent(new Event("intro-complete"));
    }, []);

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full"
        >
            {/* Eyebrow */}
            <motion.span
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70 backdrop-blur-md"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                Early access · TestFlight
            </motion.span>

            {/* Headline */}
            <motion.h1
                variants={item}
                className="mt-8 text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight"
            >
                Be first to
                <br />
                build momentum.
            </motion.h1>

            {/* Subtext */}
            <motion.p
                variants={item}
                className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl"
            >
                Join the waitlist and we&apos;ll send your TestFlight invite — plus an
                early-access promo code as a thanks for being here early.
            </motion.p>

            {/* Form */}
            <motion.div variants={item} className="mt-10 w-full max-w-md">
                <WaitlistForm />
            </motion.div>

            {/* Reassurance line */}
            <motion.p variants={item} className="mt-6 text-sm text-white/40">
                No spam. One email when it&apos;s your turn. Unsubscribe anytime.
            </motion.p>
        </motion.div>
    );
}