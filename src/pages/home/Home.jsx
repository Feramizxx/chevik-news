import React from 'react';
import LayOut from "../../components/layout";
import LatestNews from "./LatestNews";
import AllNews from "./AllNews";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import helpers from "../../helpers";

const onArrowClick = () => {
    helpers.scrollTop('smooth')
}

const Home = () => {
    return (
        <LayOut>
            <LatestNews/>
            <AllNews/>
            <ArrowUp onClick={onArrowClick} className='fixed right-6 bottom-6 sm:right-12 sm:bottom-12 hover:cursor-pointer'/>
        </LayOut>
    );
};

export default Home;