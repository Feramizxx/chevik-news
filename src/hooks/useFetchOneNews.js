import axios from "axios";
import { useEffect, useState } from "react";
import { apiBaseURL } from "../app/App";

const useFetchOneNews = (slug, lang = 'az') => {
    const [news, setNews] = useState({});
    const [newsError, setNewsError] = useState({});
    const [isNewsLoading, setIsNewsLoading] = useState(true);

    const fetchOneNews = async () => {
        try {
            const url = apiBaseURL + `posts/${slug}?lang=${lang}`;
            const response = await axios.get(url);
            setNews(response.data.data);
        } catch (error) {
            setNewsError(error);
        } finally {
            setIsNewsLoading(false);
        }
    }

    useEffect(() => {
        fetchOneNews();
    }, [slug, lang])


    return { news, newsError, isNewsLoading };
}

export default useFetchOneNews;