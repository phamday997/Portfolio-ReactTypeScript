import React from "react";
import { PublicRouter } from "./types/Public";

export const PublicRoutes: Array<PublicRouter> = [
  {
    component: React.lazy(() =>
      import("../pages/Home").then((module) => ({ default: module.Home }))
    ),
    path: "/",
  },
  {
    component: React.lazy(() =>
      import("../pages/Blog/BlogPage").then((module) => ({
        default: module.BlogPage,
      }))
    ),
    path: "/blog",
  },
  {
    component: React.lazy(() =>
      import("../pages/Blog/BlogCatPage").then((module) => ({
        default: module.BlogCatPage,
      }))
    ),
    path: "/blog/taxonomy",
  },
  {
    component: React.lazy(() =>
      import("../pages/BlogDetails").then((module) => ({
        default: module.BlogDetails,
      }))
    ),
    path: "/blog/post",
  },
];
