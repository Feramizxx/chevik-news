import { createContext } from "react";
import { useState, useEffect } from "react";
import { en, ru, az } from '../assets/text-storage';
import PageLoader from './../components/PageLoader';

export const LanguageContext = createContext();

export const POSSIBLE_LANGUAGES = ['az', 'en', 'ru'];
const storage = { en, ru, az }

const LanguageContextProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const _lang = localStorage.getItem('lang');
        setSelectedLanguage(POSSIBLE_LANGUAGES.some((lang) => lang === _lang) ? _lang : 'az');
        setIsLoading(false);
    }, []);

    const setCurrentLanguage = (value) => {
        localStorage.setItem('lang', value);
        setSelectedLanguage(value);
    }

    if (isLoading) return <PageLoader bg='bg-inherit' />

    return (
        <LanguageContext.Provider value={{
            language: selectedLanguage,
            setCurrentLanguage,
            textStorage: storage[selectedLanguage]
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;