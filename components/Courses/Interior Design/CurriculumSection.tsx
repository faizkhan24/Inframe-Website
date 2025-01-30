import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CurriculumSection = () => {
  const programs = {
    "Bachelor's Program": {
      "1st Year": {
        image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80",
        imageAlt: "Interior design fundamentals sketch and materials",
        "Semester 1": [
          "Contextual Art and Design",
          "Material Studies (Linear, Planar, Solid, Moldable)",
          "Creative Skills",
          "Object as History",
          "Visual Expression",
          "Design Concepts"
        ],
        "Semester 2": [
          "Design Communication Skills",
          "Craft Experience",
          "Basic Design I (Form, Space and Order)",
          "Technical Representation of Drawing I",
          "Design Process & Design Thinking",
          "ID_elective_sem 2 (Compulsory Subjects :1)"
        ]
      },
      "2nd Year": {
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80",
        imageAlt: "Modern interior space planning",
        "Semester 3": [
          "Interior Design Studio I",
          "Materials and Methods of Construction I",
          "Digital Design and Representation I",
          "History of Interior Design and Furniture I",
          "Building Services I (Water Supply and Sanitation)",
          "Professional Practice and Ethics I"
        ],
        "Semester 4": [
          "Interior Design Studio II",
          "Materials and Methods of Construction II",
          "Digital Design and Representation II",
          "History of Interior Design and Furniture II",
          "Building Services II (Electrical and Lighting)",
          "Environmental Design"
        ]
      },
      "3rd Year": {
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
        imageAlt: "Advanced interior design visualization",
        "Semester 5": [
          "Advanced Interior Design Studio I",
          "Construction Documentation",
          "Advanced Digital Design",
          "Building Services III (HVAC and Fire Safety)",
          "Furniture Design",
          "Interior Landscape Design"
        ],
        "Semester 6": [
          "Advanced Interior Design Studio II",
          "Project Management",
          "Sustainable Interior Design",
          "Professional Practice and Ethics II",
          "Elective Specialization",
          "Industry Internship"
        ]
      },
      "4th Year": {
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
        imageAlt: "Professional interior design project",
        "Semester 7": [
          "Specialized Design Studio",
          "Research Methods",
          "Advanced Construction Technology",
          "Business of Interior Design",
          "Portfolio Development",
          "Thesis Preparation"
        ],
        "Semester 8": [
          "Thesis Project",
          "Professional Development",
          "Industry Placement",
          "Final Portfolio",
          "Design Exhibition",
          "Graduation Project"
        ]
      }
    },
    "3-Year Diploma": {
      "1st Year": {
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
        imageAlt: "Basic interior design concepts",
        "Semester 1": [
          "Introduction to Interior Design",
          "Basic Drawing and Sketching",
          "Color Theory and Application",
          "History of Design",
          "Computer Basics for Design",
          "Materials and Finishes I"
        ],
        "Semester 2": [
          "Space Planning Fundamentals",
          "Technical Drawing",
          "Digital Design Tools I",
          "Design Communication",
          "Construction Basics",
          "Project Workshop I"
        ]
      },
      "2nd Year": {
        image: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80",
        imageAlt: "Intermediate design projects",
        "Semester 3": [
          "Residential Design Studio",
          "Materials and Finishes II",
          "Digital Design Tools II",
          "Lighting Design",
          "Building Systems",
          "Professional Practice I"
        ],
        "Semester 4": [
          "Commercial Design Studio",
          "Furniture and Fixtures",
          "3D Visualization",
          "Interior Detailing",
          "Sustainable Design Practices",
          "Project Workshop II"
        ]
      },
      "3rd Year": {
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
        imageAlt: "Advanced diploma projects",
        "Semester 5": [
          "Advanced Design Studio",
          "Project Management Basics",
          "Business of Interior Design",
          "Specialized Design Areas",
          "Portfolio Development",
          "Industry Workshop"
        ],
        "Semester 6": [
          "Final Project Studio",
          "Professional Practice II",
          "Client Presentation Skills",
          "Industry Internship",
          "Exhibition Design",
          "Graduation Project"
        ]
      }
    },
    "1-Year Diploma": {
      "Foundation": {
        image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80",
        imageAlt: "Quick start design fundamentals",
        "Term 1": [
          "Design Fundamentals",
          "Drawing and Visualization",
          "Digital Tools Essentials",
          "Materials and Finishes",
          "Space Planning Basics",
          "Design History Overview"
        ],
        "Term 2": [
          "Basic Design Studio",
          "Technical Drawing",
          "Computer Aided Design",
          "Color and Lighting",
          "Construction Basics",
          "Professional Communication"
        ]
      },
      "Advanced": {
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
        imageAlt: "Intensive design projects",
        "Term 3": [
          "Residential Design Project",
          "Commercial Design Basics",
          "3D Visualization",
          "Project Documentation",
          "Industry Practice",
          "Portfolio Development"
        ],
        "Term 4": [
          "Final Design Project",
          "Professional Practice",
          "Business Essentials",
          "Industry Internship",
          "Project Presentation",
          "Exhibition"
        ]
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-black">
      <h2 className="text-3xl font-bold mb-8 text-yellow-400">Course Curriculum</h2>
      <Tabs defaultValue="Bachelor's Program" className="w-full">
        <TabsList className="md:w-full flex flex-wrap  mb-16 bg-zinc-900 rounded-lg p-1 gap-2">
          {Object.keys(programs).map((program) => (
            <TabsTrigger
              key={program}
              value={program}
              className="flex-1 data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
            >
              {program}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(programs).map(([program, years]) => (
          <TabsContent key={program} value={program}>
            <Tabs defaultValue={Object.keys(years)[0]} className="w-full">
              <TabsList className="md:w-full  flex flex-wrap mb-16 rounded-lg bg-zinc-900 p-1 gap-2">
                {Object.keys(years).map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    className="flex-1 data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(years).map(([year, yearData]) => (
                <TabsContent key={year} value={year}>
                  <div className="mb-8">
                    <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg">
                      <img
                        src={yearData.image}
                        alt={yearData.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{year}</h3>
                    </div>
                    
                    <Tabs 
                      defaultValue={Object.keys(yearData).find(key => key.includes("Semester") || key.includes("Term"))} 
                      className="w-full"
                    >
                      <TabsList className="w-full mb-6 bg-zinc-900/50 p-1">
                        {Object.keys(yearData)
                          .filter(key => key.includes("Semester") || key.includes("Term"))
                          .map((period) => (
                            <TabsTrigger
                              key={period}
                              value={period}
                              className="flex-1 data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                            >
                              {period}
                            </TabsTrigger>
                          ))}
                      </TabsList>

                      {Object.entries(yearData)
                        .filter(([key]) => key.includes("Semester") || key.includes("Term"))
                        .map(([period, subjects]) => (
                          <TabsContent key={period} value={period}>
                            <Card className="bg-zinc-900 border-none">
                              <CardContent className="p-6">
                                <div className="grid gap-4">
                                  {subjects.map((subject, index) => (
                                    <div
                                      key={index}
                                      className="p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors"
                                    >
                                      <p className="text-white">{subject}</p>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </TabsContent>
                        ))}
                    </Tabs>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CurriculumSection;