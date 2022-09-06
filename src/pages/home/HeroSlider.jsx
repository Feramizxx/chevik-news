import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./heroSlider.css";

const slideImages = [
  {
    url: require('../../assets/img/President.png'),
    content: `Dövlət başçısı: "İonik-Adriatik boru kəməri ilə Azərbaycan qazı üç Balkan ölkəsinə nəql ediləcək"`,
  },
  {
    url: require('../../assets/img/President.png'),
    content: `Dövlət başçısı: "İonik-Adriatik boru kəməri ilə Azərbaycan qazı üç Balkan ölkəsinə nəql ediləcək"`,
  },
  {
    url: require('../../assets/img/President.png'),
    content: `Dövlət başçısı: "İonik-Adriatik boru kəməri ilə Azərbaycan qazı üç Balkan ölkəsinə nəql ediləcək"`,
  },
];
const HeroSlider = () => {
  return (
    <div className="flex justify-around  mt-8 px-4">
      <div className="relative max-xl:w-full hero-slider w-[65%]  ">
        <Slide duration={500} arrows={false} autoplay={false} indicators={true}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide  h-[70vh]" key={index}>
              <div
                className="h-[80vh]  relative bg-no-repeat w-[100%]  bg-cover"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              >
                <p className="absolute bottom-20 px-8 text-[24px] text-white">
                  {slideImage.content}
                </p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      {/* <div className="max-xl:hidden">
        <img className=" h-[70vh] w-[100% ]" src={require('../../assets/img/reklam.png')} />
      </div> */}
    </div>
  );
};

export default HeroSlider;
