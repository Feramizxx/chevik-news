import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { apiBaseURL } from './../app/App';

const useFetchRubrics = (lang = 'az') => {
    const [rubrics, setRubrics] = useState([]);
    const [isRubricsLoading, setIsRubricsLoading] = useState(true);
    const [rubricsError, setRubricsError] = useState({});

    const fetchRubrics = async () => {
        try {
            const response = await axios.get(apiBaseURL + `rubrics?lang=${lang}`);
            setRubrics(response.data.data);
        } catch (error) {
            setRubricsError(error);
        } finally {
            setIsRubricsLoading(false);
        }
    }

    useEffect(() => {
        fetchRubrics();
    }, [lang]);

    return { rubrics, isRubricsLoading, rubricsError };
}

export default useFetchRubrics;