import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rubrics from "../pages/rubrics/Rubrics";
import NewsPage from "../pages/news/NewsPage";
import RubricsPage from "../pages/rubrics-page/RubricsPage";
import SinlgeNews from './../pages/single-news/SingleNews';
import SingleRubric from "../pages/single-rubric/SingleRubrics";

export const apiBaseURL = process.env.REACT_APP_BASE_URL;
export const storageBaseURL = process.env.REACT_APP_STORAGE_URL;
export const colorThiefBaseURL = process.env.REACT_APP_COLOR_THIEF_BASE_URL;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/:slug' element={<NewsPage />} />
        <Route path='/single-news/:slug' element={<SinlgeNews />} />
        <Route path='/rubrics' element={<Rubrics />} />
        <Route path='/rubrics/:slug' element={<RubricsPage />} />
        <Route path='/single-rubrics/:slug' element={<SingleRubric />} />
        {/* <Route path='/rubrics/:slug' element={<Rubrics />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
