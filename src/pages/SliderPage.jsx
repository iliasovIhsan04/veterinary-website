import React from "react";
import girl from "../../src/img/girl.jpg";
import Slider from "react-slick";
import rektor from "../../src/img/rektor.jpg";
import univer from "../../src/img/univer.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    id: 1,
    image: girl,
  },
  {
    id: 2,
    image: rektor,
  },
  {
    id: 3,
    image: univer,
  },
];

const SliderPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    cssEase: "linear",
  };
  return (
    <div className="slider_page">
      <Slider className="slider_block" {...settings}>
        {partners.map((el) => (
          <img src={el.image} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderPage;
