import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Rubric from '../pages/rubric/Rubric';
import Rubrics from '../pages/rubrics/Rubrics';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rubrics/:category' element={<Rubrics />} />
                <Route path='/rubric/:id' element={<Rubric />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;