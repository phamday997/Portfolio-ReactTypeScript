import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HeroHeader, MouseCursor, ScrollTop } from "./components";
import { OverviewInfor } from "./pages";

const App: React.FC = () => {
  return (
    <div className="dp-portfolio-all-wrap">
      <Header />
      <main id="main" className="site-main">
        <HeroHeader />
        <OverviewInfor />
      </main>
      <Footer />
      <MouseCursor />
      <ScrollTop />
    </div>
  );
};

export default App;
