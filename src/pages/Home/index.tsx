import React from "react";
import {
  About,
  Blog,
  Contact,
  MySkills,
  OverviewInfor,
  Portfolio,
} from "./Sections";
import { HeroHeaderIndex } from "../../components";

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeroHeaderIndex />
      <OverviewInfor />
      <About />
      <Portfolio />
      <MySkills />
      <Contact />
      <Blog />
    </div>
  );
};
