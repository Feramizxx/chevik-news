import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { apiBaseURL } from './../app/App';

const useFetchSingleRubric = (slug, lang = 'az') => {
    const [rubric, setRubric] = useState({});
    const [isRubricLoading, setIsRubricLoading] = useState(true);
    const [rubricError, setRubricError] = useState({});

    const fetchSingleRubric = async () => {
        try {
            const resposne = await axios.get(apiBaseURL + `rubrics-posts/${slug}?lang=${lang}`);
            setRubric(resposne.data.data);
        } catch (error) {
            setRubricError(error);
        } finally {
            setIsRubricLoading(false);
        }
    }

    useEffect(() => {
        fetchSingleRubric();
    }, [lang, slug]);

    return { rubric, isRubricLoading, rubricError };
}

export default useFetchSingleRubric;