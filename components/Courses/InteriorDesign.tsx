"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Poppins } from "next/font/google";
import { courseTypes } from "@/utils/courseTypes";
import CourseContent from "./Interior Design/CourseContent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CoursePage = () => {
  const [selectedTab, setSelectedTab] = useState("bdes"); // Default tab

  return (
    <div className="min-h-screen mt-24 sm:mt-0 font-sans bg-black text-white">
      <Tabs defaultValue={selectedTab} value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        
        {/* Mobile View - Select Dropdown */}
        <div className="block md:hidden p-4">
          <Select value={selectedTab} onValueChange={setSelectedTab}>
            <SelectTrigger className="w-full bg-zinc-900 text-white border border-zinc-800">
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-white border border-zinc-700">
              {courseTypes.map((tab) => (
                <SelectItem key={tab.value} value={tab.value} className="cursor-pointer">
                  {tab.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop View - Tabs */}
        <div className="hidden md:block md:max-w-7xl md:mx-auto 2xl:w-full 2xl:mx-0 z-10 border-b border-zinc-800">
          <TabsList className="h-auto md:fixed z-10 p-0 bg-black w-full flex flex-col md:flex-row">
            {courseTypes.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="lg:px-8 2xl:px-24 py-6 mt-24 lg:text-lg font-bold data-[state=active]:bg-zinc-900 data-[state=active]:border-b-4 data-[state=active]:border-yellow-400 data-[state=active]:text-white rounded-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Course Content */}
        {courseTypes.map((course, index) => (
          <TabsContent key={course.value} value={course.value}>
            <CourseContent {...course} index={index} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CoursePage;
