import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero3 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#FFF9E5] items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        {/* Left Section */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/images/Asgaard sofa 1.png"
            alt="Asgaard sofa 1"
            width={1200} // Increased width
            height={1000} // Increased height
            objectFit="contain"
            className="max-w-full h-auto scale-105" // Slightly scales the image
          />
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
          <h1 className="text-2xl md:text-2xl font-poppins font-bold leading-tight">
            New Arrivals
          </h1>
          <h1 className="text-[48px] md:text-[48px] font-poppins font-bold leading-tight">
            Asgaard sofa
          </h1>
          <div>
            <Link href="/" className="text-base font-poppins font-normal relative">
              <span className="inline-block border-2 py-4 px-12 border-black">Order Now</span>
             
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
