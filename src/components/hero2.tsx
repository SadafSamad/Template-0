import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Hero2 = () => {
  return (
    (<div className="Poppins w-full mx-auto bg-[#FFFFFF] flex flex-col items-center gap-12 py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className='flex flex-col items-center gap-4'>
        {/* Title */}
        <div>
          <h1 className="font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Top Picks For You
          </h1>
        </div>

        {/* Subtitle */}
        <div>
          <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-[#9F9F9F] text-center">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
      </div> {/* Inner container to structure content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 ">
        {/* Section 1 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/2 h-full">
          <div className="flex justify-center h-[200px] w-[288px]">
            <Image
              src="/images/Trenton modular sofa_3 1.png"
              alt="Trenton modular sofa_3 1"
              width={200}
              height={200}
              className="max-w-full h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </div>
          <div className='flex flex-col gap-5'>
            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-start">
              Trenton modular sofa_3
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-center">
              Rs. 25,000.00
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/2 h-full">
          <div className="flex justify-center h-[200px] w-[288px]">
            <Image
              src="/images/Granite dining table with dining chair 1.png"
              alt="Granite dining table with dining chair 1"
              width={200}
              height={200}
              className="max-w-full h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </div>
          <div className='flex flex-col gap-5'>
            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-start">
              Granite dining table with <br /> dining chair
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-center">
              Rs. 25,000.00
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/2 h-full">
          <div className="flex justify-center h-[200px] w-[288px]">
            <Image
              src="/images/Outdoor bar table and stool 1.png"
              alt="Outdoor bar table and stool 1"
              width={200}
              height={200}
              className="max-w-full h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </div>
          <div className='flex flex-col gap-5'>
            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-start">
              Outdoor bar table and <br /> stool
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-center">
              Rs. 25,000.00
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/2 h-full">
          <div className="flex justify-center h-[200px] w-[288px]">
            <Image
              src="/images/Plain console with teak mirror 1.png"
              alt="Plain console with teak mirror 1"
              width={200}
              height={200}
              className="max-w-full h-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }} />
          </div>
          <div className='flex flex-col gap-5'>
            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-start">
              Plain console with teak <br /> mirror
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-center">
              Rs. 25,000.00
            </p>
          </div>
        </div>
      </div>
      {/* View More Link */}
      <div>
        <Link href="/" className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium relative">
          <span className="inline-block">View More</span>
          <span className="absolute bottom-[-18px] left-0 h-[2px] w-20 lg:bottom-[-28px] lg:left-0 lg:h-[2px] bg-black lg:w-32"></span>
        </Link>
      </div>
    </div>)
  );
};

export default Hero2;
