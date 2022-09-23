import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RublikMain from "../pages/home/Rubliks/RublikMain";
import Rubric from '../pages/rubric/Rubric';
import Rubrics from '../pages/rubrics/Rubrics';
import InlineNews from "../pages/home/InlineNews";

export const apiBaseURL = process.env.REACT_APP_BASE_URL;
export const storageBaseURL = process.env.REACT_APP_STORAGE_URL;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-news/:slug' element={<InlineNews />} />
        <Route path='/rublicmain' element={<RublikMain />} />
        <Route path='/rublicInline' element={<Rubric />} />
        <Route path='/news/:slug' element={<Rubrics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
