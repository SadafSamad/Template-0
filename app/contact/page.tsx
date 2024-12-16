import React from 'react';
import Header from '../shop/header2';
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {

  return (
    <>
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
          <h1 className="text-5xl font-medium">Contact</h1>
          <p className="text-xl mt-4">
            <Link href="/">Home</Link> &gt; Contact
          </p>
        </div>
      </section>
      <section className="bg-white py-16 Poppins">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Get In Touch With Us</h1>
            <p className="text-[#9F9F9F] mt-4 max-w-2xl mx-auto">
              For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" p-8 rounded-lg space-y-6">
              <div>
                <div className='flex gap-4'>
                  <Image
                    src="/images/location.png"
                    alt="Location Icon"
                    width={22}
                    height={22}
                    className="object-contain"
                    />
                  <h2 className="text-xl font-medium text-black">Address</h2>
                </div>
                <p className="text-gray-800 font-medium mt-2 pl-10">
                  236 5th SE Avenue, New <br /> York NY10000, United <br /> States
                </p>
              </div>
              <div>
                <div className='flex gap-4'>
                  <Image
                    src="/images/phone.png"
                    alt="Phone Icon"
                    width={22}
                    height={22}
                    className="object-contain"
                    />
                  <h2 className="text-xl font-medium text-black">Phone</h2>
                </div>
                <p className="text-gray-800 font-medium mt-2 pl-10">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <div className='flex gap-4'>
                  <Image
                    src="/images/clock.png"
                    alt="Clock Icon"
                    width={22}
                    height={22}
                    className="object-contain"
                    />
                  <h2 className="text-xl font-medium text-black">Working Time</h2>
                </div>
                <p className="text-gray-800 font-medium mt-2 pl-10">
                  Monday-Friday: 9:00 - <br /> 22:00<br />
                  Saturday-Sunday: 9:00 - <br /> 21:00
                </p>
              </div>
            </div>

            {/* Second Column (Contact Form) */}
            <div className="bg-gray-50 p-8">
              <form className="space-y-6" >
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-md font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Abc"
                    className="w-full mt-6 p-6 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-md font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Abc@def.com"
                    className="w-full mt-6 p-6 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-md font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="This is an optional"
                    className="w-full mt-6 p-6 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-md font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="I'd like to ask about"
                    className="w-full mt-6 p-6 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-4/12 py-3 border border-black rounded-xl text-black text-lg hover:bg-black hover:text-white transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Posts Section */}
      <section className="bg-[#FAF4F4] text-black py-24">
        <div className="container mx-auto px-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="space-y-3">
              <h2 className="text-black font-medium text-3xl">Free Delivery</h2>
              <p className="text-lg font-normal text-[#9F9F9F]">
                For all orders over $50, consectetur <br /> adipim scing elit.
              </p>
            </div>

            {/* Second Column */}
            <div className="space-y-3">
              <h2 className="text-black font-medium text-3xl">90 Days Return</h2>
              <p className="text-lg font-normal text-[#9F9F9F]">
                If the product has an issue, consectetur <br /> adipim scing elit.
              </p>
            </div>

            {/* Third Column */}
            <div className="space-y-3">
              <h2 className="text-black font-medium text-3xl">Secure Payments</h2>
              <p className="text-lg font-normal text-[#9F9F9F]">
                100% secure payments, consectetur <br /> adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
