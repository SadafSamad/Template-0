import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../shop/header2";
import { Search } from "lucide-react";

const Blog = () => {
  return (
    <div className="Poppins">
      <Header />
      <section className=" relative h-[47vh] bg-cover bg-center">
        <div className="absolute inset-0">
          <Image
            src={"/images/shopbg.jpg"}
            alt="Shop Background"
            width={1920}
            height={1080}
            className="w-full h-full object-fill"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
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
                height: "auto",
              }}
            />
          </div>
          <h1 className="text-5xl font-medium">Blog</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Blog
          </p>
        </div>
      </section>
      {/* 2nd Section: Blog Content with Two Columns (65:35 Ratio) */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            {/* First Column (65% width) */}
            <div className="md:col-span-3 space-y-6">
              {/* First Post */}
              <div>
                <Image
                  src="/images/silver-MacBook.png"
                  alt="Going On"
                  width={5000}
                  height={5000}
                  className="w-full object-cover"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <Image
                  src="/images/icons.png"
                  alt="Going On"
                  width={500}
                  height={500}
                  className="mt-4 w-auto h-6 object-contain"
                />
                <h1 className="text-3xl font-medium mt-4">
                  Going all-in with millenial design
                </h1>
                <p className="text-gray-600 mt-4 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et <br /> dolore magna
                  aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                  In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                  blandit cursus risus at ultrices mi tempus imperdiet. Libero
                  enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                  iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                  libero. Pellentesque elit <br /> ullamcorper dignissim cras
                  tincidunt. Pharetra et ultrices neque ornare aenean euismod
                  elementum.
                </p>
                <Link
                  href="/blog"
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-normal relative flex flex-col mt-4"
                >
                  <span className="inline-block hover:underline hover:underline-offset-8">
                    Read More
                  </span>
                </Link>
              </div>

              {/* Second Post */}
              <div className="mt-12">
                <Image
                  src="/images/person-holding-ballpoint.png"
                  alt="Exploring New ways of decorating"
                  width={5000}
                  height={5000}
                  className="w-full object-cover"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <Image
                  src="/images/icons.png"
                  alt="Going On"
                  width={500}
                  height={500}
                  className="mt-4 w-auto h-6 object-contain"
                />
                <h1 className="text-3xl font-medium mt-4">
                  Exploring new ways of decorating
                </h1>
                <p className="text-gray-600 mt-4 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et <br /> dolore magna
                  aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                  In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                  blandit cursus risus at ultrices mi tempus imperdiet. Libero
                  enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                  iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                  libero. Pellentesque elit <br /> ullamcorper dignissim cras
                  tincidunt. Pharetra et ultrices neque ornare aenean euismod
                  elementum.
                </p>
                <Link
                  href="/blog"
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-normal relative flex flex-col mt-4"
                >
                  <span className="inline-block hover:underline hover:underline-offset-8">
                    Read More
                  </span>
                </Link>
              </div>

              {/* Third Post */}
              <div className="mt-12">
                <Image
                  src="/images/pen-writing-on-notebook.png"
                  alt="Third Post"
                  width={5000}
                  height={5000}
                  className="w-full object-cover"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <Image
                  src="/images/icons.png"
                  alt="Going On"
                  width={500}
                  height={500}
                  className="mt-4 w-auto h-6 object-contain"
                />
                <h1 className="text-3xl font-medium mt-4">
                  Handmade pieces that took time to make
                </h1>
                <p className="text-gray-600 mt-4 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et <br /> dolore magna
                  aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                  In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                  blandit cursus risus at ultrices mi tempus imperdiet. Libero
                  enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                  iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                  libero. Pellentesque elit <br /> ullamcorper dignissim cras
                  tincidunt. Pharetra et ultrices neque ornare aenean euismod
                  elementum.
                </p>
                <Link
                  href="/blog"
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-normal relative flex flex-col mt-4"
                >
                  <span className="inline-block hover:underline hover:underline-offset-8">
                    Read More
                  </span>
                </Link>
              </div>
            </div>

            {/* Second Column (35% width) for Recent Posts */}
            <div className="space-y-6 flex flex-col gap-24">
              <div className="space-y-6 md:col-span-1">
                {/* Search Box */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 pl-4 pr-10 border border-black rounded-lg outline-none focus:ring-2 focus:ring-[#FF3EB2]"
                  />
                  <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">
                    <Search className="w-6 h-6 text-black" />
                  </span>
                </div>

                {/* Categories */}
                <div className="p-8">
                  <h2 className="text-2xl font-medium mb-12">Categories</h2>
                  <ul className="space-y-12 text-[#9F9F9F]">
                    <li className="flex justify-between">
                      <span>Crafts</span> <span>2</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Design</span> <span>8</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Handmade</span> <span>7</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Interior</span> <span>1</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wood</span> <span>6</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-8 md:col-span-1">
                <h1 className="text-2xl font-medium mb-4">Recent Posts</h1>
                {/* Recent Post 1 */}
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/pen-and-paper.png"
                    alt="Recent Post 1"
                    width={100}
                    height={100}
                    className="object-cover"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <div>
                    <h2 className="text-black font-normal">
                      Going all-in with millenial design
                    </h2>
                    <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
                  </div>
                </div>

                {/* Recent Post 2 */}
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/read-more.png"
                    alt="Recent Post 2"
                    width={100}
                    height={100}
                    className="object-cover"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <div>
                    <h2 className="text-black font-normal">
                      Exploring new ways <br /> of decorating
                    </h2>
                    <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
                  </div>
                </div>

                {/* Recent Post 3 */}
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/laptop-pen-paper.png"
                    alt="Recent Post 3"
                    width={100}
                    height={100}
                    className="object-cover"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <div>
                    <h2 className="text-black font-normal">
                      Hand made pieces <br /> that took time to make
                    </h2>
                    <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
                  </div>
                </div>

                {/* Recent Post 4 */}
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/laptop-mobile-plant.png"
                    alt="Recent Post 4"
                    width={100}
                    height={100}
                    className="object-cover"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <div>
                    <h2 className="text-black font-normal">
                      Modern home in <br /> Milan
                    </h2>
                    <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
                  </div>
                </div>

                {/* Recent Post 5 */}
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/tea-book-glasses.png"
                    alt="Recent Post 5"
                    width={100}
                    height={100}
                    className="object-cover"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <div>
                    <h2 className="text-black font-normal">
                      Colorful office <br /> redesign
                    </h2>
                    <p className="text-[#9F9F9F] text-sm">03 Aug 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 text-center">
        <div className="flex justify-center gap-4">
          <Link href={`/shop?page=1`}>
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:text-black">
              1
            </div>
          </Link>
          <Link href={`/shop?page=2`}>
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:text-black">
              2
            </div>
          </Link>
          <Link href={`/shop?page=3`}>
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:text-black">
              3
            </div>
          </Link>
          <Link href={`/shop?page=next`}>
            <div className="w-20 h-16 flex items-center justify-center rounded-xl bg-[#FFF9E5] hover:bg-[#FBEBB5] hover:text-black">
              Next
            </div>
          </Link>
        </div>
      </section>
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
    </div>
  );
};

export default Blog;
