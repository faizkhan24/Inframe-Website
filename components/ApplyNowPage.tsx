"use client";

import React, { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (elementId: string, options: any) => any;
    };
  }
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, GraduationCap, Users, Building2, Trophy, BookOpen, Quote, MapPin, Mail, Phone } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import IndustryPartners from "./Courses/Partners";
import TestimonialCarousel from "./TestimonialSection ";
import Testimonial from "./Testimonials";
import { Poppins } from "next/font/google";
import WhyInframe from "./WhyInframe";
import CampusLife from "./CampusLife";
import ApplyNow from "./ApplyNow";
import { useAuth0 } from "@auth0/auth0-react";
import ApplyNowForm from "./ApplyNowForm";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;  // Keep it as a required function
    YT: {
      Player: new (elementId: string, options: any) => any;
    };
  }
}

const contacts = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    info: "+91 9649 9649 37",
    info2: "+91 9649 9649 70",
    bgColor: "bg-blue-500",
    hoverColor: "group-hover:bg-blue-600"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    info: "info@inframecollege.org",
    description: "We'll respond within 24 hours",
    bgColor: "bg-green-500",
    hoverColor: "group-hover:bg-green-600"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    info: "Inframe College",
    description: "09, Pal Link Road, Marudhar Nagar, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008",
    bgColor: "bg-purple-500",
    hoverColor: "group-hover:bg-purple-600"
  }
];

export default function ApplyPage() {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pluginRef = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  // YouTube player effect
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Store the original function if it exists
    const originalFunction = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'JW0YxVpnj9o',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          mute: 1,
          playlist: 'JW0YxVpnj9o'
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          }
        }
      });
    };

    return () => {
      // Restore the original function or set to a no-op function
      window.onYouTubeIframeAPIReady = originalFunction || (() => {});
    };
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
        setIsFormOpen(false);
      } else {
        setIsScrolled(false);
        setIsFormOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative ">
      {/* Enquiry Form Sheet */}
      <ApplyNowForm 
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        isScrolled={isScrolled}
      />

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
      {/* YouTube Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 scale-150">
          <div id="youtube-player" className="w-full h-full pointer-events-none" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transform translate-y-4 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] ${poppins.className}`}>
            Shape Your Future
            <br />
            in Design & Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl transform translate-y-4 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            Join India's premier design institute and unlock your creative potential with industry-leading programs and expert mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 transform translate-y-4 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
            <Button 
              className={`bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 h-14 text-lg ${poppins.className}`}
              onClick={() => setIsFormOpen(true)}
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              className={`bg-white/10 hover:bg-white/20 text-white border-white h-14 text-lg ${poppins.className}`}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/60 flex items-center justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        #youtube-player {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100vh;
          pointer-events: none;
        }
        
        #youtube-player iframe {
          width: 100vw;
          height: 100vh;
          pointer-events: none;
        }
      `}</style>
    </section>

      {/* Placement Partners */}
      <section className="py-20 max-w-7xl mx-auto  text-center">
       <IndustryPartners/>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
      <Testimonial/>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <WhyInframe/>
      </section>

      {/* Courses Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Programs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our wide range of specialized design programs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "B.Des Fashion Design",
                duration: "4 Years",
                type: "Full Time",
                image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              },
              {
                title: "Diploma in Interior Design",
                duration: "1 Year",
                type: "Full Time",
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              },
              {
                title: "Advanced Product Design",
                duration: "3 Years",
                type: "Full Time",
                image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              }
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.type}
                    </div>
                  </div>
                  <Button className="w-full mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Infrastructure */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">World-Class Infrastructure</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience learning in state-of-the-art facilities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Studios",
                image: "/campus images/DSC04140.jpg"
              },
              {
                title: "Computer Labs",
                image: "/campus images/1719471947426.jpg"
              },
              {
                title: "Exhibition Spaces",
                image: "/campus images/DSC04267.jpg"
              }
            ].map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-center">{facility.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Institute */}
      <CampusLife/>

      {/* Contact Section */}
      <section className={`py-24 bg-gradient-to-b from-gray-50 to-white ${poppins.className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We're here to help and would love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="group transform hover:-translate-y-2 transition-all duration-300"
            >
              <Card className="h-full border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${contact.bgColor} ${contact.hoverColor} rounded-full mb-6 flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110`}>
                    {contact.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {contact.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-700">
                      {contact.info}
                    </p>
                    {contact.info2 && (
                      <p className="text-lg font-medium text-gray-700">
                        {contact.info2}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {contact.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
      <ApplyNow/>
    </div>
  );
}