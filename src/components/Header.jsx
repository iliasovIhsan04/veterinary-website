import React from "react";
import "../style/css/components.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdKeyboardArrowDown, MdArrowForwardIos } from "react-icons/md";
const Header = () => {
  return (
    <div className="header">
      <div className="header_block_all">
        <div className="container">
          <div className="header_all">
            <div className="ph_em_address_block_all">
              <div className="ph_em_address_box">
                <a href="">
                  <FaPhoneFlip className="fi fi_ph_em" /> +996704616802
                </a>
              </div>
              <div className="ph_em_address_box ph_em_left">
                <a href="">
                  <MdEmail className="fi fi_ph_em" /> veterinary-info@gmail.ru
                </a>
              </div>
              <div className="ph_em_address_box ph_em_left">
                <a href="">
                  <FaMapMarkerAlt className="fi fi_ph_em" /> Адрес:64/1
                  ул.Манас, Бишкек
                </a>
              </div>
            </div>
            <div className="information_block_all">
              <div className="information_box in_box1">
                <FaFacebook className="fi" />
              </div>
              <div className="information_box in_box2">
                <IoLogoYoutube className="fi" />
              </div>
              <div className="information_box in_box3">
                <FaInstagramSquare className="fi " />
              </div>
              <div className="information_box in_box4">
                <FaTelegram className="fi" />
              </div>
              <div className="information_box in_box5">
                <IoLogoWhatsapp className="fi" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header_nav_block">
          <a href="/#">
            Главная <MdKeyboardArrowDown size={20} />
          </a>
          <div className="block_hover">
            <div className="a">
              <a href="/#">
                О КНАУ <MdKeyboardArrowDown size={20} />
              </a>
            </div>
            <div className="hover_active">
              <a href="#">
                О нас <MdArrowForwardIos className="mt" size={15} />
              </a>
              <a href="#">
                Руководство <MdArrowForwardIos className="mt" size={15} />
              </a>
              <a href="#">
                Миссия КНАУ <MdArrowForwardIos className="mt" size={15} />
              </a>
              <a href="#">
                Структура <MdArrowForwardIos className="mt" size={15} />
              </a>
            </div>
          </div>
          <a href="/#">
            Образование <MdKeyboardArrowDown size={20} />
          </a>
          <a href="/#">
            Абитуриентам <MdKeyboardArrowDown size={20} />
          </a>
          <a href="/#">
            Студентам <MdKeyboardArrowDown size={20} />
          </a>
          <a href="/#">
            Сотруничество <MdKeyboardArrowDown size={20} />
          </a>
          <a href="/#">
            Учобное подразделения <MdKeyboardArrowDown size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
