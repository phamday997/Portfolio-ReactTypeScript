import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "animate.css";
import "./App.scss";
import React from "react";
import { MouseCursor, ScrollTop } from "./components";
import { ThemeProvider } from "./context";
import { LoadRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="dp-portfolio-all-wrap" id="top">
        <LoadRoutes />
        <MouseCursor />
        <ScrollTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
