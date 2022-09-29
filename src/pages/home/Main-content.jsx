import React from "react";
import { useState } from "react";
import useFetchSliderNews from './../../hooks/useFetchSliderPosts';
import { Carousel } from "react-responsive-carousel";
import PageLoader from './../../components/PageLoader';
import { useNavigate } from 'react-router-dom';
import { storageBaseURL } from "../../app/App";

const MainContent = () => {
  const { sliderNews, isSliderNewsLoading, sliderNewsError } = useFetchSliderNews('bslider');
  const [currentNews, setCurrentNews] = useState({});
  const navigate = useNavigate();
  if (isSliderNewsLoading) return <PageLoader />

  const onClick = (slug) => {
    navigate(`/single-news/${slug}`);
  }

  return (
    <div className="pb-8  relative flex justify-between max-nav:items-center max-nav:flex-col">
      <div className="w-[90%] max-nav:w-full max-nav:px-0 ">
        <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} onChange={(index, item) => {
          setCurrentNews(item)
        }}>
          {sliderNews.map((news) => {
            return (
              <div
                className="cursor-pointer object-fit relative "
                key={news.id}
                onClick={() => onClick(news.slug)}
              >
                <img className="w-[100vw] " src={storageBaseURL + news.image} />
                <p className="legend  slidercontent ">{news.excerpt}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="flex   ml-4 pt-[48px] px-4 w-[40%] max-nav:w-[100%] max-nav:px-0 max-nav:ml-0 flex-col">
        <div id="news-container" className="overflow-auto max-h-[600px] ">
          <h2 className="text-[18px]">
            {currentNews.title || sliderNews[0].title}
          </h2>

          <p className="text-[0.8vw] max-nav:text-[1rem] items-center">
            {currentNews.excerpt || sliderNews[0].excerpt}
          </p>
        </div>

      </div>
    </div>
  );
};

export default MainContent;
