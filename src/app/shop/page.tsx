"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartStyle from "../shared/cartstyle";
import { SlidersHorizontal } from "lucide-react";
import Header from "./header2";

const Shop = () => {

  const sofadesisgn = [
    {
      id: 1,
      slug: "trent",
      image: "/images/Trenton modular sofa_3 1.png",
      description: "Trenton modular sofa_3",
      rupees: "Rs. 250,000.00",
    },
    {
      id: 2,
      slug: "Grani",
      image: "/images/Granitedining.png",
      description: "Granite dining table with dining chair",
      rupees: "Rs. 250,000.00",
    },
    {
      id: 3,
      slug: "out",
      image: "/images/Outdoor bar table and stool 1.png",
      description: "Outdoor bar table and stool",
      rupees: "Rs. 250,000.00",
    },
    {
      id: 4,
      slug: "pln",
      image: "/images/Plain console with teak mirror 1.png",
      description: "Plain console with teak mirror",
      rupees: "Rs. 250,000.00",
    },
    {
      id: 5,
      slug: "grin",
      image: "/images/Plainconsole.png",
      description: "Grain coffee table",
      rupees: "Rs. 150,000.00",
    },
    {
      id: 6,
      slug: "knt",
      image: "/images/Kent coffee table 1.png",
      description: "Kent coffee table",
      rupees: "Rs. 250,000.00",
    },
    {
      id: 7,
      slug: "rond",
      image: "/images/Outdoor sofa set 1.png",
      description: "Round coffee table_color 2",
      rupees: "Rs. 251,000.00",
    },
    {
      id: 8,
      slug: "recl",
      image: "/images/Reclaimed teak Sideboard 1.png",
      description: "Reclaimed teak coffee table",
      rupees: "Rs. 25,200.00",
    },
    {
      id: 9,
      slug: "pln",
      image: "/images/Plainconsole.png",
      description: "Plain console_",
      rupees: "Rs. 252,000.00",
    },
    {
      id: 10,
      slug: "teak",
      image: "/images/Reclaimed teak Sideboard 1.png",
      description: "Reclaimed teak Sideboard",
      rupees: "Rs. 258,000.00",
    },
    {
      id: 11,
      slug: "sjp",
      image: "/images/Outdoor sofa set 1.png",
      description: "SJP_0825 ",
      rupees: "Rs. 20,000.00",
    },
    {
      id: 12,
      slug: "bella",
      image: "/images/Bella chair and table 1.png",
      description: "Bella chair and table",
      rupees: "Rs. 200,000.00",
    },
    {
      id: 13,
      slug: "sqr",
      image: "/images/cloudsofa.png",
      description: "Granite square side table",
      rupees: "Rs. 100,000.00",
    },
    {
      id: 14,
      slug: "asgrd",
      image: "/images/Asgaard sofa 1.png",
      description: "Asgaard sofa",
      rupees: "Rs. 244,000.00",
    },
    {
      id: 15,
      slug: "maya",
      image: "/images/sofaseater.png",
      description: "Maya sofa three seater",
      rupees: "Rs. 115,000.00",
    },
    {
      id: 16,
      slug: "sofa",
      image: "/images/sidetable 1.png",
      description: "Outdoor sofa set",
      rupees: "Rs. 244,000.00",
    },
  ];

  const [selecteditem, setselecteditem] = useState("trent");
  const selecteditemdata = sofadesisgn.find(
    (item) => item.slug === selecteditem
  );
  console.log(selecteditemdata);

  return (
    (<div>
      <Header />
      <section className="Poppins relative h-[47vh] bg-cover bg-center">
        <div className="absolute inset-0">
          <Image
            src={"/images/shopbg.jpg"}
            alt="Shop Background"
            width={1920}
            height={1080}
            className="w-full h-full object-fill"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
          <div>
            <Image
              src="/images/shop.png"
              alt="Shop Icon"
              width={100}
              height={100}
              className="object-cover rounded-full"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <h1 className="text-5xl font-medium">Shop</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Shop
          </p>
        </div>
      </section>
      <section className="pt-8">
        <div className="flex py-6 bg-[#FAF4F4] justify-around items-center">
          <div className="flex space-x-6 font-semibold items-center">
            <h2 className="flex gap-2">
              {" "}
              <SlidersHorizontal />
              Filter
            </h2>
            <Image
              src="/images/Vector.png"
              alt="logo"
              width={20}
              height={20}
              style={{
                maxWidth: "100%",
                height: "auto"
              }}></Image>
            <Image
              src="/images/view-list.png"
              alt="logo"
              width={20}
              height={20}
              style={{
                maxWidth: "100%",
                height: "auto"
              }}></Image>
            <Image
              src="/images/Line-5.png"
              alt="line"
              width={2}
              height={1}
              className="text-gray-800"
              style={{
                maxWidth: "100%",
                height: "auto"
              }}></Image>
            <h2 className="hidden sm:block">Showing 1-16 of 132 results</h2>
          </div>
          <div className="flex space-x-4">
            <label
              htmlFor="name"
              className="hidden sm:block mt-4 text-md font-semibold text-gray-800 "
            >
              Show
            </label>
            <input
              type="text"
              id="name"
              placeholder="16"
              className="mt-1 block border py-1 w-12 text-center rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />

            <label
              htmlFor="name"
              className="hidden sm:block mt-4  text-md font-semibold text-gray-800 "
            >
              Short by
            </label>
            <input
              type="text"
              id="name"
              placeholder=" default"
              className="mt-1 hidden sm:block border py-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </section>
      {/* Second Section: Product Grid */}
      <section className="bg-white text-black py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {sofadesisgn.map((item) => (
            <div
              onClick={() => setselecteditem(item.slug)}
              key={item.id}
              className="flex gap-x-4 items-center justify-center cursor-pointer"
            >
              <CartStyle
                image={item.image}
                description={item.description}
                rupees={item.rupees}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Pagination Section */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-4">
          <Link href={`/shop?page=1`}>
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:text-black">
              1
            </div>
          </Link>
          <Link href={`/shop?page=2`}>
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:text-black">
              2
            </div>
          </Link>
          <Link href={`/shop?page=3`}>
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:text-black">
              3
            </div>
          </Link>
          <Link href={`/shop?page=next`}>
            <div className="w-20 h-10 flex items-center justify-center rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:text-black">
              Next
            </div>
          </Link>
        </div>
      </section>
      {/* 3RD Section: CONCEPT Posts */}
      <section className="bg-[#FAF4F4] text-black py-24">
        <div className="container mx-auto px-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="space-y-2">
              <h2 className="text-black font-medium text-3xl">Free Delivery</h2>
              <p className="text-lg font-normal text-[#9F9F9F]">
                For all orders over $50, consectetur <br /> adipim scing elit.
              </p>
            </div>

            {/* Second Column */}
            <div className="space-y-2">
              <h2 className="text-black font-medium text-3xl">90 Days Return</h2>
              <p className="text-lg font-normal text-[#9F9F9F]">
                If the product has an issue, consectetur <br /> adipim scing elit.
              </p>
            </div>

            {/* Third Column */}
            <div className="space-y-2">
              <h2 className="text-black font-medium text-3xl">Secure Payments</h2>
              <p className="text-lg font-normal text-[#9F9F9F]">
                100% secure payments, consectetur <br /> adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
};

export default Shop;
