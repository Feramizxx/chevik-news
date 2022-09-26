import { useState } from 'react';
import axios from 'axios';
import { apiBaseURL } from '../app/App';
import { useEffect } from 'react';

const useFetchNews = (type = 'posts') => {
    const [news, setNews] = useState([]);
    const [isNewsLoading, setIsNewsLoading] = useState(false);
    const [newsError, setNewsError] = useState(null);
    const [hasMore, setHasMore] = useState(false);

    const commonFetch = async (url, cb, page) => {
        setIsNewsLoading(true);
        try {
            const response = await axios.get(url);
            const data = response.data.data;
            cb(data);
            setHasMore(page !== data.lastPage);
        } catch (error) {
            console.log(error);
            setNews(error);
        } finally {
            setIsNewsLoading(false);
        }
    }

    const fetchNews = async (page = 1, lang = 'az', category = '') => {
        const url = apiBaseURL + `posts?sort=asc&lang=${lang}&page=${page}&${category !== '' ? `category=${category}` : ''}`;
        commonFetch(url, (data) => setNews([...news, ...data.posts]), page);
    }

    const fetchRubrics = async (page = 1, lang = 'az', slug = '') => {
        const url = apiBaseURL + `rubrics-posts?lang=${lang}&page=${page}&sort=asc&${slug !== '' ? `category=${slug}` : ''}`;
        commonFetch(url, (data) => setNews([...news, ...data.rubricposts]), page);

    }

    return { news, newsError, isNewsLoading, fetchNews: type === 'news' ? fetchNews : fetchRubrics, hasMore, setNews };
}

export default useFetchNews;