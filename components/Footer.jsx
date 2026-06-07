import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaReddit,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="bg-zinc-100 rounded-t-2xl flex justify-center items-center min-h-[50vh] px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-12 w-full max-w-7xl py-16">
          {/* Logos */}
          <div className="flex flex-col justify-between min-h-[180px]">
            <div>
              <h1 className="text-4xl font-garamond font-bold">Momentum</h1>
              <p className="text-sm text-gray-500 mt-1">
                &copy; RedMango Inc. 2026
              </p>
            </div>

            <div className="flex gap-6 mt-8 text-2xl text-gray-800">
              <FaInstagram className="cursor-pointer hover:scale-110 transition-all duration-200" />

              <FaXTwitter className="cursor-pointer hover:scale-110 transition-all duration-200" />

              <FaReddit className="cursor-pointer hover:scale-110 transition-all duration-200" />

              <FaYoutube className="cursor-pointer hover:scale-110 transition-all duration-200" />

              <FaFacebook className="cursor-pointer hover:scale-110 transition-all duration-200" />
            </div>
          </div>

          
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-500 font-semibold text-lg">Company</h2>

            <a href="#" className="font-medium hover:underline">
              About Us
            </a>

            <a href="#" className="font-medium hover:underline">
              Careers
            </a>

            <a href="#" className="font-medium hover:underline">
              Blog
            </a>
          </div>

          
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-500 font-semibold text-lg">Product</h2>

            <a href="#" className="font-medium hover:underline">
              Download App
            </a>

            <a href="#" className="font-medium hover:underline">
              Knowledge Base
            </a>

            <a href="#" className="font-medium hover:underline">
              Release Notes
            </a>

            <a href="#" className="font-medium hover:underline">
              Roadmap
            </a>
          </div>

          
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-500 font-semibold text-lg">Support</h2>

            <a href="#" className="font-medium hover:underline">
              FAQ
            </a>

            <a href="#" className="font-medium hover:underline">
              Request a Feature
            </a>

            <a href="#" className="font-medium hover:underline">
              Report a Bug
            </a>

            <a href="#" className="font-medium hover:underline">
              Contact Us
            </a>
          </div>

         
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-500 font-semibold text-lg">Legal</h2>

            <a href="#" className="font-medium hover:underline">
              Terms of Service
            </a>

            <a href="#" className="font-medium hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
