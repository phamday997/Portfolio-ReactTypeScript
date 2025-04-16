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
      import("../pages/Blog/BlogCatsPage").then((module) => ({
        default: module.BlogCatsPage,
      }))
    ),
    path: "/blog/categories",
  },
  {
    component: React.lazy(() =>
      import("../pages/Blog/BlogCatPage").then((module) => ({
        default: module.BlogCatPage,
      }))
    ),
    path: "/blog/category",
  },
  {
    component: React.lazy(() =>
      import("../pages/Blog/BlogTagPage").then((module) => ({
        default: module.BlogTagPage,
      }))
    ),
    path: "/blog/tag",
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
