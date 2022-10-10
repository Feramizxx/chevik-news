import React from 'react';
import NewsBoard from "../../components/NewsBoard";
import Option from "../../components/ui/Option";
import useFetchLatestNews from '../../hooks/useFetchFeaturedNews';
import { useContext } from 'react';
import { LanguageContext } from './../../contexts/LanguageContext';
import PageLoader from './../../components/PageLoader';

const LatestNews = () => {
    const { language } = useContext(LanguageContext);
    const { latestNews, isLatestNewsLoading } = useFetchLatestNews(language);
    if (isLatestNewsLoading) return <PageLoader bg='bg-inherite' />;

    return (
        <div className='w-90%'>
            <Option clickable={false}>
                SON XƏBƏRLƏR
            </Option>
            <NewsBoard news={latestNews} amount={latestNews.length} />
        </div>
    );
};

export default LatestNews;