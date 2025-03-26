import React from "react";
import { BlogList } from "../../../../components/BlogList";
import { AnimationPD, HeadingGroup } from "../../../../components";
import "./Blog.scss";

export const Blog: React.FC = () => {
  return (
    <section className="section-blog" id="blog">
      <div className="container">
        <div className="content">
          <AnimationPD animation="fadeIn" delayBase={0.2} duration={1.2}>
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
          </AnimationPD>
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
