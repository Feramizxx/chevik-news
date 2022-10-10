import React from "react";
import LayOut from "../../components/layout";
import LatestNews from "./LatestNews";
import AllNews from "./AllNews";
import ArrrowUp from "../../components/ArrowUp";
import Hero from "./Hero";
import MainContent from "./Main-content";
import { memo } from "react";

const advertisement = {
  id: 1,
  text: 'Lorem ipsum dolor sit amet consectetur.',
  image: require('../../assets/img/trees.png')
};

const Home = memo(() => {
  return (
    <div className="mr-auto pt-64 ml-auto w-[90%]">
      <Hero advertisement={advertisement} />
      <LatestNews />
      <MainContent />
      <AllNews />
      <ArrrowUp />
    </div>
  );
});

export default Home;
