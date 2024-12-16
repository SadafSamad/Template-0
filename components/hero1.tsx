import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Hero1 = () => {
  return (
    (<div className="Poppins w-full mx-auto bg-[#FAF4F4] flex flex-col md:flex-row md:mx-auto items-center">
      {/* Inner container to structure content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly max-w-7xl px-4 py-28">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full md:w-1/2">
          {/* Image */}
          <div className="w-full flex justify-center md:justify-center">
            <Image
              src="/images/Granite square side table 1.png"
              alt="Granite square side table 1"
              width={500}
              height={500}
              className="max-w-full h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </div>

          {/* Text */}
          <h1 className="Poppins text-[32px] md:text-[48px] lg:text-5xl font-medium leading-tight text-center md:text-left">
            Side table
          </h1>

          {/* Link */}
          <div>
            <Link href="/" className="text-base font-normal relative">
              <span className="Poppins inline-block text-3xl font-medium">View More</span>
              <span className="absolute bottom-[-20px] left-0 h-[2px] bg-black w-full"></span>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full md:w-1/2">
          {/* Image */}
          <div className="w-full flex justify-center md:justify-center h-[464px]">
            <Image
              src="/images/Cloud sofa three seater + ottoman_3 1.png"
              alt="Cloud sofa three seater + ottoman"
              width={500}
              height={500}
              className="max-w-full h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </div>

          {/* Text */}
          <h1 className="Poppins text-[32px] md:text-[48px] lg:text-5xl font-medium leading-tight text-center md:text-left">
            Side table
          </h1>

          {/* Link */}
          <div>
            <Link href="/" className="text-base font-normal relative">
              <span className="Poppins inline-block text-3xl font-medium">View More</span>
              <span className="absolute bottom-[-20px] left-0 h-[2px] bg-black w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>)
  );
};

export default Hero1;
