import { experienceCamputLife } from '../utils/constant'
import { Poppins } from 'next/font/google';
import React from 'react'

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
  });

const CampusLife = () => {
  return (
    <div>
        <section className="py-20 bg-yellow-50 text-black"
              >
                <div className="container mx-auto px-4">
                  <h2
                    className={`text-4xl leading-snug md:leading-none md:text-5xl font-bold mb-16 text-center ${poppins.className}`}
                  >
                    EXPERIENCE CAMPUS LIFE
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {experienceCamputLife.map((img, index) => (
                      <div data-aos="flip-left"
                        key={index}
                        className={`relative overflow-hidden ${
                          index === 0 ? "md:col-span-2 md:row-span-2" : ""
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Campus Life ${index + 1}`}
                          className="w-full h-full object-cover aspect-square"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 hover:bg-yellow-400/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
        
    </div>
  )
}

export default CampusLife