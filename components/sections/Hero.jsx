import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <section id="home-page-wrapper" className="h-screen w-screen relative">
        {/* <div
          id="home-page-bg-wrapper"
          className="w-full h-full absolute top-0 flex justify-center items-center"
        >
          <div
            id="home-page-bg"
            className="w-full h-full flex justify-center items-center opacity-50"
          >
            <Image
              data-speed="0.2"
              height={10000}
              width={10000}
              className="w-full h-auto"
              alt="bg-image"
              src={"/Images/home-bg.jpg"}
            />
          </div>
        </div> */}

        <div
          id="home-page-content-wrapper"
          className="relative h-full z-10 w-full flex justify-center items-center"
        >
          <div id="home-page-content-hero" className="w-full h-full flex flex-col items-center justify-between">
            <div id="home-page-heading" className="text-center flex-1 flex flex-col items-center justify-center">
              <h1 className="text-6xl font-google-sans font-light">
                Your personalized
              </h1>
              <h1 className="text-6xl font-google-sans font-light">Habit tracker</h1>
            </div>

            <div
              id="home-page-main-heading"
              className="w-full flex-1 flex items-end opacity-100"
            >
              <svg
                viewBox="0 0 2774 332"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.45058e-08 327V4.99997H115L180.5 138L245.5 4.99997H360.5V327H239.5V214L211 272H149.5L121 214V327H7.45058e-08ZM558.008 332C521.674 332 490.674 326.667 465.008 316C439.341 305 419.674 287.333 406.008 263C392.341 238.667 385.508 206.333 385.508 166C385.508 125.333 392.341 93 406.008 69C419.674 44.6666 439.341 27.1666 465.008 16.5C490.674 5.49998 521.674 -2.19345e-05 558.008 -2.19345e-05C594.341 -2.19345e-05 625.341 5.49998 651.008 16.5C676.674 27.1666 696.341 44.6666 710.008 69C723.674 93 730.508 125.333 730.508 166C730.508 206.333 723.674 238.667 710.008 263C696.341 287.333 676.674 305 651.008 316C625.341 326.667 594.341 332 558.008 332ZM558.008 229.5C575.674 229.5 588.174 224.833 595.508 215.5C603.174 205.833 607.008 189.333 607.008 166C607.008 142.667 603.174 126.333 595.508 117C588.174 107.333 575.674 102.5 558.008 102.5C540.341 102.5 527.674 107.333 520.008 117C512.674 126.333 509.008 142.667 509.008 166C509.008 189.333 512.674 205.833 520.008 215.5C527.674 224.833 540.341 229.5 558.008 229.5ZM755.371 327V4.99997H870.371L935.871 138L1000.87 4.99997H1115.87V327H994.871V214L966.371 272H904.871L876.371 214V327H755.371ZM1150.88 327V4.99997H1408.38V92H1271.88V121H1389.38V211H1271.88V240H1408.38V327H1150.88ZM1428.22 327V4.99997H1529.72L1619.72 131V4.99997H1740.72V327H1638.72L1549.22 201V327H1428.22ZM1840.38 327V92H1758.38V4.99997H2043.38V92H1961.38V327H1840.38ZM2219.54 332C2189.2 332 2161.87 327 2137.54 317C2113.2 307 2093.87 292.167 2079.54 272.5C2065.54 252.833 2058.54 228.667 2058.54 200V4.99997H2179.54V184.5C2179.54 214.5 2192.87 229.5 2219.54 229.5C2246.2 229.5 2259.54 214.5 2259.54 184.5V4.99997H2380.54V200C2380.54 228.667 2373.37 252.833 2359.04 272.5C2345.04 292.167 2325.87 307 2301.54 317C2277.2 327 2249.87 332 2219.54 332ZM2413.09 327V4.99997H2528.09L2593.59 138L2658.59 4.99997H2773.59V327H2652.59V214L2624.09 272H2562.59L2534.09 214V327H2413.09Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
