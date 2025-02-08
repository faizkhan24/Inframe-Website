import { LOGOS } from "../utils/constant";
import React from "react";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const InfiniteSlider: React.FC = () => {
  return (
    <div className="w-full relative xl:left-[20rem] lg:text-left text-center mx-auto">
      {/* Heading */}
      <h2
  className={`text-center xl:text-left font-sans text-3xl font-bold text-gray-800 mb-4 ${poppins.className}`}
>
  INDUSTRY & PLACEMENT PARTNER
</h2>

{/* Short Description Paragraph */}
<p className={`text-center xl:text-left text-lg text-gray-600 mb-8 ${poppins.className}`}>
  Inframe’s strong industry partnerships provide students with unparalleled career opportunities and real-world experience to excel in design and business.
</p>

      {/* Slider container */}
      <div className="relative bg-white overflow-hidden py-12">
        {/* Mask effects for fading edges */}
        <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        {/* Animated slider */}
        <div className="flex animate-[scroll_20s_linear_infinite] space-x-12">
          {/* First set of logos */}
          {LOGOS.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex flex-col items-center justify-center text-slate-800"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 shadow-md border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">
                {logo.name}
              </p>
            </div>
          ))}

          {/* Second set of logos to create infinite scroll effect */}
          {LOGOS.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex flex-col items-center justify-center text-slate-800"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 shadow-md border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
