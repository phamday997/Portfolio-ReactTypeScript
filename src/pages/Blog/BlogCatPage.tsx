import React from "react";
import { BlogArchivePage } from "./BlogArchivePage";

export const BlogCatPage: React.FC = () => {
  const dataBreadCrumb = [
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "Category",
      url: "",
    },
  ];
  return (
    <BlogArchivePage
      dataBreadcrumb={dataBreadCrumb}
      typeTaxonomy="category"
      taxonomyName="cat"
    />
  );
};
