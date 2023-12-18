import React from "react";
import Slider from "react-slick";
import knau from "../../src/img/knau.png";
import fac3 from "../../src/img/facul3.png";
import fac4 from "../../src/img/fac4.png";
import fvm from "../../src/img/fvm.png";
import isido from "../../src/img/isido.png";
import itf from "../../src/img/itf.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const facult = [
  {
    id: 1,
    image: knau,
    name: "КНАУ",
  },
  {
    id: 2,
    image: fvm,
    name: "КНАУ",
  },
  {
    id: 3,
    image: fac4,
    name: "КНАУ",
  },
  {
    id: 4,
    image: fvm,
    name: "КНАУ",
  },
  {
    id: 5,
    image: isido,
    name: "КНАУ",
  },
  {
    id: 6,
    image: itf,
    name: "КНАУ",
  },
];
const OurPartners = () => {
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
    <div className="our_partners">
      <h3>Наши партнеры</h3>
      <Slider className="slider-block" {...settings}>
        <div className="partners_block">
          {facult.map((el) => (
            <div className="partners_box">
              <img src={el.image} alt="" />
              <p className="pertners_text">{el.name}</p>
            </div>
          ))}
        </div>
      </Slider>
    </div>
  );
};

export default OurPartners;
