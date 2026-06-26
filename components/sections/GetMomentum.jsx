"use client";

import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
    rest: { backgroundColor: "rgba(255,255,255,0.08)", scale: 1 },
    hover: { backgroundColor: "rgba(255,255,255,1)", scale: 1.04 },
};

const textVariants = {
    rest: { color: "rgba(255,255,255,1)" },
    hover: { color: "rgba(0,0,0,1)" },
};

function GetMomentum() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center pb-32 sm:pb-40 justify-center text-white font-google-sans bg-gradient-to-b from-black via-[#0d0d1a] to-[#1a1333]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12"
            >
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight max-w-4xl">
                    Ready when you are.
                </h2>

                <p className="mt-6 text-base sm:text-xl text-white/60 leading-relaxed max-w-2xl">
                    Start with one habit. One day at a time. Momentum meets you where you
                    are and helps you build consistency that actually lasts.
                </p>

                <motion.a
                    href="#"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={buttonVariants}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-10 inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full cursor-pointer border border-white/15 backdrop-blur-md whitespace-nowrap"
                >
                    <motion.span
                        variants={textVariants}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="text-base sm:text-lg font-bold"
                    >
                        Get Momentum
                    </motion.span>
                </motion.a>
            </motion.div>
        </section>
    );
}

export default GetMomentum;