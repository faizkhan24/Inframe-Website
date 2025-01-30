import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

const partners = [
    { name: "Urban Foundry", logo: "/company logo/78394a3a-4e2c-4059-b61b-9277920588e7.jpg" },
    { name: "OneClick", logo: "/company logo/logo (1).pn" },
    { name: "Architect Era", logo: "/company logo/architect era logo.jpg" },
    { name: "Art Maker", logo: "/company logo/Art Maker  2.png" },
    { name: "Design Daily Landscape", logo: "/company logo/DesignDailyLandscape.png" },
    { name: "Hunarship", logo: "/company logo/download (1).png0" },
    { name: "Being Nest", logo: "/company logo/download.png" },
    { name: "GM Final", logo: "/company logo/GM_Final-Logo02.png" }
  ];
const IndustryPartners = () => {
  return (
    <div>
      <section className="py-16 bg-zinc-900 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold text-center text-white mb-12">
            Our Industry Partners
          </h2>
        </div>
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full  "
                />
              </motion.div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
};

export default IndustryPartners;
