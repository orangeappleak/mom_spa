import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="z-40 backdrop-blur-xl bg-white/[0.04] border-t border-white/10"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <h1 className="text-3xl font-google-sans font-bold text-white">
            Momentum
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <span className="text-gray-500">&copy; 2026 RedMango Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;