import { createContext } from "react";
import { useState, useEffect } from "react";

export const LanguageContext = createContext();

export const POSSIBLE_LANGUAGES = ['en', 'az', 'ru'];

const LanguageContextProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    useEffect(() => {
        const _lang = localStorage.getItem('lang');
        setSelectedLanguage(POSSIBLE_LANGUAGES.some((lang) => lang === _lang) ? _lang : 'az');
    }, []);

    const setCurrentLanguage = (value) => {
        localStorage.setItem('lang', value);
        setSelectedLanguage(value);
    }

    return (
        <LanguageContext.Provider value={{
            language: selectedLanguage,
            setCurrentLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;