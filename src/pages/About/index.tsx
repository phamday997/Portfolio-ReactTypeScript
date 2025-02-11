import React from "react";
import "./about.scss";
import mainImg from "./images/bg-1.jpg";
import extraImg from "./images/bg-2.jpg";
import icon1 from "./images/icon-wordpress.png";
import icon2 from "./images/icon-react.png";
import icon3 from "./images/icon-laravel.png";
import icon4 from "./images/icon-shopify.png";
import {
  Button,
  HeadinGroup,
  MovingParallax,
  ScrollCounter,
} from "../../components";

interface counterItem {
  label?: string | TrustedHTML;
  number?: number;
  duration?: number;
  unit?: string;
  plus?: boolean;
}
export const About: React.FC = () => {
  const counterNumber: counterItem[] = [
    {
      label: "Digital <br /> Products",
      number: 120,
      duration: 2000,
      plus: true,
    },
    {
      label: "Open Source <br />Projects",
      number: 40,
      duration: 300,
      plus: true,
    },
    {
      label: "Lines of <br/> Code",
      number: 10,
      unit: "M",
      duration: 300,
      plus: false,
    },
  ];
  return (
    <section className="section-about" id="about">
      <div className="container">
        <div className="content">
          <div className="about-group">
            <div className="about-group--left">
              <div className="image-wrap">
                <img className="main-img" src={mainImg} alt="main-image" />
                <div className="extra-image">
                  <img src={extraImg} alt="extra-image" />
                </div>
                <span className="icon icon1">
                  <img width={80} src={icon1} alt="icon-wordpress" />
                </span>
                <span className="icon icon2">
                  <img width={75} src={icon2} alt="icon-react" />
                </span>
                <span className="icon icon3">
                  <img width={55} src={icon3} alt="icon-laravel" />
                </span>
                <span className="icon icon4">
                  <img width={65} src={icon4} alt="icon-shopify" />
                </span>
              </div>
            </div>
            <div className="about-group--right">
              <HeadinGroup
                maxWidth="100%"
                subTitle="I'm a Developer"
                mainTitle="I Develop Application that Help People"
              />
              <div className="description">
                <p>
                  Dliquip ex ea commo do conse namber onequa ute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatu epteur sint occaecat cupidatat
                </p>
                <p>
                  Krnon proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum. Sed ut perspiciatis unde omnis
                </p>
              </div>
              <Button typeEle="link" sizeEle="normal" href="/#portfolio">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-infor-group">
        <div className="container">
          <div className="counter-lists">
            {counterNumber.length > 0 &&
              counterNumber.map((item, index) => (
                <div className="counter-lists--item" key={index}>
                  <div className="numbers">
                    <ScrollCounter
                      className={`dp-counter-nummber ${
                        item.plus ? "has-plus" : ""
                      } ${item.unit ? "has-unit" : ""}`}
                      targetNumber={item.number ? item.number : 0}
                      duration={item.duration ? item.duration : 0}
                      unit={item.unit ? item.unit : ""}
                      repeat={true}
                    />
                    {item.label && (
                      <span
                        className="text"
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <MovingParallax
          direction="Y"
          speed={20}
          align="right"
          style={{ bottom: -20 }}
        ></MovingParallax>
      </div>
    </section>
  );
};
