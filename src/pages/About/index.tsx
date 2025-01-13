import React from "react";
import "./about.scss";
import mainImg from "./images/bg-1.jpg";
import extraImg from "./images/bg-2.jpg";
import icon1 from "./images/icon-wordpress.png";
import icon2 from "./images/icon-react.png";
import icon3 from "./images/icon-laravel.png";
import icon4 from "./images/icon-shopify.png";

export const About: React.FC = () => {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <div className="content">
          <div className="about-group">
            <div className="about-group--left">
              <div className="image-wrap">
                <img src={mainImg} alt="main-image" />
                <div className="extra-image">
                  <img src={extraImg} alt="extra-image" />
                </div>
                <span className="icon-1">
                  <img src={icon1} alt="icon-wordpress" />
                </span>
                <span className="icon-2">
                  <img src={icon2} alt="icon-react" />
                </span>
                <span className="icon-3">
                  <img src={icon3} alt="icon-laravel" />
                </span>
                <span className="icon-4">
                  <img src={icon4} alt="icon-shopify" />
                </span>
              </div>
            </div>
            <div className="about-group--right"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
