import React from "react";
import { AnimationPD, BlogList, HeadingGroup } from "../../../../components";
import "./Blog.scss";
import { pn, pnm1 } from "../../../../components/BlogList/type";

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
            // linkReadMore={true}
            pagination={true}
            columList={3}
            search={true}
            sort={true}
            showLayoutSeting={true}
            postPerPage={pnm1(6)}
            spaceCol={pn(25)}
            spaceRow={pn(35)}
            sortOrder="latest"
          />
        </div>
      </div>
    </section>
  );
};
