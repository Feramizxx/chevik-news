import React from "react";
import HeroSlider from "./HeroSlider";
import { memo } from "react";

const Hero = memo(({ advertisement }) => {
  return (
    <div className="md:flex relative bottom-16 mb-8 justify-between w-full">
      <HeroSlider />
      <div className="">
        <div className="border-2 border-white w-full md:w-[30vw] md:mx-4 h-full flex items-center justify-center font-bold text-[3rem]">
          <p className="max-w-[200px]"> Burada sizin reklam ola bilərdi </p>
        </div>
      </div>
    </div>
  );
});

export default Hero;
