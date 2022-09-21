import React, { useEffect } from "react";
import { ReactComponent as Views } from "../assets/icons/views.svg";
import useColorThief from "../hooks/useColorThief";
import "../assets/styles/animation.css";
import "../assets/styles/scrolltext.css";
import { NavLink } from "react-router-dom";
import "../css/index.css";

const News = ({ news }) => {
  const { image, title, text, date, views, id } = news;
  const { color, isLoading, error } = useColorThief(image);

  if (isLoading)
    return (
      <div className="w-screen h-screen fixed top-0 left-0 bg-primary-bg flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="w-full   max-w-[400px] mb-6 md:mb-0">
      <NavLink to={`inlineNews/${id}`}>
        <img
          className="min-w-[250px] object-cover object-center"
          src={image}
          alt="news image"
        />
      </NavLink>
      <div
        id="news-container"
        className="p-3 rounded-br-[1rem]  rounded-bl-[1rem] rounded text-sm border-[1px]  border-news-empty-border text-news-text"
        style={{
          background: `rgb(${color[0]},${color[1]},${color[2]})`,
        }}
      >
        <div id="news-container" className=" overflow-hidden  h-[100px]">
          <div>
            <h3 className="text-x text-white"> {title} </h3>
            <p className="pt-1">{text}...</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-3">
          {date}
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
