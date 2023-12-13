import React from "react";
import SliderPage from "../pages/SliderPage";
import NewsPage from "../pages/NewsPage";
import OurFaculties from "../pages/OurFaculties";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <SliderPage />
        <NewsPage />
        <OurFaculties />
      </div>
    </div>
  );
};

export default Main;
