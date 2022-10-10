import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../css/_hero-slider.css";
import { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useFetchSliderNews from "../../hooks/useFetchSliderPosts";
import { storageBaseURL } from "../../app/App";
import { useContext } from "react";
import { LanguageContext } from './../../contexts/LanguageContext';
import PageLoader from './../../components/PageLoader';

const HeroSlider = memo(({ amount = 6, type = 'tslider' }) => {
  const { language } = useContext(LanguageContext);
  const { sliderNews, isSliderNewsLoading, sliderNewsError } = useFetchSliderNews(type, language);
  const navigate = useNavigate();
  if (isSliderNewsLoading) return <PageLoader bg={'bg-inherit'} />

  const onClick = (slug) => {
    navigate(`/single-news/${slug}`);
  }

  return (
    <Carousel infiniteLoop={true} autoPlay={true} showArrows={true}>
      {sliderNews.map((news) => {
        return (
          <div
            className="clickable bg-cover bg-center w-full h-[80vh]"
            key={news.id}
            onClick={() => onClick(news.slug)}
            style={{
              backgroundImage: `url(${storageBaseURL + news.image})`
            }}
          />
        );
      })}
    </Carousel >
  );
});
export default HeroSlider;
