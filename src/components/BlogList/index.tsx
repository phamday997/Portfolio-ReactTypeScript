import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlogPost, BlogPostProps } from "./type";
import blogData from "../../data/post.json";
import { AnimationPD } from "../AnimationPD";
import { CardBlog } from "./Card/CardBlog";
import "./BlogList.scss";
import { getFilteredSortedPosts } from "./helper";

export const BlogList: React.FC<BlogPostProps> = ({
  postPerPage,
  columList,
  spaceCol,
  spaceRow,
  sortOrder = "lastest",
}) => {
  const location = useLocation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [currentSortOrder, setCurrentSortOrder] = useState<string>(sortOrder);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const finalData = getFilteredSortedPosts(
      blogData,
      searchQuery,
      currentSortOrder,
      postPerPage
    );
    setBlogPosts(finalData);
  }, [postPerPage, currentSortOrder, searchQuery, location]);

  return (
    <div className="blog-wrapper">
      <input
        type="text"
        placeholder="Search by name or category..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="blog-search-input"
      />
      <select
        value={currentSortOrder}
        onChange={(e) => setCurrentSortOrder(e.target.value)}
        className="blog-sort-dropdown"
      >
        <option value="lastest">Lastest</option>
        <option value="oldest">Oldest</option>
        <option value="az">A → Z (Title)</option>
        <option value="za">Z → A (Title)</option>
      </select>

      <div
        className="blog-list-pd"
        data-colum={columList}
        style={{ gap: `${spaceRow}px ${spaceCol}px` }}
      >
        {blogPosts.length > 0 ? (
          blogPosts.map((post: BlogPost, index: number) => (
            <AnimationPD
              key={post.id}
              animation="fadeIn"
              delayBase={0.2}
              duration={1.2}
              index={index}
              totalItem={blogPosts.length}
            >
              <CardBlog dataPost={post} />
            </AnimationPD>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};
