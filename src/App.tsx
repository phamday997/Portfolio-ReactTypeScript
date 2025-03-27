import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MouseCursor, ScrollTop } from "./components";
import { ThemeProvider } from "./context";
import { NotFound } from "./pages";
import { BlankLayout, MainLayout } from "./layouts";
import { ROUTERS } from "./router";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="dp-portfolio-all-wrap">
        <Routes>
          {ROUTERS.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MainLayout>
                    {React.createElement(route.component)}
                  </MainLayout>
                </Suspense>
              }
            />
          ))}
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
  );
};

export default App;
