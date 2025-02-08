"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { courses } from "../utils/constant";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { BookOpen, Globe, Star } from "lucide-react";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

export function Courses() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  // Categories available in the courses
  const categories = ["All", "Art", "Business", "Design"];

  // Filter courses based on the selected category
  const filteredCourses = courses.filter(
    (course) => selectedCategory === "All" || course.category === selectedCategory
  );

  return (
    <div className="relative  max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
      {/* Doodle Image in Background */}
      <div className="absolute top-0 left-0 -z-10">
        <Image
          src={"/rb_26045.png"}
          alt="doodle"
          width={500}
          height={500}
          className="opacity-5"
        />
      </div>

      <div className="text-center mb-10">
        <h1 className={`text-2xl sm:text-3xl pl-4 text-left font-sans font-bold text-gray-800 ${poppins.className}` }>
          Explore Our Courses
        </h1>
        <p className="text-gray-500 text-left pl-4 font-sans mt-2 text-sm sm:text-base">
          Discover a variety of courses tailored for your growth and success.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className=" lg:relative lg:left-[-13rem] xl:left-[-21rem]  text-center mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-10 py-5 border font-sans rounded-md text-sm ${
                selectedCategory === category
                  ? "bg-yellow-300 text-black font-bold border-black"
                  : "bg-white text-gray-800 border-gray-300"
              } hover:bg-gray-200 transition`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <Carousel
        orientation="horizontal"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {filteredCourses.map((course, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <div className="my-8">
                <Card className="w-full max-w-[400px] overflow-hidden border border-gray-200 rounded-2xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.name}
                      width={400}
                      height={250}
                      className="object-cover h-56 w-full rounded-t-2xl"
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg sm:text-xl font-sans font-bold text-gray-900 leading-tight">
                      {course.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-sans text-gray-600 mt-3">
                      {course.description}
                    </CardDescription>

                    {/* Lucide Icons Section */}
                    <div className="flex flex-wrap items-center gap-4 mt-5">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700">
                          Top Rated
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium text-gray-700">
                          Detailed
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">
                          Global
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-6">
                      <Button className="w-full sm:w-auto px-4 py-2 bg-yellow-300 text-black border font-sans border-black rounded-full font-bold text-sm shadow-md hover:bg-gray-700 transition">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-4  sm:space-x-6">
          <CarouselPrevious className="sm:w-10 my-6 md:my-0 md:h-10 bg-black border-2 border-black text-white rounded-full flex items-center justify-center transition hover:bg-gray-600" />
          <CarouselNext className="sm:w-10 sm:h-10 my-6 md:my-0 bg-black border-2 border-black text-white rounded-full flex items-center justify-center transition hover:bg-gray-600" />
        </div>
      </Carousel>
    </div>
  );
}
