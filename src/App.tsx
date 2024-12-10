import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dp-portfolio-all-wrap">
      <Header></Header>
      <main id="main" className="site-main"></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
