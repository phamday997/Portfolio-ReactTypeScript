import React, { useState } from "react";
import {
  AnimationPD,
  HeadingGroup,
  MovingParallax,
  PopupService,
  ScrollProgressBars,
} from "../../components";
import "./MySkills.scss";
import { ServiceCard } from "./type/ServiceCard";
import iconCpu from "./images/cpu.png";
import iconPhone from "./images/phone.png";
import iconStar from "./images/star.png";
import iconWeb from "./images/web.png";
import banner from "./images/banner.jpg";
import Card from "./Card/Card";

interface SkillItem {
  labelBar: string;
  percentBar: number;
}

export const MySkills: React.FC = () => {
  const skillItem: SkillItem[] = [
    {
      labelBar: "Wordpress",
      percentBar: 85,
    },
    {
      labelBar: "Laravel",
      percentBar: 70,
    },
    {
      labelBar: "ReactJS",
      percentBar: 70,
    },
    {
      labelBar: "PHP",
      percentBar: 70,
    },
    {
      labelBar: "JavaScript",
      percentBar: 70,
    },
    {
      labelBar: "Jquery",
      percentBar: 80,
    },
  ];

  const [popup, setPopup] = useState<"show" | "hidden">("hidden");
  const [popupData, setPopupData] = useState<null | ServiceCard>(null);

  const serviceItem: ServiceCard[] = [
    {
      background: "#6e7fd1",
      icon: `${iconCpu}`,
      title: "Desktop Application",
      description:
        "Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in v iusmod tempor incid idunt ut labore et dolore magna aliqua.",
      dataPopup: {
        srcImg: `${banner}`,
        details:
          "<p>Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p><p>In today’s digital world, your website is the first interaction consumers have with your business. That’s why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p><p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we’re confident we can design a custom website that drives sales for your unique business.</p>",
      },
    },
    {
      background: "#343c55",
      icon: `${iconPhone}`,
      title: "Mobile Application",
      description:
        "Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in v iusmod tempor incid idunt ut labore et dolore magna aliqua.",
      dataPopup: {
        srcImg: `${banner}`,
        details:
          "<p>Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p><p>In today’s digital world, your website is the first interaction consumers have with your business. That’s why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p><p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we’re confident we can design a custom website that drives sales for your unique business.</p>",
      },
    },
    {
      background: "#142eb5",
      icon: `${iconWeb}`,
      title: "Website Development",
      description:
        "Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in v iusmod tempor incid idunt ut labore et dolore magna aliqua.",
      dataPopup: {
        srcImg: `${banner}`,
        details:
          "<p>Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p><p>In today’s digital world, your website is the first interaction consumers have with your business. That’s why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p><p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we’re confident we can design a custom website that drives sales for your unique business.</p>",
      },
    },
    {
      background: "#6b97d3",
      icon: `${iconStar}`,
      title: "Game Development",
      description:
        "Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in v iusmod tempor incid idunt ut labore et dolore magna aliqua.",
      dataPopup: {
        srcImg: `${banner}`,
        details:
          "<p>Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p><p>In today’s digital world, your website is the first interaction consumers have with your business. That’s why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p><p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we’re confident we can design a custom website that drives sales for your unique business.</p>",
      },
    },
  ];

  const handleOnclick = (record: ServiceCard): void => {
    setPopupData(record);
    setPopup("show");
  };

  const handleClose = (): void => {
    setPopup("hidden");
    setPopupData(null);
  };

  return (
    <section className="section-my-skill">
      <div className="container">
        <div className="content">
          <AnimationPD animation="fadeIn" delayBase={0.2} duration={1}>
            <HeadingGroup
              maxWidth={850}
              subTitle="My Skills"
              mainTitle="I Develop Skills Regularly"
              textAlign="center"
            >
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in <br /> voluptate
              </p>
            </HeadingGroup>
          </AnimationPD>
          <AnimationPD
            animation="fadeIn"
            duration={1}
            delayBase={0.2}
            classElement="skill-wrapper"
          >
            {skillItem.length > 0 &&
              skillItem.map((item: SkillItem, index: number) => (
                <div className="skill-wrapper--item" key={index}>
                  <ScrollProgressBars
                    duration={2000}
                    percentBar={item.percentBar}
                    labelBar={item.labelBar}
                    repeat={true}
                  />
                </div>
              ))}
          </AnimationPD>
        </div>
      </div>
      <div className="group-service" id="service">
        <div className="container">
          <div className="list-service-box">
            {serviceItem.length > 0 &&
              serviceItem.map((item: ServiceCard, index: number) => (
                <AnimationPD
                  classElement="service-item"
                  animation="fadeIn"
                  delayBase={0.4}
                  index={index}
                  totalItem={serviceItem.length}
                  key={index}
                >
                  <Card data={item} onOpen={() => handleOnclick(item)} />
                </AnimationPD>
              ))}
          </div>
        </div>
        <MovingParallax
          direction="Y"
          align="left"
          speed={20}
          style={{
            top: -350,
            background: "#142eb5",
            width: "90px",
            height: "190px",
          }}
        ></MovingParallax>
      </div>
      <PopupService
        classAnimation={popup}
        data={popupData}
        onClose={handleClose}
      />
    </section>
  );
};
