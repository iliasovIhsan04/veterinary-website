import React from "react";
import SliderPage from "../pages/SliderPage";
import NewsPage from "../pages/NewsPage";
import OurFaculties from "../pages/OurFaculties";
import AboutTheClinck from "../pages/AboutTheClinck";
import OurPartners from "../pages/OurPartners";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <SliderPage />
        <NewsPage />
        <OurFaculties />
        <AboutTheClinck />
        <OurPartners />
      </div>
    </div>
  );
};

export default Main;
