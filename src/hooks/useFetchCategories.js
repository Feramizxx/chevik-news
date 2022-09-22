import axios from "axios";
import { useEffect, useState } from "react";
import { apiBaseURL } from "../app/App";

const useFetchCategories = (lang = 'az') => {
    const [categories, setCategories] = useState([]);
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
    const [categoriesError, setCategoriesError] = useState({});

    const fetchCategories = async () => {
        try {
            const resposne = await axios.get(apiBaseURL + `categories?lang=${lang}`);
            setCategories(resposne.data.data);
        } catch (error) {
            setCategoriesError(error);
        } finally {
            setIsCategoriesLoading(false);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [lang]);

    return { categories, isCategoriesLoading, categoriesError, setCategories };
}

export default useFetchCategories;