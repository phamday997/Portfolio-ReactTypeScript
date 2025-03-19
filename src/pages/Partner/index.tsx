import React from "react";
import "./Partner.scss";
import logoP1 from "./images/logo-partner-1.png";
import logoP2 from "./images/logo-partner-2.png";
import logoP3 from "./images/logo-partner-3.png";
import logoP4 from "./images/logo-partner-4.png";
import logoP5 from "./images/logo-partner-5.png";
import logoP6 from "./images/logo-partner-6.png";
import logoP7 from "./images/logo-partner-7.png";
import logoP8 from "./images/logo-partner-8.png";
import { AnimationPD } from "../../components";

interface ItemPartnerProps {
  srcImg: string;
  link?: string;
}
export const Partner: React.FC = () => {
  const itemPartners: ItemPartnerProps[] = [
    {
      srcImg: `${logoP1}`,
      link: "#",
    },
    {
      srcImg: `${logoP2}`,
      link: "#",
    },
    {
      srcImg: `${logoP3}`,
      link: "#",
    },
    {
      srcImg: `${logoP4}`,
      link: "#",
    },
    {
      srcImg: `${logoP5}`,
      link: "#",
    },
    {
      srcImg: `${logoP6}`,
      link: "#",
    },
    {
      srcImg: `${logoP7}`,
      link: "#",
    },
    {
      srcImg: `${logoP8}`,
      link: "#",
    },
  ];
  return (
    <section className="section-partner">
      <div className="container">
        <div className="list-partner">
          {itemPartners.length > 0 &&
            itemPartners.map((item: ItemPartnerProps, index: number) => (
              <AnimationPD
                animation="fadeIn"
                delayBase={0.2}
                duration={1.2}
                index={index}
                totalItem={itemPartners.length}
                classElement="list-partner--item"
                key={index}
              >
                <div className="item-inner">
                  <div className="cont-img">
                    <img src={item.srcImg} alt="logo-partner" />
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      className="link-target"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.link} || "Link"
                    </a>
                  )}
                </div>
              </AnimationPD>
            ))}
        </div>
      </div>
    </section>
  );
};
