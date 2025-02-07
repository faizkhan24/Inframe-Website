// components/Courses/CourseContent.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";

import HighlightsSection from "./HighlightsSection";
import CareerProspects from "./CareerProspects";
import CurriculumSection from "./CurriculumSection";

import SoftwareLogos from "./SoftwareLogos";
import TestimonialSlider from "./TestimonialSlider";
import FAQSection from "./FAQSection";
import { categoryHeroImages, CurriculumType, SoftwareType, VideosType, WhatLearn } from "@/utils/courseTypes";
import IndustryPartners from "./Partners";

import AdmissionProcess from "./AdmissionProcess";
import WhatYouWillLearn from "./WhatYouWillLearn";
import DreamsSection from "../DreamSection";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface CourseContentProps {
  title: string;
  duration: string;
  description: string;
  content: string;
  index: number;
  category: string; // Added category prop
  curriculum?: CurriculumType;
  software?: SoftwareType[];
  whatYouWillLearn?: WhatLearn[];
  videos?: VideosType[];
}

const CourseContent = ({
  title,
  duration,
  description,
  content,
  index = 0,
  category,
  curriculum,
  software,
  whatYouWillLearn,
  videos = [],
}: CourseContentProps) => {
  // Get the hero images for the current category
  const heroImagesForCategory = categoryHeroImages[category] || [];
  
  // Get the appropriate hero image, fallback to first image if index is out of bounds
  const heroImage = heroImagesForCategory[index] || heroImagesForCategory[0];

  // Hero image fallback for categories without images
  const fallbackHeroImage = "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600&q=80";

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-[95vh] overflow-hidden">
        <img
          src={heroImage || fallbackHeroImage}
          alt={`${title} Hero Image`}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-yellow-400 text-black mb-6 px-4 py-2 mt-14 text-lg inline-block rounded-full">
              {duration}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white max-w-4xl mx-auto px-4">
              {title}
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300 px-4">
              {description}
            </p>
            <Button className={`mt-8 bg-yellow-400 text-black font-semibold hover:bg-yellow-500 px-8 py-6 text-lg ${poppins.className}`}>
              Start Your Journey <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl font-bold py-8 mt-20 mx-6 md:mx-0 ${poppins.className}`}>
          {title}
        </h2>
        <div className="flex flex-col mx-6 md:mx-0 md:flex md:flex-row gap-20 md:gap-52">
          <p className="text-lg font-sans leading-9 text-justify">{content}</p>
          <div className="sm:w-[413px] p-14 sm:h-[300px] rounded-lg border bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
            <h3 className={`text-2xl ${poppins.className} text-center py-5 font-bold text-black`}>
              Step into the World of {title.split(" in ")[1] || "Design"}
            </h3>
            <div className="flex items-center gap-6">
              <Button className="bg-white hover:bg-black hover:text-white transition-all duration-200 text-black border font-bold">
                Apply Now
              </Button>
              <Button className="hover:bg-white hover:text-black transition-all duration-200 font-bold">
                Curriculum
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="max-w-7xl mx-auto">
        <AdmissionProcess />
        <DreamsSection/>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <HighlightsSection />
        <CareerProspects />
        {curriculum && <CurriculumSection curriculum={curriculum} />}
        {
          software?.length === 0 && whatYouWillLearn ? <WhatYouWillLearn whatYouWillLearn={whatYouWillLearn} /> : <SoftwareLogos software={software} />
        }
        
        <IndustryPartners />
        {
          videos.length !== 0 ? <TestimonialSlider videos={videos} /> : null
        }
        
        <FAQSection />

        {/* Call to Action */}
        <div className="text-center py-16 bg-yellow-50 text-black rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-black mb-8 max-w-2xl mx-auto">
            Join our community of creative professionals and start your journey
            towards becoming a professional {title.split(" in ")[1] || "designer"}.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              Download Brochure
            </Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;