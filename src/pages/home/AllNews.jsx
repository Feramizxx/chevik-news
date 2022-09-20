import React, { useEffect, useState } from 'react';
import Option from "../../components/ui/Option";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import NewsBoard from "../../components/NewsBoard";
import storageNews from '../../temporary-storage';
import InfiniteScroll from 'react-infinite-scroll-component';
import InfiniteBoard from "../../components/InfiniteBoard";

const AllNews = (props) => {
    return (
        <div>
            <Option clickable={true}>
                <div className='flex items-center text-black'>
                    Bu Həftə
                    <ArrowDown className='ml-2' />
                </div>
            </Option>
            <InfiniteBoard />
        </div>
    );
};

export default AllNews;