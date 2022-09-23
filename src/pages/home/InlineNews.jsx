import React from "react";
import NewsHero from "./NewsHero";
import MultipleSlider from "./MultipleSlider";
import LayOut from "../../components/layout";
import { useParams } from "react-router";
import useFetchOneNews from "../../hooks/useFetchOneNews";
import { AxiosError } from "axios";
import PageLoader from '../../components/PageLoader';
import { Navigate } from 'react-router-dom';

const advertisement = {
  id: 1,
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
  image: require('../../assets/img/trees.png')
}

export default function InlineNews() {
  const { slug } = useParams();
  const { news, isNewsLoading, newsError } = useFetchOneNews(slug);
  if (isNewsLoading) return <PageLoader />

  if (newsError && newsError instanceof AxiosError) {
    if (newsError.status === 404) {
      return <Navigate to='/' />
    }
  }


  return (
    <LayOut>
      <div className="w-[80%] mr-auto ml-auto">
        <NewsHero news={news} advertisement={advertisement} />
        <MultipleSlider product={news} />
      </div>
    </LayOut>
  );
}
