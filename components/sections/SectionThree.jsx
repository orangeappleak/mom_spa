"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import ScrollSmoother from "gsap/ScrollSmoother";

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
};

const previewChanges = [
    "Build habits with streaks, custom schedules, and check-in windows",
    "Earn XP, level up, and unlock collectible achievement badges",
    "Lock in commitments from 7 to 100 days with real stakes",
    "See your habit personality on an interactive stats radar",
    "Log how each habit felt with a quick mood check-in",
];

const fullChanges = [
    "Build habits with custom emoji, color, and flexible schedules",
    "Hold-to-check-in with haptic feedback and a quick-undo window",
    "Set check-in windows for time-sensitive habits, with midnight-crossing support",
    "Track current streak, longest streak, and total completions per habit",
    "Group habits into routines",
    "Keep habits private or share progress with friends",
    "Earn XP and level up as you stay consistent",
    "Lock in commitments from 7 to 100 days, with streaks preserved on completion",
    "Unlock collectible kawaii achievement badges across levels, streaks, commitments, and milestones",
    "Celebrate unlocks with a full badge-award screen",
    "Discover your habit personality on an interactive stats radar",
    "View completion-rate breakdowns across 7-day, 30-day, and all-time",
    "See a weekly check-in history calendar per habit",
    "Track a 7-day mood summary with your most common feeling",
    "Log how each habit felt with an optional mood check-in",
    "Turn mood tracking on or off per habit to keep check-ins fast",
    "Add friends and follow each other's public habit progress",
    "Redesigned home filter as a single menu with smooth transitions",
    "Time-of-day gradient backgrounds across the app",
    "Per-habit color theming carried into the detail view",
    "Lighter, faster scrolling with a cleaner card style",
];

function SectionThree() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const smoother = ScrollSmoother.get();
            if (smoother) smoother.paused(true);
            document.body.style.overflow = "hidden";
        } else {
            const smoother = ScrollSmoother.get();
            if (smoother) smoother.paused(false);
            document.body.style.overflow = "";
        }

        return () => {
            const smoother = ScrollSmoother.get();
            if (smoother) smoother.paused(false);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative h-auto z-40 overflow-hidden flex flex-col gap-2 bg-black font-google-sans py-20 sm:py-36">
            <div className="min-h-[15vh] sm:min-h-[20vh] flex flex-col text-white justify-center gap-3 sm:gap-5 items-center px-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-google-sans text-center font-black">
                    What's new
                </h1>
                <p className="font-google-sans text-gray-700/80 font-bold text-base sm:text-2xl text-center">
                    Here's what we've been building.
                </p>
            </div>

            <div className="px-4 sm:px-12 pb-12">
                <motion.div
                    onClick={() => setIsOpen(true)}
                    className="bg-[#1B2128] rounded-[40px] sm:rounded-[80px] flex flex-col px-6 sm:px-16 py-8 sm:py-16 relative overflow-hidden max-w-5xl mx-auto cursor-pointer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-between mb-6 sm:mb-10">
                        <h2 className="text-2xl sm:text-5xl font-black text-white">v1.0</h2>
                        <span className="text-white/40 text-sm sm:text-lg font-medium">Latest release</span>
                    </div>

                    <ul className="flex flex-col gap-3 sm:gap-5">
                        {previewChanges.map((change, i) => (
                            <li key={i} className="flex items-start gap-3 sm:gap-4">
                                <span className="text-white/30 text-base sm:text-xl mt-1">—</span>
                                <span className="text-base sm:text-xl text-white/80">{change}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(true);
                        }}
                        className="mt-6 sm:mt-10 text-white/60 hover:text-white text-base sm:text-lg font-medium underline self-start transition-colors"
                    >
                        View full changelog
                    </button>
                </motion.div>
            </div>

            {mounted &&
                createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <>
                                <motion.div
                                    className="fixed inset-0 bg-black/70 z-[100]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setIsOpen(false)}
                                />

                                <motion.div
                                    className="fixed bottom-0 left-0 w-full max-h-[88vh] sm:max-h-[85vh] bg-[#1B2128] rounded-t-[32px] sm:rounded-t-[60px] z-[101] px-5 sm:px-12 py-6 sm:py-12 overflow-y-auto"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "100%" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 35 }}
                                >
                                    <div className="max-w-4xl mx-auto">
                                        <div className="flex items-center justify-between mb-6 sm:mb-10">
                                            <h2 className="text-2xl sm:text-5xl font-black text-white pr-4">v1.0 — Full changelog</h2>
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="text-white/50 hover:text-white text-xl sm:text-2xl px-3 sm:px-4 py-2 rounded-full transition-colors shrink-0"
                                            >
                                                ✕
                                            </button>
                                        </div>

                                        <ul className="flex flex-col gap-3 sm:gap-5">
                                            {fullChanges.map((change, i) => (
                                                <li key={i} className="flex items-start gap-3 sm:gap-4">
                                                    <span className="text-white/30 text-base sm:text-xl mt-1">—</span>
                                                    <span className="text-base sm:text-xl text-white/80">{change}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </div>
    );
}

export default SectionThree;