import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const TestimonialSlider = () => {
    const youtubeVideos = [
      "https://www.youtube.com/embed/D4gjVOXf9Io?si=9Puf8CfKbXe2NKpl",
      "https://www.youtube.com/embed/WGImQEWpfJE?si=MHzmbYkYT5lPZuEp",
      "https://www.youtube.com/embed/nQPYYIMWUFk?si=RVHa9XvrGi6JCJW4",
      "https://www.youtube.com/embed/wdKknte_cyk?si=Pq6o5XUQMgPkUcKc",
      "https://www.youtube.com/embed/8eEjcuKTP9Q?si=_f87ouVxWWmTEAnl",
      "https://www.youtube.com/embed/Wew-eKLoqXg?si=7PYYpHoCdL9dWN6X",
    ];
  
    return (
      <div>
          <h2
          className={`text-3xl font-bold py-3 mx-6 md:mx-0 ${poppins.className}`}
        >
         TESTIMONIALS
        </h2>
        <div className="w-60 mx-6 md:mx-0 h-1 mb-7 bg-yellow-400" ></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        {youtubeVideos.map((videoUrl, index) => (
          <div
            key={index}
            className="aspect-video bg-zinc-800 rounded-xl overflow-hidden"
          >
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title={`Testimonial Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
      </div>
     
    );
  };

  export default TestimonialSlider