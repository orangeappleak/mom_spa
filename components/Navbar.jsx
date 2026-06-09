"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className="  flex justify-center items-center z-10 ">
        {/* desktop */}
        <div className=" fixed top-0 m-5 bg-amber-100/10 backdrop-blur-sm  rounded-full  py-2 px-4 sm:w-120 w-full  flex justify-between sm:justify-around items-center gap-5 shadow-sm">
          <div>
            <Link
              className="text-[20px]  hover:font-bold transition-all  duration-75 ease-in "
              href={"/"}
            >
              Momento
            </Link>
          </div>

          <div className="flex items-center justify-center text-center sm:hidden ">
            <h1
              className="text-xl cursor-pointer"
              onClick={() => {
                setisOpen(!isOpen);
              }}
            >
              ☰
            </h1>
          </div>

          <Link
            className="hidden sm:flex text-[15px]  hover:font-bold transition-all  duration-75 ease-in "
            href={"/"}
          >
            About
          </Link>
          <Link
            className="hidden sm:flex text-[15px]   hover:font-bold transition-all  duration-75 ease-in "
            href={"/"}
          >
            How it works
          </Link>
          <Link
            className="hidden sm:flex text-[15px] bg-black px-4 py-2 text-center text-white rounded-full  hover:font-bold transition-all  duration-75 ease-in "
            href={"/"}
          >
            Get the app
          </Link>
        </div>
        
        {/* mobile */}
        <div>
          <div
            className={`sm:hidden bg-gray-300/20 backdrop-blur-sm flex flex-col items-center text-center  absolute left-0 right-0 m-8
      transition-all duration-100 rounded-b-2xl rounded-t-2xl ease-in-out transform
      ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
          >
            <div className="flex flex-col m-5 gap-4">
              <Link
                className="text-[15px] hover:font-bold transition-all duration-75 ease-in-out"
                href={"/"}
              >
                About
              </Link>

              <Link
                className="text-[15px] hover:font-bold transition-all duration-75 ease-in"
                href={"/"}
              >
                How it works
              </Link>

              <Link
                className="text-[15px] bg-black px-4 py-2 text-center text-white rounded-full hover:font-bold transition-all duration-75 ease-in"
                href={"/"}
              >
                Get the app
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
