import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SoftwareLogos = () => {
    const softwareLogos = [
      { name: "AutoCAD", src: "/logos/pngegg (17).png" },
      { name: "SketchUp", src: "/logos/pngegg (18).png" },
      { name: "3dsMax", src: "/logos/pngegg (19).png" },
      { name: "V-Ray", src: "/logos/pngegg (20).png" },
      { name: "Revit", src: "/logos/pngegg (21).png" },
      { name: "Adobe Suite", src: "/logos/pngegg (22).png" },
      { name: "Lumion", src: "/logos/Symbol.png" },
      { name: "Rhino", src: "/logos/pngegg (23).png" },
    ];
  
    return (
  
      <div >
        <h2
          className={`text-3xl font-bold py-3 mx-6 md:mx-0 ${poppins.className}`}
        >
        SOFTWARE YOU WILL LEARN 
        </h2>
        <div className=" hidden md:block md:w-96  h-1 mb-5 bg-yellow-400" ></div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
        {softwareLogos.map((software) => (
          <div key={software.name} className="flex flex-col items-center">
            <div className=" flex items-center justify-center mb-4">
              <img
                src={software.src}
                alt={software.name}
                className="w-40 h-40 object-contain"
              />
            </div>
            <p className="text-center text-gray-300">{software.name}</p>
          </div>
        ))}
      </div>
      </div>
     
    );
  };

  export default SoftwareLogos