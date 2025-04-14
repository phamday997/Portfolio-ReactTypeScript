import React from "react";
import { BlogArchive } from "./BlogArchive";
import { useSearchParams } from "react-router-dom";
import { getCapitalizeWords } from "../../helper";

export const BlogCatPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const taxonomyParam = searchParams.get("cat");

  const dataBreadCrumb = [
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "Categories",
      url: "/blog/categories",
    },
    {
      label: `${getCapitalizeWords(taxonomyParam ?? "")}`,
      url: "",
    },
  ];
  return (
    <BlogArchive
      taxonomyParam={taxonomyParam ?? ""}
      dataBreadcrumb={dataBreadCrumb}
      typeTaxonomy="category"
    />
  );
};
