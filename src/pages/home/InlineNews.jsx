import React from "react";
import NewsHero from "./NewsHero";
import MultipleSlider from "./MultipleSlider";
import img from "../../assets/img/reklam.png";
import LayOut from "../../components/layout";
import { useParams } from "react-router";
import useFetchOneNews from "../../hooks/useFetchOneNews";
import { AxiosError } from "axios";
import PageLoader from '../../components/PageLoader';
import { Navigate } from 'react-router-dom'

const reklam = <img src={img} alt="reklamImage" />;
export default function InlineNews() {
  const { slug } = useParams();
  const { news, isNewsLoading, newsError } = useFetchOneNews(slug);
  if (isNewsLoading) return <PageLoader />

  if (newsError && newsError instanceof AxiosError) {
    if (newsError.status === 404) {
      return <Navigate to='/' />
    }
  }

  console.log(news);

  return (
    <LayOut>
      <div className="w-[80%] mr-auto ml-auto">
        <NewsHero news={news} advertisement={reklam} />
        {/* <MultipleSlider product={product} /> */}
      </div>
    </LayOut>
  );
}
