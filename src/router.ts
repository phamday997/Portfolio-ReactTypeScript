import React, { LazyExoticComponent } from "react";

export const ROUTERS: Array<{
  component: LazyExoticComponent<React.FC<any>>;
  path: string;
}> = [
  {
    component: React.lazy(() =>
      import("./pages/Home").then((module) => ({ default: module.Home }))
    ),
    path: "/",
  },
  {
    component: React.lazy(() =>
      import("./pages/BlogDetails").then((module) => ({
        default: module.BlogDetails,
      }))
    ),
    path: "/blog/:id",
  },
];
