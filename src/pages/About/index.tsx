import React from "react";
import "./about.scss";
import mainImg from "./images/bg-1.jpg";
import extraImg from "./images/bg-2.jpg";
import icon1 from "./images/icon-wordpress.png";
import icon2 from "./images/icon-react.png";
import icon3 from "./images/icon-laravel.png";
import icon4 from "./images/icon-shopify.png";
import {
  AnimationPD,
  Button,
  HeadingGroup,
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
                <AnimationPD delayBase={0.2} duration={1.2} animation="fadeIn">
                  <img className="main-img" src={mainImg} alt="main-image" />
                </AnimationPD>
                <AnimationPD
                  classElement="extra-image"
                  delayBase={0.4}
                  duration={1.2}
                  animation="fadeIn"
                >
                  <img src={extraImg} alt="extra-image" />
                </AnimationPD>
                <AnimationPD
                  as="span"
                  classElement="icon icon1"
                  animation="zoomIn"
                  delayBase={0.6}
                  duration={1}
                >
                  <img width={80} src={icon1} alt="icon-wordpress" />
                </AnimationPD>
                <AnimationPD
                  as="span"
                  classElement="icon icon2"
                  animation="zoomIn"
                  delayBase={1}
                  duration={1}
                >
                  <img width={75} src={icon2} alt="icon-react" />
                </AnimationPD>
                <AnimationPD
                  as="span"
                  classElement="icon icon3"
                  animation="zoomIn"
                  duration={1}
                  delayBase={0.8}
                >
                  <img width={55} src={icon3} alt="icon-laravel" />
                </AnimationPD>
                <AnimationPD
                  as="span"
                  classElement="icon icon4"
                  animation="zoomIn"
                  duration={1}
                  delayBase={1.2}
                >
                  <img width={65} src={icon4} alt="icon-shopify" />
                </AnimationPD>
              </div>
            </div>
            <AnimationPD
              animation="fadeIn"
              delayBase={1.2}
              duration={1.2}
              classElement="about-group--right"
            >
              <HeadingGroup
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
              <Button
                typeEle="link"
                sizeEle="normal"
                linkScroll={true}
                linkSrollToId="portfolio"
              >
                View Portfolio
              </Button>
            </AnimationPD>
          </div>
        </div>
      </div>
      <div className="counter-infor-group">
        <div className="container">
          <div className="counter-lists">
            {counterNumber.length > 0 &&
              counterNumber.map((item: counterItem, index: number) => (
                <AnimationPD
                  animation="fadeInUp"
                  classElement="counter-lists--item"
                  index={index}
                  totalItem={counterNumber.length}
                  delayBase={0.5}
                  key={index}
                >
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
                </AnimationPD>
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
