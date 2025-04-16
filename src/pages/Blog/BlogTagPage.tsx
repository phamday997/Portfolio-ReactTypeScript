import React from "react";
import { BlogArchive } from "./BlogArchive";
import { useSearchParams } from "react-router-dom";

export const BlogTagPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const taxonomyParam = searchParams.get("tag");

  const dataBreadCrumb = [
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "Tag",
      url: "",
    },
  ];
  return (
    <BlogArchive
      taxonomyParam={taxonomyParam ?? ""}
      dataBreadcrumb={dataBreadCrumb}
      typeTaxonomy="tag"
    />
  );
};
