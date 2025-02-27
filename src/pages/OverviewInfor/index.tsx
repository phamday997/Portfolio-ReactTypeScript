import React from "react";
import "./OverviewInfor.scss";
import iconDed from "./images/dedication.png";
import iconSma from "./images/smart-work.png";
import iconInt from "./images/intelligence.png";
import { AnimationPD } from "../../components";

interface overviewItem {
  icon?: string;
  title?: string;
  description?: string;
}

export const OverviewInfor: React.FC = () => {
  const overviewData: overviewItem[] = [
    {
      icon: `${iconDed}`,
      title: "Dedication",
      description:
        "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
    },
    {
      icon: `${iconSma}`,
      title: "Smart Work",
      description:
        "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
    },
    {
      icon: `${iconInt}`,
      title: "Intelligence",
      description:
        "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
    },
  ];
  return (
    <section className="section-overviewinfor">
      <div className="container">
        <div className="features-list">
          {overviewData.length > 0 &&
            overviewData.map((item: overviewItem, index: number) => (
              <AnimationPD
                key={index}
                index={index}
                totalItem={overviewData.length}
                classElement="features-list--item"
                animation="fadeInUp"
                delayBase={0}
              >
                <div className="titles">
                  <div className="title">
                    <span className="stt">{`0${index + 1}`}</span>
                    <h2 className="text">{item?.title}</h2>
                  </div>
                  <div className="icon">
                    <img width={60} src={item?.icon} alt="icon" />
                  </div>
                </div>
                <div className="content">
                  <p>{item?.description}</p>
                </div>
              </AnimationPD>
            ))}
        </div>
      </div>
    </section>
  );
};
