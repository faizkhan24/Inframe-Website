'use client';

import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

const images = [
  '/IMG_8698.jpg',
  '/IMG_8829.jpg',
  '/1717492615506 - Copy (2) (1).jpg',
];

function ImageCarousel() {
  return (
    <Carousel
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="relative h-full"
    >
      <CarouselContent className="flex relative top-0">
        {images.map((src, index) => (
          <CarouselItem key={index} className="relative flex-shrink-0 w-full h-screen">
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ImageCarousel;
