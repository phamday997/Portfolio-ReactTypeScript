import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MouseCursor, ScrollTop } from "./components";
import { ThemeProvider } from "./context";
import { Home, NotFound } from "./pages";
import { BlankLayout, MainLayout } from "./layouts";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="dp-portfolio-all-wrap">
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path="*"
              element={
                <BlankLayout>
                  <NotFound />
                </BlankLayout>
              }
            />
          </Routes>
          <MouseCursor />
          <ScrollTop />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
