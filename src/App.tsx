import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MouseCursor, ScrollTop } from "./components";
import { ThemeProvider } from "./context";
import { BlogDetails, Home, NotFound } from "./pages";
import { BlankLayout, MainLayout } from "./layouts";

const App: React.FC = () => {
  return (
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
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <MouseCursor />
        <ScrollTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
