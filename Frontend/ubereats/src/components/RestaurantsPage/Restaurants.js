import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import FirstPage from "./firstPage/FirstPage";
import SecondPage from "./firstPage/SecondPage";

const Restaurants = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<FirstPage />} />     
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </div>
  );
};

export default Restaurants;
