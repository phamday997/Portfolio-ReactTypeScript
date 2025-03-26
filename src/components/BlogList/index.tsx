import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost, BlogPostProps } from "./type";
import blogData from "../../data/post.json";
import "./BlogList.scss";
import { AnimationPD } from "../AnimationPD";

export const BlogList: React.FC<BlogPostProps> = ({
  numOfPost,
  spaceCol,
  spaceRow,
  sortOrder = "desc",
}) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

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
  }, [numOfPost, sortOrder]);

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
              <Link to={`/blog/${post.id}`} className="link-overlay" />
              <div className="feature-img">
                <img src={post.image} width="450" alt={post.title} />
              </div>
              <div className="group-text">
                <div className="cat">{post.category}</div>
                <div className="title">{post.title}</div>
              </div>
            </div>
          </AnimationPD>
        ))}
    </div>
  );
};
