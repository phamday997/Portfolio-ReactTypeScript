import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { BlankLayout, MainLayout } from "../layouts";
import { NotFound } from "../pages";
import { Loader } from "../components";

export const LoadRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {PublicRoutes.map((route, index: number) => (
        <Route
          key={index}
          path={route.path}
          element={
            <Suspense
              fallback={
                <>
                  <Loader />
                </>
              }
            >
              <MainLayout>{React.createElement(route.component)}</MainLayout>
            </Suspense>
          }
        />
      ))}
      {/* 404 Not Found  */}
      <Route
        path="*"
        element={
          <Suspense
            fallback={
              <>
                <Loader />
              </>
            }
          >
            <BlankLayout>
              <NotFound />
            </BlankLayout>
          </Suspense>
        }
      />
    </Routes>
  );
};
