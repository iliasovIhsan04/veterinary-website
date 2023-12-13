import React from "react";
import SliderPage from "../pages/SliderPage";
import NewsPage from "../pages/NewsPage";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <SliderPage />
        <NewsPage />
      </div>
    </div>
  );
};

export default Main;
