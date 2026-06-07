import React from "react";
import SectionCard from "@/components/cards/SectionCard"

function SectionTwo() {
  return (
    <>
      <div className=" min-h-[100vh] m-2 rounded-2xl flex flex-col gap-2 ">
        <div className=" min-h-[40vh] flex flex-col justify-center gap-5 items-center">
          <div className="w-120 flex flex-col justify-center items-center ">
            <h1 className="text-8xl font-gomies">Small habits</h1>
            <h1 className="text-8xl font-gomies">Big changes.</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-garamond text-gray-600/80 font-bold text-2xl">
              Track your habits, visualize your progress, and stay motivated
              every day.
            </p>
          </div>
        </div>
        <div className=" min-h-[60vh] flex flex-row gap-5 justify-center">
          <SectionCard
            title="Track Your Habits"
            body="Build consistency every day.Build consistency every day."
            imgurl="/habit.png"
          />
          <SectionCard
            title="Track Your Habits"
            body="Build consistency every day.Build consistency every day."
            imgurl="/habit.png"
          />
          <SectionCard
            title="Track Your Habits"
            body="Build consistency every day.Build consistency every day."
            imgurl="/habit.png"
          />
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
