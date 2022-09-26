import useFetchNews from './../hooks/useFetchNews';
import NewsBoard from './NewsBoard';
import ComponentsLoader from './ComponentLoader';
import { useState, useRef, useEffect, useContext } from 'react';
import { LanguageContext } from './../contexts/LanguageContext';

const InfiniteNews = ({ type = 'news', slug }) => {
    const [page, setPage] = useState(1);
    const { language } = useContext(LanguageContext);
    const { news, isNewsLoading, fetchNews, newsError, hasMore } = useFetchNews(type);
    const emptyElementRef = useRef();
    const observer = useRef();

    useEffect(() => {
        if (isNewsLoading) return;
        if (observer.current) observer.current.disconnect();
        const callback = function (entries, observer) {
            if (entries[0].isIntersecting && hasMore) {
                setPage(page + 1);
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(emptyElementRef.current);
    }, [isNewsLoading, slug]);

    useEffect(() => {
        fetchNews(page, language, slug);
    }, [page, slug]);

    return (
        <>
            <NewsBoard news={news} amount={news.length} to={type} />
            <div ref={emptyElementRef} className="h-[20px]" />
            {newsError && <div className='w-full p-3 bg-inherit text-white text-xl font-bold flex items-center justify-center'> <p> Could not load news... </p> </div>}
            {!hasMore && <div className='w-full p-3 bg-inherit text-white text-xl font-bold flex items-center justify-center'> <p> There is no more news... </p>  </div>}
            {isNewsLoading && <ComponentsLoader bg='bg-inherit' />}
        </>
    );
}

export default InfiniteNews;