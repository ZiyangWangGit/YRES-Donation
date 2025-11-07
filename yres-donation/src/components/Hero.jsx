import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white bg-[#3D96AB]">
      <div className="max-w-[900px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
        
        {/* Intro Text */}
        <p className="text-[#FFD13A] font-semibold p-2 tracking-widest">
          YORK REGION EDUCATIONAL SERVICES (YRES)
        </p>

        {/* Main Heading */}
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-4 leading-tight">
          Empower Learning Through Your Generosity
        </h1>

        {/* Typed animation for engagement */}
        <div className="flex justify-center items-center py-4">
          <p className="md:text-3xl sm:text-2xl text-lg font-semibold">
            Support
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-2xl text-lg font-semibold md:pl-3 pl-1 text-[#FFD13A]"
            strings={[
              "Our Students’ Dreams",
              "Innovative Education Programs",
              "Accessible Learning Opportunities",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </div>

        {/* Description */}
        <p className="md:text-xl text-md font-medium text-gray-100 px-4">
          Every donation helps YRES provide quality educational programs and
          resources for students in our community. Join us in shaping the future
          of learning.
        </p>

        {/* Donate Button */}
        <a
          href="https://www.canadahelps.org/en/charities/yorkeducation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#FFD13A] text-[#3D96AB] w-[220px] rounded-md font-bold my-8 mx-auto py-3 hover:bg-white hover:text-[#3D96AB] transition duration-300">
            Donate Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
