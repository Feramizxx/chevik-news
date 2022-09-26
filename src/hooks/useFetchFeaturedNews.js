import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiBaseURL } from './../app/App';

const useFetchLatestNews = (lang = 'az') => {
    const [latestNews, setLatestNews] = useState([]);
    const [isLatestNewsLoading, setLatestNewsLoading] = useState(true);
    const [latestNewsError, setLatesNewsError] = useState({});

    const fetchLatestNews = async () => {
        try {
            const response = await axios.get(apiBaseURL + `posts?sort=asc&lang=${lang}`);
            setLatestNews(response.data.data.posts);
        } catch (error) {
            setLatesNewsError(error);
        } finally {
            setLatestNewsLoading(false);
        }
    }

    useEffect(() => {
        fetchLatestNews();
    }, [lang]);

    return { latestNews, isLatestNewsLoading, latestNewsError };
}

export default useFetchLatestNews;