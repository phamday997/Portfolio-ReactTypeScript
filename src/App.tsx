import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HeroHeader, MouseCursor, ScrollTop } from "./components";
import {
  OverviewInfor,
  About,
  Portfolio,
  MySkills,
  Testimonial,
  Contact,
  Blog,
} from "./pages";

const App: React.FC = () => {
  return (
    <div className="dp-portfolio-all-wrap">
      <Header />
      <main id="main" className="site-main">
        <HeroHeader />
        <OverviewInfor />
        <About />
        <Portfolio />
        <MySkills />
        <Testimonial />
        <Contact />
        <Blog />
      </main>
      <Footer />
      <MouseCursor />
      <ScrollTop />
    </div>
  );
};

export default App;
