import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RublikMain from "../pages/home/Rubliks/RublikMain";
import Rubric from '../pages/rubric/Rubric';
import Rubrics from '../pages/rubrics/Rubrics';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Rublik" element={<RublikMain />} />
        <Route path='/rubrics/:category' element={<Rubrics />} />
        <Route path='/rubric/:id' element={<Rubric />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
