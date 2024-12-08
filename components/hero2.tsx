import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero2 = () => {
  return (
    <div className="w-full mx-auto bg-[#FFFFFF] py-12 flex flex-col items-center">
      {/* Title */}
      <div>
        <h1 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Top Picks For You
        </h1>
      </div>

      {/* Subtitle */}
      <div>
        <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#9F9F9F] text-center">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>

      {/* Inner container to structure content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
        {/* Section 1 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/4">
          <div className="w-full flex justify-center">
            <Image
              src="/images/Trenton modular sofa_3 1.png"
              alt="Trenton modular sofa_3 1"
              width={200}
              height={200}
              objectFit="contain"
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
              Trenton modular sofa_3
            </p>
            <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
              Rs. 25,000.00
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/4">
          <div className="w-full flex justify-center">
            <Image
              src="/images/Granite dining table with dining chair 1.png"
              alt="Granite dining table with dining chair 1"
              width={200}
              height={200}
              objectFit="contain"
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
              Granite dining table with dining chair
            </p>
            <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
              Rs. 25,000.00
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/4">
          <div className="w-full flex justify-center">
            <Image
              src="/images/Outdoor bar table and stool 1.png"
              alt="Outdoor bar table and stool 1"
              width={200}
              height={200}
              objectFit="contain"
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
              Outdoor bar table and stool
            </p>
            <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
              Rs. 25,000.00
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/4">
          <div className="w-full flex justify-center">
            <Image
              src="/images/Plain console with teak mirror 1.png"
              alt="Plain console with teak mirror 1"
              width={200}
              height={200}
              objectFit="contain"
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
              Plain console with teak mirror
            </p>
            <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
              Rs. 25,000.00
            </p>
          </div>
        </div>
      </div>

      {/* View More Link */}
      <div>
        <Link href="/" className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold relative">
          <span className="inline-block">View More</span>
          <span className="absolute bottom-[-4px] left-0 h-[2px] bg-black w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default Hero2;
