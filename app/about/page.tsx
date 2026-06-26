"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const values = [
    {
        title: "Show up, not perfectly",
        body: "Momentum rewards consistency, not flawlessness. Missing a day shouldn't break your streak of trying.",
        image: "https://images.unsplash.com/photo-1713747637207-2971748652fc?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Small steps compound",
        body: "We believe lasting change comes from tiny, repeatable actions — not dramatic overhauls.",
        image: "https://images.unsplash.com/photo-1533162507191-d90c625b2640?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Built with care, not noise",
        body: "No dark patterns, no guilt-tripping notifications. Just a tool that respects your time and attention.",
        image: "https://img.recraft.ai/gqe6IBxbHv8g1y_NcP7N3qPHUJbbrWp8ObevL6PW1jA/rs:fit:1792:2304:0/q:95/g:no/plain/abs://prod/images/30af7627-ab6f-48ea-906f-19f4f97ff103@avif",
    },
];

export default function AboutPage() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const heading = headingRef.current;
        const image = imageRef.current;

        // Failsafe: release the scroll lock even if the animation is interrupted,
        // so the page can never get permanently stuck.
        const failsafe = setTimeout(() => {
            window.dispatchEvent(new Event("intro-complete"));
        }, 3000);

        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
                clearTimeout(failsafe);
                window.dispatchEvent(new Event("intro-complete"));
            },
        });

        // Set the start state here (instead of an opacity-0 class) so that if JS
        // ever fails to run, the content stays visible rather than stuck invisible.
        gsap.set([heading, image], { opacity: 0, y: 24 });

        tl.to(heading, { opacity: 1, y: 0, duration: 1 }).to(
            image,
            { opacity: 1, y: 0, duration: 1.1 },
            "-=0.7"
        );

        return () => {
            clearTimeout(failsafe);
            tl.kill();
        };
    }, []);

    return (
        <div className="bg-black text-white font-google-sans">
            {/* Hero */}
            <section className="flex flex-col">
                <div className="min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-6 sm:px-12">
                    <h1
                        ref={headingRef}
                        className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight"
                    >
                        A vision for the
                        <br />
                        future of habits.
                    </h1>
                </div>

                <div className="w-full px-4 sm:px-12 pb-12 sm:pb-20">
                    <div
                        ref={imageRef}
                        className="relative w-full h-[40vh] sm:h-[60vh] md:h-[70vh] max-w-7xl mx-auto overflow-hidden rounded-[28px] sm:rounded-[40px]"
                    >
                        <Image
                            src="/Images/about_image.png"
                            fill
                            className="object-cover"
                            alt="A flat-lay of a habit journal, coffee, and a small plant on a wooden table"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Founder story */}
            <section className="px-6 sm:px-12 py-20 sm:py-32 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-black mb-6 sm:mb-8">
                    Why we built this.
                </h2>
                <div className="flex flex-col gap-5 text-base sm:text-xl text-white/70 leading-relaxed">
                    <p>
                        Momentum started from a simple frustration: every habit tracker we
                        tried made us feel worse, not better, the moment we missed a day.
                        Streaks reset to zero, progress bars went red, and the whole
                        experience started to feel like punishment instead of support.
                    </p>
                    <p>
                        We wanted something different — a tracker that treated a missed day
                        as part of being human, not a failure to erase. Something that
                        celebrated showing up most of the time, not just perfect attendance.
                    </p>
                    <p>
                        That idea became Momentum: a habit tracker built around consistency
                        over perfection, where small, repeatable wins actually add up to
                        something real.
                    </p>
                </div>
            </section>

            {/* Mission / values */}
            <section className="px-6 sm:px-12 py-20 sm:py-32 bg-[#0a0a0a]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-4xl font-black mb-10 sm:mb-16 text-center">
                        What we believe.
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 sm:gap-6">
                        {values.map((value, i) => {
                            const isFeature = i === 0;
                            return (
                                <div
                                    key={i}
                                    className={`group relative overflow-hidden rounded-[28px] sm:rounded-[40px] ${isFeature
                                        ? "lg:row-span-2 h-[60vh] lg:h-auto"
                                        : "h-[40vh] lg:h-[300px]"
                                        }`}
                                >
                                    <Image
                                        src={value.image}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt={value.title}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
                                        <h3
                                            className={`font-black mb-2 sm:mb-3 ${isFeature ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"
                                                }`}
                                        >
                                            {value.title}
                                        </h3>
                                        <p
                                            className={`text-white/80 leading-relaxed ${isFeature
                                                ? "text-base sm:text-lg max-w-lg"
                                                : "text-sm sm:text-base max-w-sm"
                                                }`}
                                        >
                                            {value.body}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}