import React from 'react';
import LayOut from "../../components/layout";
import LatestNews from "./LatestNews";
import AllNews from "./AllNews";
import NewsHero from './NewsHero';
import image from "../../assets/img/reklam.png"
import MultipleSlider from './MultipleSlider';
import ArrrowUp from '../../components/ArrowUp';

const reklam = <img src={image} alt="reklamImage" />
const Home = () => {
    return (
        <LayOut>
            {/* <NewsHero reklam={reklam} />
            <MultipleSlider reklambtm={reklam} /> */}
            <LatestNews />
            <AllNews />
            <ArrrowUp />
        </LayOut >
    )
}

export default Home;