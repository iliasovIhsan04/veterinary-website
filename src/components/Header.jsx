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
        <ul className="header_nav_block">
          <li>
            <a href="/#">
              Главная <MdKeyboardArrowDown size={20} />
            </a>
          </li>
          <div className="header_content_menu">
            <li>
              <a href="/#">
                О КНАУ <MdKeyboardArrowDown size={20} />
              </a>
            </li>
            <div className="drop_header">
              <div>
                <a href="#">Amazon</a>
              </div>
              <a href="#">Ihsan</a>
              <a href="#">ijjj</a>
            </div>
          </div>
          <div className="header_content_menu">
            <li>
              <a href="/#">
                Образование <MdKeyboardArrowDown size={20} />
              </a>
            </li>
            <div className="drop_header">
              <a href="#">Amazon</a>
              <a href="#">Ihsan</a>
              <a href="#">ijjj</a>
            </div>
          </div>
          <div className="header_content_menu">
            <li>
              <a href="/#">
                Абитуриентам <MdKeyboardArrowDown size={20} />
              </a>
            </li>
            <div className="drop_header">
              <a href="#">Amazon</a>
              <a href="#">Ihsan</a>
              <a href="#">ijjj</a>
            </div>
          </div>
          <div className="header_content_menu">
            <li>
              <a href="/#">
                Студентам <MdKeyboardArrowDown size={20} />
              </a>
            </li>
            <div className="drop_header">
              <a href="#">Amazon</a>
              <a href="#">Ihsan</a>
              <a href="#">ijjj</a>
            </div>
          </div>
          <div className="header_content_menu">
            <li>
              <a href="/#">
                Сотруничество <MdKeyboardArrowDown size={20} />
              </a>
            </li>
            <div className="drop_header">
              <a href="#">Amazon</a>
              <a href="#">Ihsan</a>
              <a href="#">ijjj</a>
            </div>
          </div>
          <div className="header_content_menu">
            <li>
              <a href="/#">
                Учобное подразделения <MdKeyboardArrowDown size={20} />
              </a>
            </li>
            <div className="drop_header">
              <a href="#">Amazon</a>
              <a href="#">Ihsan</a>
              <a href="#">ijjj</a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
