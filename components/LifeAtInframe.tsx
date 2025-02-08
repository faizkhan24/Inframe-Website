import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { cards } from "../utils/constant";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const LifeAtInframe = () => {
  return (
    <section className="py-16 font-sans">
      <div className="container px-4 md:px-6  relative xl:left-[28rem] xl:mx-0 z-10">
        {/* Section Title */}
        <h2
      className={`text-2xl md:text-3xl font-bold text-left mb-4 ${poppins.className}`}
    >
      Life @ Inframe
    </h2>

    {/* Short Description Paragraph */}
    <p className={`text-left text-lg text-gray-600 mb-8 ${poppins.className}`}>
      Experience a vibrant, collaborative environment at Inframe where creativity and innovation thrive, shaping the future of design and business.
    </p>
        {/* Carousel */}
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-3/4 md:basis-1/2 xl:basis-[27.99%] flex justify-center"
              >
                <div className="my-8 w-full sm:w-3/4 md:w-[398px]">
                  <Card className="w-full h-[450px] md:h-[598px] overflow-hidden border border-gray-200 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                    {/* Card Image */}
                    <div className="relative w-full h-[450px] md:h-[598px] group-hover:filter-none filter grayscale transition-all duration-500">
                      <Image
                        src={card.image}
                        alt={card.title}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full rounded-t-lg"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

                    {/* Card Content */}
                    <CardContent className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end text-white">
                      <CardTitle className="text-lg md:text-xl font-sans font-bold leading-tight">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-sm md:text-base text-gray-300 mt-2">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LifeAtInframe;
