import React from "react";
import { BlogBase } from "./BlogBase";
import { BlogList } from "../../components";
import { pn, pnm1 } from "../../components/BlogList/type";

export const BlogPage: React.FC = () => {
  const dataBreadcrumb = [
    {
      label: "Blog",
      url: "",
    },
  ];
  return (
    <BlogBase titlePage="My Blog Posts" dataBreadcrumb={dataBreadcrumb}>
      <BlogList
        typeCard="vertical"
        search={true}
        sort={true}
        showLayoutSeting={true}
        pagination={true}
        showExcerpt={true}
        columList={3}
        postPerPage={pnm1(9)}
        spaceCol={pn(25)}
        spaceRow={pn(35)}
        sortOrder="latest"
      />
    </BlogBase>
  );
};
