import React from "react";
import SliderPage from "../pages/SliderPage";
import NewsPage from "../pages/NewsPage";
import OurFaculties from "../pages/OurFaculties";
import AboutTheClinck from "../pages/AboutTheClinck";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <SliderPage />
        <NewsPage />
        <OurFaculties />
        <AboutTheClinck />
      </div>
    </div>
  );
};

export default Main;
