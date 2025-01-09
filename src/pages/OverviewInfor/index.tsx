import React from "react";
import "./OverviewInfor.scss";
import iconDed from "./images/dedication.png";
import iconSma from "./images/smart-work.png";
import iconInt from "./images/intelligence.png";

export const OverviewInfor: React.FC = () => {
  return (
    <section className="section-overviewinfor">
      <div className="container">
        <div className="features-list">
          <div className="features-list--item">
            <div className="titles">
              <div className="title">
                <span className="stt">01</span>
                <h2 className="text">Dedication</h2>
              </div>
              <div className="icon">
                <img width={60} src={iconDed} alt="icon" />
              </div>
            </div>
            <div className="content">
              <p>
                Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi
                ut aliquip ex ea commo do conse namber onequat.
              </p>
            </div>
          </div>
          <div className="features-list--item">
            <div className="titles">
              <div className="title">
                <span className="stt">02</span>
                <h2 className="text">Smart Work</h2>
              </div>
              <div className="icon">
                <img width={60} src={iconSma} alt="icon" />
              </div>
            </div>
            <div className="content">
              <p>
                Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi
                ut aliquip ex ea commo do conse namber onequat.
              </p>
            </div>
          </div>
          <div className="features-list--item">
            <div className="titles">
              <div className="title">
                <span className="stt">03</span>
                <h2 className="text">Intelligence</h2>
              </div>
              <div className="icon">
                <img width={60} src={iconInt} alt="icon" />
              </div>
            </div>
            <div className="content">
              <p>
                Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi
                ut aliquip ex ea commo do conse namber onequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
