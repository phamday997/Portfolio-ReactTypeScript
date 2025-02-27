import React, { useState } from "react";
import { HeadinGroup, MovingParallax, Popup } from "../../components";
import { PortfolioItem } from "./types/PortfolioCard";
import Card from "./Card/Card";
import "./Porfolio.scss";
import bg1 from "./images/bg-1.jpg";
import bg2 from "./images/bg-2.jpg";
import bg3 from "./images/bg-3.jpg";
import bg4 from "./images/bg-4.jpg";

export const Portfolio: React.FC = () => {
  const [popup, setPopup] = useState<"show" | "hidden">("hidden");
  const [popupData, setPopupData] = useState<null | PortfolioItem>({
    typePopup: "video",
  });
  const portfolioItem: PortfolioItem[] = [
    {
      srcImg: `${bg1}`,
      typePopup: "video",
      dataPopup: "https://www.youtube.com/watch?v=HaIjR05n1Vc&t=116s",
      category: "youtube",
      title: "Web Application for <br> Desiverse",
      objectAlign: "default",
    },
    {
      srcImg: `${bg2}`,
      typePopup: "video",
      dataPopup: "https://vimeo.com/1051909443",
      category: "Vimeo",
      title: "Web Design for <br> Desiverse",
      objectAlign: "right",
    },
    {
      srcImg: `${bg3}`,
      typePopup: "audio",
      dataPopup: "https://soundcloud.com/2020hurricane/drugs-callin",
      category: "Soundcloud",
      title: "Web Template for <br> Desiverse",
      objectAlign: "default",
    },
    {
      srcImg: `${bg4}`,
      typePopup: "content",
      dataPopupObject: {
        subCategory: "Details",
        details:
          "<p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible.</p><p>Mockups are useful both for the creative phase of the project – for instance when you’re trying to figure out your user flows or the proper visual hierarchy – and the production phase when they phase when they will represent the target product. Building mockups strikes the ideal balance ease of modification.</p>",
        client: "Alvaro Morata",
        date: "March 07, 2021",
        srcImgObject: [`${bg1}`, `${bg2}`, `${bg3}`],
      },
      category: "Content",
      title: "Build Web for <br> Desiverse",
      objectAlign: "right",
    },
  ];

  const handleOnclick = (record: PortfolioItem): void => {
    setPopupData(record);
    setPopup("show");
  };

  const handleClose = (): void => {
    setPopup("hidden");
    setPopupData(null);
  };

  return (
    <section className="section-portfolio" id="portfolio">
      <MovingParallax
        direction="Y"
        speed={20}
        align="left"
        style={{
          top: -20,
          background: "#6b97d3",
          width: "20%",
          height: "45vh",
        }}
      ></MovingParallax>
      <div className="container">
        <div className="content">
          <HeadinGroup
            textAlign="center"
            maxWidth="100%"
            subTitle="Portfolio"
            mainTitle="My Amazing Works"
          >
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in <br /> voluptate
            </p>
          </HeadinGroup>
          <div className="list-portfolio">
            {portfolioItem.length > 0 &&
              portfolioItem.map((item: PortfolioItem, index: number) => (
                <Card
                  key={index}
                  data={item}
                  onOpen={() => handleOnclick(item)}
                ></Card>
              ))}
          </div>
        </div>
      </div>
      <MovingParallax
        direction="Y"
        speed={20}
        style={{
          bottom: 100,
          background: "#142eb5",
          width: "25%",
          height: "45vh",
        }}
      ></MovingParallax>
      <Popup classAnimation={popup} data={popupData} onClose={handleClose} />
    </section>
  );
};
