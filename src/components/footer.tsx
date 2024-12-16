"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="Poppins text-gray-600 body-font">
        <div className="container px-8 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-6 pt-14 flex flex-col justify-center gap-1 text-lg text-[#9F9F9F]">
              <p>
                400 University Drive Suite 200 Coral
              </p>
              <p>
                Gables,
              </p>
              <p>
                FL 33134 USA
              </p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-8 px-6">
              <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3 gap-5 ">
                Links
              </h2>
              <nav className="list-none flex flex-col gap-8 h-full font-semibold text-black">
                <li>
                  <Link
                    href={"/Home"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/shop"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3 gap-5">
                Help
              </h2>
              <nav className="list-none mb-10 pt-6  space-y-10 font-semibold text-black">
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li></li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
                Newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="pt-7 w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 flex gap-2">
                  <input
                    type="text"
                    id="footer-field"
                    placeholder="Enter Your Email Adress "
                    name="footer-field"
                    className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 mt-1"
                  />
                  <p className="underline font-medium pt-3 text-[18px]">
                    SUBSCRIBE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-[82%] mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-32 border"></div>
        <div className="flex py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 sm:flex-row flex-col">
          <div className="flex sm:flex-row flex-col">
            <p className="sm:ml-6 sm:mt-0 mt-4 text-black">
              2022 Meubel House. All rights reverved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
