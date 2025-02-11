// "use client";
// import * as React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/ui/carousel";
// import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
// import Image from "next/image";
// import { courses } from "../utils/constant";
// import Autoplay from "embla-carousel-autoplay";
// import { Button } from "./ui/button";
// import { BookOpen, Clock, GraduationCap } from "lucide-react";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });

// // Reorganize courses into new categories
// const categorizedCourses = {
//   Art: [
//     ...courses.find(c => c.category === "Fine Arts")?.programs || [],
//     ...courses.find(c => c.category === "Animation and VFX")?.programs || []
//   ],
//   Business: [
//     ...courses.find(c => c.category === "Digital Marketing")?.programs || [],
//     ...courses.find(c => c.category === "Entrepreneurship Skills")?.programs || [],
//     ...courses.find(c => c.category === "Advertising and Marketing")?.programs || []
//   ],
//   Design: [
//     ...courses.find(c => c.category === "Interior Design")?.programs || [],
//     ...courses.find(c => c.category === "Fashion Design")?.programs || [],
//     ...courses.find(c => c.category === "Graphic Design")?.programs || [],
//     ...courses.find(c => c.category === "UI & UX Design")?.programs || [],
//     ...courses.find(c => c.category === "Jewellery Design")?.programs || []
//   ]
// };

// export function Courses() {
//   const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
//   const categories = ["All", "Art", "Business", "Design"];

//   // Get filtered programs based on selected category
//   const getFilteredPrograms = () => {
//     if (selectedCategory === "All") {
//       return Object.values(categorizedCourses).flat();
//     }
//     return categorizedCourses[selectedCategory as keyof typeof categorizedCourses] || [];
//   };

//   const filteredPrograms = getFilteredPrograms();

//   return (
//     <div className="relative max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
//       {/* Doodle Image in Background */}
//       <div className="absolute top-0 left-0 -z-10">
//         <Image
//           src={"/rb_26045.png"}
//           alt="doodle"
//           width={500}
//           height={500}
//           className="opacity-5"
//         />
//       </div>

//       <div className="text-center mb-10">
//         <h1 className={`text-2xl sm:text-3xl pl-4 text-left font-sans font-bold text-gray-800 ${poppins.className}`}>
//           Explore Our Programs
//         </h1>
//         <p className="text-gray-500 text-left pl-4 font-sans mt-2 text-sm sm:text-base">
//           Discover a variety of educational programs tailored for your career growth.
//         </p>
//       </div>

//       {/* Category Filter Buttons */}
//       <div className="lg:relative lg:left-[-13rem] xl:left-[-21rem] text-center mb-8">
//         <div className="flex flex-wrap justify-center gap-4">
//           {categories.map((category) => (
//             <Button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-10 py-5 border font-sans rounded-md text-sm ${
//                 selectedCategory === category
//                   ? "bg-yellow-300 text-black font-bold border-black"
//                   : "bg-white text-gray-800 border-gray-300"
//               } hover:bg-gray-200 transition`}
//             >
//               {category}
//             </Button>
//           ))}
//         </div>
//       </div>

//       <Carousel
//         orientation="horizontal"
//         plugins={[
//           Autoplay({
//             delay: 4000,
//           }),
//         ]}
//         opts={{
//           align: "center",
//         }}
//         className="w-full"
//       >
//         <CarouselContent>
//           {filteredPrograms.map((program, index) => (
//             <CarouselItem
//               key={index}
//               className="sm:basis-1/2 lg:basis-1/3 flex justify-center"
//             >
//               <div className="my-8">
//                 <Card className="w-full max-w-[400px] overflow-hidden border border-gray-200 rounded-2xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//                   <div className="relative">
//                     <Image
//                       src={program.image}
//                       alt={program.name}
//                       width={400}
//                       height={250}
//                       className="object-cover h-56 w-full rounded-t-2xl"
//                     />
//                   </div>
//                   <CardContent className="p-6">
//                     <CardTitle className="text-lg sm:text-xl font-sans font-bold text-gray-900 leading-tight">
//                       {program.name}
//                     </CardTitle>
                    
//                     {/* Program Details */}
//                     <div className="flex flex-wrap items-center gap-4 mt-5">
//                       <div className="flex items-center gap-2">
//                         <Clock className="w-5 h-5 text-yellow-500" />
//                         <span className="text-sm font-medium text-gray-700">
//                           {program.duration}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <BookOpen className="w-5 h-5 text-blue-500" />
//                         <span className="text-sm font-medium text-gray-700">
//                           {program.type}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <GraduationCap className="w-5 h-5 text-green-500" />
//                         <span className="text-sm font-medium text-gray-700">
//                           {selectedCategory === "All" 
//                             ? Object.entries(categorizedCourses).find(([_, programs]) => 
//                                 programs.includes(program)
//                               )?.[0] 
//                             : selectedCategory}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Button */}
//                     <div className="mt-6">
//                       <Button className="w-full sm:w-auto px-4 py-2 bg-yellow-300 text-black border font-sans border-black rounded-full font-bold text-sm shadow-md hover:bg-gray-700 hover:text-white transition">
//                         Learn More
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center mt-4 sm:space-x-6">
//           <CarouselPrevious className="sm:w-10 my-6 md:my-0 md:h-10 bg-black border-2 border-black text-white rounded-full flex items-center justify-center transition hover:bg-gray-600" />
//           <CarouselNext className="sm:w-10 sm:h-10 my-6 md:my-0 bg-black border-2 border-black text-white rounded-full flex items-center justify-center transition hover:bg-gray-600" />
//         </div>
//       </Carousel>
//     </div>
//   );
// }