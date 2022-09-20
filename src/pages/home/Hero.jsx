import React from "react";
import HeroSlider from "./HeroSlider";
import img from "../../assets/img/reklam.png";
import { memo } from "react";
const Hero = memo(() => {
  return (
    <div className="flex relative bottom-16 mb-8 justify-between max-nav:w-full">
      <HeroSlider />
      <div className="">
        <img className="w-[34vw] ml-4 pt-[50px] max-nav:hidden" src={img} />
      </div>
    </div>
  );
});

export default Hero;
