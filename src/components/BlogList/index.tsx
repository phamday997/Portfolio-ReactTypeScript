import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlogPost, BlogPostProps } from "./type";
import blogData from "../../data/post.json";
import { AnimationPD } from "../AnimationPD";
import { CardBlog } from "./Card/CardBlog";
import "./BlogList.scss";
import { getFilteredSortedPosts } from "./helper";
import iconGrid from "./image/grid-icon.png";
import iconList from "./image/list-icon.png";

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
  const [layoutColum, setLayoutColum] = useState<number>(columList);
  const [currentLimit, setCurrentLimit] = useState<number>(postPerPage);

  useEffect(() => {
    const finalData = getFilteredSortedPosts(
      blogData,
      searchQuery,
      currentSortOrder,
      currentLimit
    );
    setBlogPosts(finalData);
  }, [currentLimit, currentSortOrder, searchQuery, location]);

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
        <option value="latest">Sort by latest</option>
        <option value="oldest">sort by oldest</option>
        <option value="az">Sort by A → Z (Title)</option>
        <option value="za">Sort by Z → A (Title)</option>
      </select>
      show
      <select
        value={currentLimit}
        onChange={(e) => setCurrentLimit(Number(e.target.value))}
        className="blog-sort-dropdown"
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="9">9</option>
      </select>
      <span className="mouse-cursor-hover" onClick={() => setLayoutColum(3)}>
        <img src={iconGrid} alt="icon-grid" />
      </span>
      <span className="mouse-cursor-hover" onClick={() => setLayoutColum(1)}>
        <img src={iconList} alt="icon-list" />
      </span>
      <div
        className="blog-list-pd"
        data-colum={layoutColum}
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
