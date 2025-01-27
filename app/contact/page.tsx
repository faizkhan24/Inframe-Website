import { ContactUsForm } from "@/components/ContactUs";
import { InstagramIcon } from "lucide-react";
import Head from "next/head";
import "@/components/style.css";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import ReelCard from "@/components/ReelCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});
export default function page() {
  return (
    <>
     
      <div >
        <ContactUsForm />
        <ReelCard/>
        <section>
          <div className="bg bg1  "></div>

          <div className="bg-black w-full h-36 border-b-yellow-400 border-4 ">
            <div className="max-w-7xl mx-auto  flex justify-between items-center h-full px-6">
              <h1
                className={`text-2xl font-extrabold text-white ${poppins.className}`}
              >
                THE ART OF BUSINESS, THE BUSINESS OF DESIGN.
              </h1>

              <Button
                className={`
        text-lg py-7 px-9  bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black
        font-bold border-4 border-yellow-400 transition-all duration-300 ease-in-out
        hover:bg-gradient-to-l hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 
        hover:text-white shadow-lg rounded-lg ${poppins.className}`}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
