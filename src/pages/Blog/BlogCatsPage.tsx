import React from "react";
import { BlogBase } from "./BlogBase";
import { TaxonomyList } from "../../components";
import { BlogPost } from "../../components/BlogList/type";
import { useBlogPosts } from "../../data/googleSheet/useBlogPosts";
import { GOOGLE_SHEETS } from "../../data/config/googleSheet";

export const BlogCatsPage: React.FC = () => {
  const dataBreadcrumb = [
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "Categories",
      url: "",
    },
  ];
  const { data: dataPosts, loading } = useBlogPosts(
    GOOGLE_SHEETS.post.sheetId,
    GOOGLE_SHEETS.post.apiKey
  );
  return (
    <BlogBase
      titlePage="My Blog categories"
      dataBreadcrumb={dataBreadcrumb}
      classEle="blog-categories"
    >
      <TaxonomyList<BlogPost>
        loading={loading}
        typeList="card"
        linkParams="/blog/category?cat"
        data={dataPosts}
        title="Categories"
        field="category"
        imageField="imageCategory"
      />
    </BlogBase>
  );
};
