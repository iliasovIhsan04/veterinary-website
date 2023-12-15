import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_block_all">
          <div className="footer_box">
            <p>Контакты</p>
            <div className="given">
              <FaMapMarkerAlt size={18} className="fi" />
              <span>Бишкек улица Медерова 68</span>
            </div>
            <div className="given">
              <FaPhone size={18} className="fi" />
              <span>+996704616802</span>
            </div>
            <div className="given">
              <MdEmail size={18} className="fi" />
              <span>knau-info@mail.ru</span>
            </div>
          </div>
          <div className="footer_box">
            <p>Байланыш</p>
            <div className="given">
              <FaMapMarkerAlt size={18} className="fi" />
              <span>Бишкек улица Медерова 68</span>
            </div>
            <div className="given">
              <FaPhone size={18} className="fi" />
              <span>+996704616802</span>
            </div>
            <div className="given">
              <MdEmail size={18} className="fi" />
              <span>knau-info@mail.ru</span>
            </div>
          </div>
          <div className="footer_box">
            <p>Contact</p>
            <div className="given">
              <FaMapMarkerAlt size={18} className="fi" />
              <span>Бишкек улица Медерова 68</span>
            </div>
            <div className="given">
              <FaPhone size={18} className="fi" />
              <span>+996704616802</span>
            </div>
            <div className="given">
              <MdEmail size={18} className="fi" />
              <span>knau-info@mail.ru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
