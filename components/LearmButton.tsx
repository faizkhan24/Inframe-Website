// components/LearnButton.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Globe, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const allCategories = ["All", "Marketing", "Business", "Data", "Design", "Tech", "Product", "Growth"];

const LearnButton = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Marketing",
      items: [
        {
          title: "SEO",
          description: "Learn SEO from industry experts",
          instructor: "Kaushal, Founder & MD, Infidigit",
          duration: "8 Weeks",
          type: "Live And Recorded",
          category: "Marketing",
          image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          title: "Digital Marketing",
          description: "Master digital marketing strategies",
          instructor: "Multiple mentors from Dunzo, Amazon",
          duration: "6 Months",
          type: "Live And Recorded",
          category: "Marketing",
          image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ]
    },
    {
      title: "Tech",
      items: [
        {
          title: "Full Stack Development",
          description: "Become a full stack developer",
          instructor: "Senior Engineers from Google",
          duration: "6 Months",
          type: "Live And Recorded",
          category: "Tech",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          title: "Data Science",
          description: "Master data science and analytics",
          instructor: "Data Scientists from Amazon",
          duration: "4 Months",
          type: "Live And Recorded",
          category: "Data",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
  })).filter(category => category.items.length > 0);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent z-50">
            <span className="flex items-center gap-1">
              Learn <ChevronDown className="h-4 w-4" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <div className="p-6 w-[900px]">
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2 mb-6 flex-wrap">
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {filteredCategories.map((category) => (
                  <div key={category.title} className="space-y-4">
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <div className="space-y-4">
                      {category.items.map((item) => (
                        <div key={item.title} className="group rounded-lg border p-4 hover:bg-muted transition-colors">
                          <NavigationMenuLink asChild>
                            <a href="#" className="block">
                              <div className="flex gap-4">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium leading-none mb-2">{item.title}</h4>
                                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                                  <p className="text-sm text-muted-foreground mb-2">{item.instructor}</p>
                                  <div className="flex gap-4 text-xs text-muted-foreground">
                                    <span>{item.duration}</span>
                                    <span>{item.type}</span>
                                  </div>
                                </div>
                              </div>
                            </a>
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
  );
};

export default LearnButton;
