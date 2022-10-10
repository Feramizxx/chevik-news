import React from "react";
import Slider from "react-slick";
import Option from "../../components/ui/Option";
import { memo } from "react";
import helpers from "../../helpers";
import News from "../../components/News";
import useFetchLatestNews from './../../hooks/useFetchFeaturedNews';
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import PageLoader from './../../components/PageLoader';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
};

const responsive = [
  {
    breakpoint: 3000,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

const MultipleSlider = memo(({ currentNews }) => {
  const { language } = useContext(LanguageContext);
  const { latestNews, isLatestNewsLoading, latestNewsError } = useFetchLatestNews(language);

  if (isLatestNewsLoading) return <PageLoader />

  return (
    <>
      <div className="mt-48">
        <Option className="mb-4" clickable={false}>
          Son dəqiqə
        </Option>
        <div className="mr-auto ml-auto  w-[80vw] ">
          <Slider responsive={responsive} className="mr-auto ml-auto" {...settings}>
            {latestNews.map((news) => {
              if (currentNews.id !== news.id)
                return (
                  <div className="p-1">
                    <News key={news.id} news={news} to='single-news' />
                  </div>
                );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
});

export default MultipleSlider;
