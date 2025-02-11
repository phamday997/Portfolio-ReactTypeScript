import React from "react";
import { HeadinGroup, MovingParallax } from "../../components";
import Card from "./Card/Card";
import "./Porfolio.scss";
import bg1 from "./images/bg-1.jpg";
import bg2 from "./images/bg-2.jpg";
import bg3 from "./images/bg-3.jpg";
import bg4 from "./images/bg-4.jpg";

interface porfolioItem {
  srcImg?: string;
  category?: string;
  title?: string | TrustedHTML;
  objectAlign?: string;
}

export const Portfolio: React.FC = () => {
  const porfolioItem: porfolioItem[] = [
    {
      srcImg: `${bg1}`,
      category: "youtube",
      title: "Web Application for <br> Desiverse",
      objectAlign: "default",
    },
    {
      srcImg: `${bg2}`,
      category: "Vimeo",
      title: "Web Design for <br> Desiverse",
      objectAlign: "right",
    },
    {
      srcImg: `${bg3}`,
      category: "Soundcloud",
      title: "Web Template for <br> Desiverse",
      objectAlign: "default",
    },
    {
      srcImg: `${bg4}`,
      category: "Content",
      title: "Build Web for <br> Desiverse",
      objectAlign: "right",
    },
  ];
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
            {porfolioItem.length > 0 &&
              porfolioItem.map((item, index) => (
                <Card
                  key={index}
                  srcImg={item.srcImg}
                  category={item.category}
                  title={item.title}
                  objectAlign={item.objectAlign}
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
    </section>
  );
};
