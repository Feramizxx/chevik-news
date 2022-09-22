import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LayOut from "../../components/layout";
import img from "../../assets/img/President.png";
import "../../css/_hero-slider.css";
import helpers from "../../helpers";
import { useNavigate } from "react-router";
import storageNews from "../../temporary-storage";
import { memo } from "react";
const HeroSlider = memo(({ amount = 6 }) => {
  const newArray = storageNews[0].concat(storageNews[1])
  const slicedArray = newArray.slice(0, 4)

  const navigate = useNavigate();
  const navigateToInlineNews = () => {
    navigate('inlineNews/1');
  };
  return (
    <Carousel infiniteLoop={true} autoPlay={true} showArrows={true}>
      {slicedArray.map((item) => {
        return (
          <div
            onClick={navigateToInlineNews}
            className="cursor-pointer object-fit relative "
            key={item.id}
          >
            <img className="w-[100vw] " src={`..${item.image}`} />
            <p className="legend  slidercontent ">{item.text}</p>
          </div>
        );
      })}
    </Carousel>
  );
});
export default HeroSlider;
