import React from 'react';
import HeroSlider from './HeroSlider';
import LayOut from "../../components/layout";
import LatestNews from "./LatestNews";
import AllNews from "./AllNews";
import ArrrowUp from '../../components/ArrowUp';

const Home = () => {
    return (
        <LayOut>
            {/* <HeroSlider /> */}
            <LatestNews />
            <AllNews />
            <ArrrowUp />
        </LayOut>
    )
}

export default Home;