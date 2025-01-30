"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Poppins } from "next/font/google";
import AdmissionProcess from "../AdmissionProcess";
import ApplyNowForm from "../ApplyNowForm";
import HighlightsSection from "./HighlightsSection";
import CareerProspects from "./CareerProspects";
import CurriculumSection from "./CurriculumSection";
import CourseStructure from "./CourseStructure";
import SoftwareLogos from "./SoftwareLogos";
import TestimonialSlider from "./TestimonialSlider";
import ImageGallery from "./ImageGallery";
import FAQSection from "./FAQSection";
import { heroImages } from "@/utils/courseTypes";
import IndustryPartners from "../Partners";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CourseContent = ({
  title,
  duration,
  description,
  content,
  index = 0,
}:any) => (
  <div className="bg-black text-white">
    {/* Hero Section */}
    <div className="relative h-[90vh] overflow-hidden">
      <img
        src={heroImages[index]}
        alt="Interior Design Studio"
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-yellow-400 text-black mb-6 px-4 py-2 mt-14 text-lg inline-block rounded-full">
            {duration}
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">{title}</h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300">
            {description}
          </p>
          <Button className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-6 text-lg">
            Start Your Journey <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>

    {/* Course Description */}
    <div className="max-w-7xl mx-auto">
      <h2 className={`text-3xl font-bold py-8 mx-6 md:mx-0 ${poppins.className}`}>
        {title}
      </h2>
      <div className="flex flex-col mx-6 md:mx-0 md:flex md:flex-row gap-20 md:gap-52">
        <p className="text-lg font-sans leading-9">{content}</p>
        <div className="sm:w-[413px] p-14 sm:h-[300px] rounded-lg border bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
          <h3 className={`text-2xl ${poppins.className} text-center py-5 font-bold text-black`}>
            Step into the World of Design
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
      <ApplyNowForm />
    </div>

    <div className="max-w-7xl mx-auto px-4 py-16">
      <HighlightsSection />
      <CareerProspects />
      <CurriculumSection />
      <SoftwareLogos />
      <IndustryPartners/>
      <TestimonialSlider />
      
      <FAQSection />

      {/* Call to Action */}
      <div className="text-center py-16 bg-zinc-900 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Spaces?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our community of creative designers and start your journey
          towards becoming a professional interior designer.
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

export default CourseContent;