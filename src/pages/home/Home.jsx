import React from 'react';
import HeroSlider from './HeroSlider';
import LayOut from "../../components/layout";
import LatestNews from "./LatestNews";
import AllNews from "./AllNews";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import helpers from "../../helpers";
import NewsHero from './NewsHero';
import image from "../../assets/img/reklam.png"
import MultipleSlider from './MultipleSlider';

const onArrowClick = () => {
    helpers.scrollTop('smooth')
}

const reklam= <img src={image} alt="reklamImage"/>
const Home = () => {
    return (
        <>
            <NewsHero reklam={reklam}/>
            <MultipleSlider  reklambtm={reklam}/>  
            {/* <HeroSlider /> */}
            {/* <LatestNews /> */}
            {/* <AllNews /> */}
            {/* <ArrowUp onClick={onArrowClick} className='fixed right-6 bottom-6 sm:right-12 sm:bottom-12 hover:cursor-pointer' /> */}
        </>
    )
}

export default Home;