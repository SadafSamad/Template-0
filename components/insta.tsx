import React from 'react';
import Image from 'next/image';

const Insta = () => {
  return (
    <div className="w-full bg-[#FAF4F4] flex items-center justify-center relative">
      {/* Background Image */}
      <Image
        src="/images/Rectangle 17.png"
        alt="Rectangle 17"
        width={1920} // Set a large width for responsiveness
        height={1080} // Aspect ratio maintained
        objectFit="cover" // Ensures the image covers the container
        className="w-full h-auto"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-black">
          Our Instagram 
        </h1>
        <br />
        
        <h1 className="text-xl md:text-xl font-poppins font-bold text-black">
          Follow our store on Instagram
        </h1> <br />
        <button className='border-2 font-poppins text-[24px] rounded-[100] bg-[#FAF4F480] py-2 px-10'>Follow Us</button>
      </div>
    </div>
  );
};

export default Insta;
