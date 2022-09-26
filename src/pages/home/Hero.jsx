import React from "react";
import HeroSlider from "./HeroSlider";
import { memo } from "react";

const Hero = memo(({ advertisement }) => {
  return (
    <div className="flex relative bottom-16 mb-8 justify-between max-nav:w-full">
      <HeroSlider />
      <div className="">
        <img className="w-[34vw] ml-4 pt-[50px] h-full max-nav:hidden" src={advertisement.image} />
      </div>
    </div>
  );
});

export default Hero;
