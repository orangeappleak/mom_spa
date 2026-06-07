import React from "react";

function Hero() {
  return (
    <>
      <div className="min-h-[100vh] bg-sky-300/20  rounded-2xl m-2 flex flex-col">
        <div className="gap-7 m-2 h-[50vh] flex flex-col items-center justify-center">
          <div className="mt-20">
            <h1 className=" max-w-[900px]  text-center font-gomies text-shadow-lg text-4xl sm:text-9xl">
              Your personalized
            </h1>

            <h1 className="w-full max-w-[900px] text-center font-gomies text-shadow-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Habit tracker
            </h1>
          </div>

          <div className="w-full max-w-[600px] px-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl">
            <p className="font-garamond text-gray-600/80 font-bold">
              Track your progress, stay consistent, and transform small daily
              actions into lasting change
            </p>
          </div>

          <div>
            <button className="rounded-full px-4 py-2 hover:scale-97  hover:shadow-md transition-all duration-300 ease-in-out text-white bg-black">
              Download app
            </button>
          </div>
        </div>

        <div className=" min-h-[50vh]">{/* img here */}</div>
      </div>
    </>
  );
}

export default Hero;
