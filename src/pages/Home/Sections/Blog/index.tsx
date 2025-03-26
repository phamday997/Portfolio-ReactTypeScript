import React from "react";
import { BlogList } from "../../../../components/BlogList";
import { HeadingGroup } from "../../../../components";
import "./Blog.scss";

export const Blog: React.FC = () => {
  return (
    <section className="section-blog" id="blog">
      <div className="container">
        <div className="content">
          <HeadingGroup
            maxWidth={750}
            subTitle="Latest News"
            mainTitle="Checkout My Recent Blogs"
            textAlign="center"
          >
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </HeadingGroup>
          <BlogList
            numOfPost={3}
            spaceCol={25}
            spaceRow={35}
            sortOrder="desc"
          />
        </div>
      </div>
    </section>
  );
};
