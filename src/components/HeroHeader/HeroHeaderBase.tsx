import React, { Children, ReactNode } from "react";
import heroImg from "./images/page-header.jpg";
import "./HeroHeader.scss";

interface HeroHeaderBaseProps {
  children: ReactNode;
}

export const HeroHeaderBase: React.FC<HeroHeaderBaseProps> = ({ children }) => {
  return (
    <section className="hero-header-base">
      <div className="background-image">
        <img src={heroImg} alt="heroHeader" />
      </div>
      <div className="group-inner animate__animated animate__fadeIn animate__slow">
        <h1 className="title-h1">{children}</h1>
      </div>
    </section>
  );
};
