import React from 'react';
import Image from "next/image";

const Insta = () => {
  return (
    (<div className="Poppins w-full bg-[#FAF4F4] flex items-center justify-center relative">
      {/* Background Image */}
      <Image
        src="/images/Rectangle 17.png"
        alt="Rectangle 17"
        // Set a large width for responsiveness
        width={1920}
        // Aspect ratio maintained
        height={1080}
        className="w-full h-auto"
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover"
        }} />
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          Our Instagram 
        </h1>
        <br />
        
        <h1 className="text-xl md:text-2xl font-normal text-black">
          Follow our store on Instagram
        </h1> <br />
        <button className='border-2 text-[24px] rounded-full shadow-xl bg-[#FAF4F4] py-4 px-24'>Follow Us</button>
      </div>
    </div>)
  );
};

export default Insta;
