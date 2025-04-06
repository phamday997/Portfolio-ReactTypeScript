import React from "react";
import { BlogList, HeroHeaderNormal } from "../../components";
import { pn, pnm1 } from "../../components/BlogList/type";

export const BlogPage: React.FC = () => {
  const dataBreadcumb = [
    {
      label: "Blog",
      url: "",
    },
  ];
  return (
    <div className="blog-page">
      <HeroHeaderNormal breadcrumb={true} dataBreadcrumb={dataBreadcumb}>
        <span className="text">My Blog Posts</span>
      </HeroHeaderNormal>
      <section
        className="section-my-post-list"
        style={{ paddingBottom: "150px" }}
      >
        <div className="container">
          <BlogList
            typeCard="vertical"
            search={true}
            sort={true}
            showLayoutSeting={true}
            pagination={true}
            columList={3}
            postPerPage={pnm1(9)}
            spaceCol={pn(25)}
            spaceRow={pn(35)}
            sortOrder="latest"
          />
        </div>
      </section>
    </div>
  );
};
