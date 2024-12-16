import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';

const Head = () => {
  return (
    <div className="Poppins w-full flex flex-col md:flex-row bg-[#FBEBB5] items-center pt-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-4">
        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
          {/* Left Section */}
          <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
            <h1 className="Poppins text-[32px] md:text-[64px] font-medium leading-tight">
              Rocket single <br /> seater
            </h1>
            <div className=''>
            <Link href="/shop" className="text-base font-normal relative">
              <span className="inline-block">
                Shop Now
              </span>
              <span
                className="absolute bottom-[-8px] left-0 h-[2px] bg-black"
                style={{ width: "calc(100% - 2px)" }}
              ></span>
            </Link></div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-4 md:mt-0">
            <Image
              src="/images/Rocket single seater 1.png"
              alt="Rocket single seater 1"
              width={1100}
              height={700}
              objectFit="contain"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;

// background: #FAF4F4;
