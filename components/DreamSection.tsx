import React from "react";
import { ArrowRight } from "lucide-react"; // Lucide icons
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const DreamsSection = () => {
  return (
    <div className={`max-w-7xl mx-auto px-4 my-16  ${poppins.className}`}>
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900 rounded-xl shadow-xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="space-y-3 text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl font-bold flex items-center gap-2 justify-center lg:justify-start">
            <span>✨</span> Now Make Your Dreams Come True
          </h2>
          <p className="text-sm lg:text-lg opacity-90">
            Free Counseling. No Registration Fees{" "}
            <ArrowRight size={20} className="inline ml-2 text-gray-900" />
          </p>
        </div>

        {/* Button Section */}
        <div className="flex-shrink-0 mt-6 lg:mt-0">
          <a
            href="#apply"
            className="inline-block py-3 px-8 bg-black text-yellow-500 font-semibold text-sm lg:text-base rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black flex items-center gap-2 justify-center"
          >
            <span>Apply Now</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DreamsSection;
