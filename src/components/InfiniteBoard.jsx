import React from 'react';
import NewsBoard from "./NewsBoard";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Logo from './Logo';

const InfiniteBoard = ({ category }) => {
    const { news, hasMore, fetchNews } = useInfiniteScroll({ category });

    return (
        <InfiniteScroll
            dataLength={news.length}
            next={fetchNews}
            hasMore={hasMore}
            loader={<p className='w-full flex justify-center'> <Logo /> </p>}
        >
            <NewsBoard news={news} amount={news.length} />
        </InfiniteScroll>
    );
};

export default InfiniteBoard;