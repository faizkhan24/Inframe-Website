'use client'
import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ModernGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      url: "/campus images/DSC04216.jpg",
      alt: "Pow Wow celebration with red balloons",

      size: "large"
    },
    {
      url: "/campus images/DSC04169.jpg",
      alt: "Convocation ceremony",
  
      size: "medium"
    },
    {
      url: "/campus images/DSC04140.jpg",
      alt: "Students in knitting lab",

      size: "medium"
    },
    {
      url: "/campus images/1721738128651.jpg",
      alt: "Ethnic Day celebration",

      size: "medium"
    },
    {
      url: "/campus images/SKF02795.jpg",
      alt: "Ethnic Day celebration",

      size: "medium"
    },
    {
      url: "/campus images/1721737896096.jpg",
      alt: "Ethnic Day celebration",
  
      size: "medium"
    },
    {
      url: "/campus images/1717668347893 - Copy.jpg",
      alt: "Ethnic Day celebration",
  
      size: "medium"
    }
  ];


  const navigateGallery = (direction: number) => {
    if (selectedIndex !== null) {
      const newIndex = selectedIndex + direction;
      if (newIndex >= 0 && newIndex < images.length) {
        setSelectedIndex(newIndex);
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Large image - Pow Wow */}
        <div className="col-span-1 lg:col-span-2 aspect-[16/9] relative group">
          <img
            src={images[0].url}
            alt={images[0].alt}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => setSelectedIndex(0)}
          />
     
        </div>

        {/* Medium image - Convocation */}
        <div className="aspect-[9/11] relative group">
          <img
            src={images[1].url}
            alt={images[1].alt}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => setSelectedIndex(1)}
          />
     
        </div>
        

        {/* Medium image - Knitting Lab */}
        <div className="aspect-[4/3] relative group">
          <img
            src={images[2].url}
            alt={images[2].alt}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => setSelectedIndex(2)}
          />
        
        </div>

        {/* Medium image - Ethnic Day */}
        <div className="aspect-[4/3] relative group">
          <img
            src={images[3].url}
            alt={images[3].alt}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => setSelectedIndex(3)}
          />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">

          </div>
        </div>

        <div className="aspect-[4/3] relative group">
          <img
            src={images[4].url}
            alt={images[4].alt}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => setSelectedIndex(4)}
          />
     
        </div>

        <div className="col-span-1 lg:col-span-2 aspect-[16/9] relative group">
          <img
            src={images[5].url}
            alt={images[5].alt}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => setSelectedIndex(5)}
          />
        
 
       
        </div>

        <div className="aspect-[9/11] relative group">
          <img
            src={images[6].url}
            alt={images[6].alt}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => setSelectedIndex(6)}
          />
       
        </div>
        
        {/* Decorative element */}
      
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-16 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative">
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
           

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 disabled:opacity-50"
                onClick={() => navigateGallery(-1)}
                disabled={selectedIndex === 0}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 disabled:opacity-50"
                onClick={() => navigateGallery(1)}
                disabled={selectedIndex === images.length - 1}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernGallery;