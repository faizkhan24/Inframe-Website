// components/FloatingEnquiryForm.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const FloatingEnquiryForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show floating button after scrolling past 300px
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <div 
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 z-50 
          ${isVisible ? 'translate-x-0' : 'translate-x-full'} 
          ${isFormOpen ? 'hidden' : 'block'}`}
      >
        <Button 
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-8 rounded-l-lg -rotate-90 transform origin-left"
          onClick={() => setIsFormOpen(true)}
        >
          Enquire Now
        </Button>
      </div>

      {/* Floating Form */}
      <div 
        className={`fixed right-0 top-0 h-screen w-96 bg-white shadow-2xl transition-transform duration-300 z-50
          ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <Card className="h-full border-0 rounded-none">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Enquire Now</h2>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsFormOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone Number" />
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="state1">State 1</SelectItem>
                  <SelectItem value="state2">State 2</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city1">City 1</SelectItem>
                  <SelectItem value="city2">City 2</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ug">Undergraduate</SelectItem>
                  <SelectItem value="pg">Postgraduate</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bdes">B.Des</SelectItem>
                  <SelectItem value="mdes">M.Des</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spec1">Specialization 1</SelectItem>
                  <SelectItem value="spec2">Specialization 2</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                type="submit"
              >
                Submit and Download Brochure
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FloatingEnquiryForm;