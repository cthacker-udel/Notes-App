import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";

export const MainPage = () => {

    return(

        <BrowserRouter>
        
            <Routes>


                <Route path="*" element={}

                <Route path="/" element={<Navigate to="/mainpage" />} />

            </Routes>

        </BrowserRouter>
    
    
    );
};