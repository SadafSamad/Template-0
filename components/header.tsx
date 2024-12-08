import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full bg-[#FBEBB5] p-3 flex items-center md:flex-col md:h-auto">
      <div className="max-w-7xl container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex md:flex-1"></div>

        {/* Center (Navigation Links) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
          <Link href={"/"} className="font-normal hover:text-gray-700 transition">
            Home
          </Link>
          <Link href={"/shop"} className="font-normal hover:text-gray-700 transition">
            Shop
          </Link>
          <Link href={"/about"} className="font-normal hover:text-gray-700 transition">
            About
          </Link>
          <Link href={"/contact"} className="font-normal hover:text-gray-700 transition">
            Contact
          </Link>
        </div>

        {/* Right (Icons) */}
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          <button className="hover:opacity-80 transition">
            <Image src={'/images/icon-acc.png'} width={20} height={20} alt='Account Icon' />
          </button>
          <button className="hover:opacity-80 transition">
            <CiSearch className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button className="hover:opacity-80 transition">
            <CiHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button className="hover:opacity-80 transition">
            <IoCartOutline className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
