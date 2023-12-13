import React from "react";
import knau from "../../src/img/knau.png";
import fac3 from "../../src/img/facul3.png";
import fac4 from "../../src/img/fac4.png";
import fvm from "../../src/img/fvm.png";
import isido from "../../src/img/isido.png";
import itf from "../../src/img/itf.png";

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

const OurFaculties = () => {
  return (
    <div className="our_faculties">
      <h1 className="title">Наши факултеты</h1>
      <div className="faculties_block">
        {facult.map((el) => (
          <div className="faculties_box">
            <img src={el.image} alt="" />
            <p className="faculties_text">{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFaculties;
