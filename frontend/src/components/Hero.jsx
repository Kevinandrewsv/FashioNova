import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-12 py-10 sm:py-20">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left text-[#414141]">
        <div className="flex items-center gap-2 mb-4"></div>

        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-relaxed mb-6">
          Discover Your Unique Style Today
        </h1>
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
        </div>
      </div>

      {/* Hero Right Side Image */}
      <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
        <img
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
          src={assets.hero_img}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
