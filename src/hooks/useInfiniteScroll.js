import React, {useState} from 'react';
import storageNews from "../temporary-storage";

const UseInfiniteScroll = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [hasMore, setHasMore] = useState(currentPage < storageNews.length);

    const fetchNews = () => {
        setNews(news.concat(storageNews[currentPage]));

        const nextPage = currentPage + 1;
        setHasMore(nextPage < storageNews.length);
        setCurrentPage(nextPage);
    }

    return { news, hasMore, fetchNews }
};

export default UseInfiniteScroll;