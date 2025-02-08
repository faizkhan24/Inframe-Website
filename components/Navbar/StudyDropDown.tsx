"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { categories } from "../../utils/constant";
import { Poppins } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const StudyDropDown = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = ["All", "Art", "Design", "Business"]; // Added all categories list

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const matchesCategory =
          selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      }),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-yellow-300 hover:bg-yellow-400 ">
              <span className="flex items-center gap-1 text-md font-bold font-sans">
                Study
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-7 w-[350px] sm:w-[650px] md:w-[830px] lg:w-[970px] xl:w-[1200px] h-[800px] overflow-y-auto bg-white">
                <div className="flex flex-col lg:flex-row lg:gap-4 mb-6">
                  <div className="relative flex-1 mb-4 lg:mb-0">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search courses..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {allCategories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCategories.map((category) => (
                    <div key={category.title} className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        {category.title}
                      </h3>
                      <div className="space-y-4">
                        {category.items.map((item) => (
                          <div
                            key={item.title}
                            className="group rounded-lg border p-4 hover:bg-muted transition-colors"
                          >
                            <NavigationMenuLink asChild>
                              <div className="flex flex-col sm:flex-row gap-4">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full sm:w-24 sm:h-24 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                  <Link
                                    href={`/${item.title
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`}
                                    className="block"
                                  >
                                    <h4 className="text-sm font-medium leading-none mb-2">
                                      {item.title}
                                    </h4>
                                  </Link>
                                  <div className="text-sm text-muted-foreground mb-2">
                                    {item.links.map((link, index) => (
                                      <p key={index} className="mb-1">
                                        {/* <Link
                                            // className="hover:text-blue-500 hover:underline"
                                            href={link.href}
                                          > */}
                                        {link.text}
                                        {/* </Link> */}
                                      </p>
                                    ))}
                                  </div>
                                  <Link
                                    href={`/${item.title
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`}
                                    className="block"
                                  >
                                 
                                    <Button
                                      className={`my-3 bg-yellow-400 hover:bg-yellow-500 text-black  flex items-center space-x-2 px-5 py-3 rounded-md ${poppins.className}`}
                                    >
                                      <span>Explore Now</span>
                                      <FaArrowRight className="text-black" />
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default StudyDropDown;
