import React from "react";
import { ReactComponent as Views } from "../assets/icons/views.svg";
import useColorThief from "../hooks/useColorThief";
import { storageBaseURL } from "../app/App";
import { fixDate } from "../pages/single-news/NewsHero";
import ComponentsLoader from './ComponentLoader';
import { useNavigate } from 'react-router';
import helpers from "../helpers";
import { colorThiefBaseURL } from './../app/App';
import PageLoader from './PageLoader';

const News = ({ news, to }) => {
  const { image, title, excerpt, created_at, views, slug } = news;
  const navigate = useNavigate();
  const { color, isLoading } = useColorThief(colorThiefBaseURL + image);
  if (isLoading) <PageLoader />

  const onImageClick = () => {
    const link = `/${to}/${slug}`;
    navigate(link);
    helpers.scrollTop();
  }

  return (
    <div className="w-full max-w-[400px] sm:max-w-[50vw] mb-6 md:mb-0">
      <div onClick={onImageClick} className='clickable'>
        <img
          className="object-cover object-center w-full"
          src={storageBaseURL + image}
          alt="news image"
        />
      </div>
      <div
        id="news-container"
        className="p-3 rounded-br-[1rem]  rounded-bl-[1rem] text-sm text-news-text"
        style={{
          border: `2px solid rgb(${color[0]},${color[1]},${color[2]})`,
          background: `rgba(${color[0]},${color[1]},${color[2]},0.5)`,
        }}
      >
        <div id="news-container" className=" overflow-hidden  h-[100px]">
          <div>
            <h3 className="text-x text-white"> {title} </h3>
            <p className="pt-1">{excerpt}...</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          {fixDate(created_at)}
          <div className="flex items-center">
            <Views className="mr-2" />
            {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
