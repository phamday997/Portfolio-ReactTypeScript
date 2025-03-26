import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost, BlogPostProps } from "./type";
import blogData from "../../data/post.json";
import "./BlogList.scss";

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
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-list-pd--item">
          <div className="blog-item-inner">
            <Link
              to={`/blog/${post.id}`}
              className="link-overlay mouse-event"
            />
            <div className="feature-img">
              <img src={post.image} width="450" alt={post.title} />
            </div>
            <div className="group-text">
              <div className="cat">{post.category}</div>
              <div className="title">{post.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
