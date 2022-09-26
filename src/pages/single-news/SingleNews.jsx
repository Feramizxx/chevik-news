import React from "react";
import NewsHero from "./NewsHero";
import MultipleSlider from "./MultipleSlider";
import LayOut from "../../components/layout";
import { useParams } from "react-router";
import useFetchOneNews from "../../hooks/useFetchOneNews";
import { AxiosError } from "axios";
import PageLoader from '../../components/PageLoader';
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { LanguageContext } from './../../contexts/LanguageContext';

const advertisement = {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    image: require('../../assets/img/trees.png')
}

export default function SinlgeNews() {
    return (
        <LayOut>
            <SingleNewsContext />
        </LayOut>
    );
}

const SingleNewsContext = () => {
    const { slug } = useParams();
    const { language } = useContext(LanguageContext);
    const { news, isNewsLoading, newsError } = useFetchOneNews(slug, language);
    if (isNewsLoading) return <PageLoader />

    if (newsError && newsError instanceof AxiosError) {
        if (newsError.resposne.status === 404) {
            return <Navigate to='/' />
        }
    }

    return (
        <>
            <div className="w-[80%] mr-auto ml-auto">
                <NewsHero news={news} advertisement={advertisement} />
                <MultipleSlider currentNews={news} />
            </div>
        </>
    );
}   
