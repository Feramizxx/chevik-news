import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RublikMain from "../pages/home/Rubliks/RublikMain";
import LayOut from "../components/layout";

const App = () => {
  return (
    <LayOut>
      <BrowserRouter>
        <Routes>
          <Route path="/Rublik" element={<RublikMain />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LayOut>
  );
};

export default App;
