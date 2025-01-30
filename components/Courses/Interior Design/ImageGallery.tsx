import React from "react";
import { Poppins } from "next/font/google";
import { galleryImages } from "@/utils/courseTypes";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ImageGallery = () => (
  <div>
    <h2 className={`text-3xl font-bold py-3 mx-6 md:mx-0 ${poppins.className}`}>
      PROJECTS
    </h2>
    <div className="w-48 mx-6 md:mx-0 h-1 mb-7 bg-yellow-400" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {galleryImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`group relative overflow-hidden rounded-xl ${
            index === 0 ? "md:col-span-2 md:row-span-2" : ""
          }`}
        >
          <img
            src={imageUrl}
            alt={`Interior Design Sample ${index + 1}`}
            className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Project
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ImageGallery;