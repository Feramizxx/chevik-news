import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { apiBaseURL } from "../app/App";

const useFetchSocials = () => {
    const [socials, setSocials] = useState({});
    const [isSocialsLoading, setIsSocialsLoading] = useState(true);
    const [socialsError, setCocialsError] = useState({});

    const fetchSocials = async () => {
        try {
            const response = await axios.get(apiBaseURL + 'socials');
            setSocials(response.data.data);
        } catch (error) {
            setCocialsError(error);
        } finally {
            setIsSocialsLoading(false);
        }
    }

    useEffect(() => {
        fetchSocials();
    }, []);

    return { socials, isSocialsLoading, socialsError };
}

export default useFetchSocials;