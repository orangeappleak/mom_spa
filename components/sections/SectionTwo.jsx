"use client";

import { React, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hoverEffect = {
  scale: 1.015,
  backgroundColor: "#262d36",
};

const hoverTransition = { duration: 0.25, ease: "easeOut" };

function SectionTwo() {
  const headingWrapperRef = useRef(null);
  const smallHabitsRef = useRef(null);
  const bigChangesRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: headingWrapperRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    headingTl.fromTo(
      smallHabitsRef.current,
      { x: -300, color: "#3f3f46", opacity: 0 },
      { x: 0, opacity: 1, color: "#ffffff", ease: "power4.inOut" },
      0
    ).fromTo(
      bigChangesRef.current,
      { x: 300, color: "#3f3f46", opacity: 0 },
      { x: 0, opacity: 1, color: "#ffffff", ease: "power4.inOut" },
      0
    );

    // Card entrance animations via GSAP ScrollTrigger
    const cards = sectionRef.current.querySelectorAll(".feature-card");
    const cardTriggers = [];

    cards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 100 });

      const trigger = ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          });
        },
      });

      cardTriggers.push(trigger);
    });

    return () => {
      headingTl.scrollTrigger?.kill();
      headingTl.kill();
      cardTriggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-auto z-40 overflow-hidden flex flex-col gap-2 bg-black font-google-sans py-20 sm:py-36">
      <div className="min-h-[30vh] sm:min-h-[40vh] flex flex-col text-white justify-center gap-5 items-center px-4">
        <div ref={headingWrapperRef} className="w-full flex flex-col">
          <h1
            ref={smallHabitsRef}
            className="text-6xl md:text-8xl font-google-sans text-center font-black"
          >
            Small habits
          </h1>
          <h1
            ref={bigChangesRef}
            className="text-6xl md:text-8xl font-google-sans text-center font-black"
          >
            Big changes.
          </h1>
        </div>
        <div className="flex justify-center items-center py-6 sm:py-10">
          <p className="font-google-sans text-gray-700/80 font-bold text-base sm:text-2xl text-center">
            Track your habits, visualize your progress, and stay motivated every day.
          </p>
        </div>
      </div>

      <div className="h-auto font-google-sans">
        <div id="feature-cards" className="h-auto w-full flex flex-col sm:flex-row gap-6 sm:gap-12 px-4 sm:px-12 pb-12">
          <div id="cards-section-1" className="flex-1 flex flex-col gap-6 sm:gap-12">
            <motion.div
              id="card-1"
              className="feature-card bg-[#1B2128] rounded-[40px] sm:rounded-[80px] h-auto flex flex-col px-5 sm:px-0 py-6 sm:py-10 items-center relative overflow-hidden"
              whileHover={{ ...hoverEffect, transition: hoverTransition }}
            >
              <div id="card-heading" className="px-6 sm:px-10 mb-3 sm:mb-6 text-center sm:text-left">
                <h1 className="text-white/50 text-xs sm:text-base">Watch streaks grow.</h1>
                <h2 className="text-base sm:text-2xl text-white">
                  Weekly progress and your running streak, at a glance.</h2>
              </div>
              <div className="w-full sm:w-3/4 sm:h-2/3 flex-1 mx-auto overflow-hidden rounded-[28px] sm:rounded-4xl">
                <Image src={'/Images/card1.jpg'} width={1000} height={1000} onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} className="w-full h-auto" alt="icon" />
              </div>
            </motion.div>

            <motion.div
              id="card-2"
              className="feature-card bg-[#1B2128] rounded-[40px] sm:rounded-[80px] h-auto pb-6 px-5 sm:px-0 sm:pb-10 flex flex-col relative overflow-hidden"
              whileHover={{ ...hoverEffect, transition: hoverTransition }}
            >
              <div id="card-heading" className="px-6 sm:px-10 pt-6 sm:pt-10 mb-3 sm:mb-6 text-center sm:text-left">
                <h1 className="text-white/50 text-xs sm:text-base">Level up for showing up.</h1>
                <h2 className="text-base sm:text-2xl text-white">
                  Earn XP, climb levels, collect badges worth keeping.</h2>
              </div>
              <div className="w-full sm:w-3/4 flex-1 mx-auto overflow-hidden rounded-t-[28px] sm:rounded-t-4xl">
                <Image src={'/Images/badges.png'} width={1000} height={1000} onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} className="w-full h-auto" alt="icon" />
              </div>
            </motion.div>

            <motion.div
              id="card-3"
              className="feature-card bg-[#1B2128] rounded-[40px] sm:rounded-[80px] h-auto flex flex-col px-5 sm:px-0 py-6 sm:py-10 relative overflow-hidden"
              whileHover={{ ...hoverEffect, transition: hoverTransition }}
            >
              <div id="card-heading" className="px-6 sm:px-10 mb-3 sm:mb-6 text-center sm:text-left">
                <h1 className="text-white/50 text-xs sm:text-base">Commit for real.</h1>
                <h2 className="text-base sm:text-2xl text-white">
                  Lock in a habit, raise the stakes, earn the badge.</h2>
              </div>
              <div className="w-full sm:w-3/4 flex-1 mx-auto overflow-hidden rounded-[28px] sm:rounded-4xl">
                <Image src={'/Images/card3.jpg'} width={1000} height={1000} onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} className="w-full h-auto" alt="icon" />
              </div>
            </motion.div>
          </div>

          <div id="cards-section-2" className="flex-1 flex flex-col gap-6 sm:gap-12 h-auto">
            <motion.div
              id="card-4"
              className="feature-card bg-[#1B2128] rounded-[40px] sm:rounded-[80px] h-auto px-5 sm:px-0 py-6 sm:py-10 flex flex-col relative overflow-hidden"
              whileHover={{ ...hoverEffect, transition: hoverTransition }}
            >
              <div id="card-heading" className="px-6 sm:px-10 mb-3 sm:mb-6 text-center sm:text-left">
                <h1 className="text-white/50 text-xs sm:text-base">See how you show up.</h1>
                <h2 className="text-base sm:text-2xl text-white">
                  Your habits mapped across consistency and difficulty.</h2>
              </div>

              <div className="w-full sm:w-3/4 sm:h-3/4 flex-1 mx-auto overflow-hidden rounded-[28px]">
                <Image src={'/Images/card4.jpg'} width={1000} height={1000} onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} className="w-full rounded-4xl h-auto" alt="icon" />
              </div>
            </motion.div>

            <motion.div
              id="card-5"
              className="feature-card bg-[#1B2128] rounded-[40px] sm:rounded-[80px] px-5 sm:px-0 py-6 sm:py-10 h-auto flex flex-col relative overflow-hidden"
              whileHover={{ ...hoverEffect, transition: hoverTransition }}
            >
              <div id="card-heading" className="px-6 sm:px-10 mb-3 sm:mb-6 text-center sm:text-left">
                <h1 className="text-white/50 text-xs sm:text-base">See the full picture.</h1>
                <h2 className="text-base sm:text-2xl text-white">
                  Completion, streaks, XP, and where you slip — all in one place.</h2>
              </div>
              <div className="w-full sm:w-3/4 flex-1 mx-auto overflow-hidden rounded-[28px] sm:rounded-4xl">
                <Image src={'/Images/card5.jpg'} width={1000} height={1000} onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} className="w-full h-auto" alt="icon" />
              </div>
            </motion.div>

            <motion.div
              id="card-6"
              className="feature-card bg-[#1B2128] rounded-[40px] sm:rounded-[80px] px-5 sm:px-0 py-6 sm:py-10 h-auto flex flex-col relative overflow-hidden"
              whileHover={{ ...hoverEffect, transition: hoverTransition }}
            >
              <div id="card-heading" className="px-6 sm:px-10 mb-3 sm:mb-6 text-center sm:text-left">
                <h1 className="text-white/50 text-xs sm:text-base">Spot your rhythm.</h1>
                <h2 className="text-base sm:text-2xl text-white">
                  A simple weekly curve shows where you peak and dip.</h2>
              </div>
              <div className="w-full sm:w-3/4 flex-1 mx-auto overflow-hidden rounded-[28px] sm:rounded-4xl">
                <Image src={'/Images/card6.jpg'} width={1000} height={1000} onLoad={(e) => e.currentTarget.classList.remove('opacity-0')} className="w-full rounded-[28px] sm:rounded-4xl h-auto" alt="icon" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;