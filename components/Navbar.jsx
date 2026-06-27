"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Navbar() {
  return (
    <div className="fixed top-0 w-screen flex justify-between items-center h-[10vh] sm:h-[12vh] py-4 sm:py-5 px-5 sm:px-20 z-30">
      <div id="icon-wrapper" className="h-full flex items-center justify-start">
        <Link href="/" className="h-full flex items-center justify-start">
          <Image
            width={1000}
            height={1000}
            src={"/Images/app_icon.png"}
            className="w-auto h-full rounded-2xl contrast-125 brightness-75"
            alt="icon"
          />
        </Link>
      </div>

      <MotionLink
        href="/early-access"
        id="get-button"
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="px-5 sm:px-10 py-3 sm:py-5 rounded-full cursor-pointer overflow-hidden relative border whitespace-nowrap"
        style={{ borderWidth: 1 }}
        variants={{
          rest: {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            borderColor: "rgba(255, 255, 255, 0.25)",
            boxShadow: "0 0px 0px rgba(255, 255, 255, 0)",
          },
          hover: {
            scale: 1.04,
            backgroundColor: "#ffffff",
            borderColor: "rgba(255, 255, 255, 0)",
            boxShadow: "0 8px 30px rgba(255, 255, 255, 0.25)",
          },
        }}
      >
        <motion.h1
          className="text-sm sm:text-xl font-medium font-google-sans relative z-10"
          variants={{
            rest: { color: "#ffffff" },
            hover: { color: "#000000" },
          }}
          transition={{ duration: 0.3 }}
        >
          Get Momentum
        </motion.h1>
      </MotionLink>
    </div>
  );
}

export default Navbar;