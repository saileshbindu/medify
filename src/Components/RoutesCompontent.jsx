import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import SearchPage from "./SearchPage/SearchPage";

const RoutesCompontent = () =>{
    return(
        <BrowserRouter>
        <Routes>
             <Route path="/" element={<App />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
        </BrowserRouter>
    )

}

export default RoutesCompontent;