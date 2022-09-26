import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../css/_hero-slider.css";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import useFetchSliderNews from "../../hooks/useFetchSliderPosts";
import { storageBaseURL } from "../../app/App";
import { useContext } from "react";
import { LanguageContext } from './../../contexts/LanguageContext';
import PageLoader from './../../components/PageLoader';

const HeroSlider = memo(({ amount = 6, type = 'tslider' }) => {
  const { language } = useContext(LanguageContext);
  const { sliderNews, isSliderNewsLoading, sliderNewsError } = useFetchSliderNews(type, language);
  if (isSliderNewsLoading) return <PageLoader bg={'bg-inherit'} />

  return (
    <Carousel infiniteLoop={true} autoPlay={true} showArrows={true}>
      {sliderNews.map((news) => {
        return (
          <NavLink
            className="cursor-pointer object-fit relative "
            key={news.id}
          >
            <img className="w-[100vw] " src={`${storageBaseURL + news.image}`} />
            <p className="legend  slidercontent ">{news.excerpt}</p>
          </NavLink>
        );
      })}
    </Carousel>
  );
});
export default HeroSlider;
