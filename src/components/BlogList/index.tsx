import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BlogPost, BlogPostProps } from "./type";
import blogData from "../../data/post.json";
import "./BlogList.scss";
import { AnimationPD } from "../AnimationPD";
import { scroller } from "react-scroll";
import { useGlobalStateZustand } from "../../hooks/useGlobalStateZustand";

export const BlogList: React.FC<BlogPostProps> = ({
  numOfPost,
  spaceCol,
  spaceRow,
  sortOrder = "desc",
}) => {
  const location = useLocation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { activeIndex, setActiveIndex } = useGlobalStateZustand();

  const handleLinkClick = (): void => {
    setActiveIndex(activeIndex);
    scroller.scrollTo("top", {
      duration: 200,
      smooth: true,
      offset: -100,
    });
  };

  useEffect(() => {
    const sortedData = [...blogData]
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a.id - b.id; // Ascending order
        }
        return b.id - a.id; // Descending order
      })
      .slice(0, numOfPost);

    setBlogPosts(sortedData);
  }, [numOfPost, sortOrder, location]);

  return (
    <div
      className="blog-list-pd"
      data-colum={numOfPost}
      style={{ gap: `${spaceRow}px ${spaceCol}px` }}
    >
      {blogPosts.length > 0 &&
        blogPosts.map((post, index: number) => (
          <AnimationPD
            key={index}
            animation="fadeIn"
            delayBase={0.2}
            duration={1.2}
            index={index}
            totalItem={blogPosts.length}
            classElement="blog-list-pd--item"
          >
            <div className="blog-item-inner">
              <Link
                to={`/blog/${post.id}`}
                onClick={handleLinkClick}
                className="link-overlay"
              />
              <div className="feature-img">
                <img
                  src={`${import.meta.env.BASE_URL}${post.image}`}
                  width="450"
                  alt={post.title?.toString() ?? ""}
                />
              </div>
              <div className="group-text">
                <div className="cat">{post.category}</div>
                <div
                  className="title"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </div>
            </div>
          </AnimationPD>
        ))}
    </div>
  );
};
