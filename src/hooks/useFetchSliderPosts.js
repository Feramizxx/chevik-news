import axios from 'axios';
import { useState } from 'react';
import { apiBaseURL } from './../app/App';
import { useEffect } from 'react';

const useFetchSliderNews = (type = 'tslider', lang = 'az') => {
    const [sliderNews, setSliderNews] = useState([]);
    const [isSliderNewsLoading, setIsSliderNewsLoading] = useState(true);
    const [sliderNewsError, setSliderNewsError] = useState({});

    const fetchSliderNews = async () => {
        try {
            const response = await axios.get(apiBaseURL + `posts?${type}=1&lang=${lang}`);
            setSliderNews(response.data.data.posts);
        } catch (error) {
            setIsSliderNewsLoading(error);
        } finally {
            setIsSliderNewsLoading(false);
        }
    }

    useEffect(() => {
        fetchSliderNews();
    }, [lang]);

    return { sliderNews, isSliderNewsLoading, sliderNewsError };
}

export default useFetchSliderNews;