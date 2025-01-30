import { ContactUsForm } from "@/components/ContactUs";
import { InstagramIcon } from "lucide-react";
import Head from "next/head";
import "@/components/style.css";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import ReelCard from "@/components/ReelCard";
import ApplyNow from "@/components/ApplyNow";

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

         <ApplyNow/>
        </section>
      </div>
    </>
  );
}
