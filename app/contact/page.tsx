import { ContactUsForm } from "@/components/ContactUs";


import "@/components/style.css";


import ReelCard from "@/components/ReelCard";
import ApplyNow from "@/components/ApplyNow";


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
