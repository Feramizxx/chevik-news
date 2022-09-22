import React from "react";
import LayOut from "../../components/layout";
import LatestNews from "./LatestNews";
import AllNews from "./AllNews";
import image from "../../assets/img/reklam.png";
import ArrrowUp from "../../components/ArrowUp";
import Hero from "./Hero";
import MainContent from "./Main-content";
import { memo } from "react";

const reklam = <img src={image} alt="reklamImage" />;


const Home = memo(() => {

  return (
    <LayOut>
      <div className="mr-auto pt-64 ml-auto w-[90%]">
        <Hero reklam={reklam} />
        <LatestNews />
        <MainContent />
        <AllNews />
        <ArrrowUp />
      </div>
    </LayOut>
  );
});

export default Home;
