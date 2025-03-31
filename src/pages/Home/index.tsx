import React from "react";
import { HeroHeader } from "../../components";
import {
  About,
  Blog,
  Contact,
  MySkills,
  OverviewInfor,
  Partner,
  Portfolio,
  Testimonial,
} from "./Sections";

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeroHeader />
      <OverviewInfor />
      <About />
      <Portfolio />
      <MySkills />
      <Contact />
      <Blog />
    </div>
  );
};
