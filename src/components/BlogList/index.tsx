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
import { getPaginationRange } from "./helper/getPanigationRange";

export const BlogList: React.FC<BlogPostProps> = ({
  panigation,
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationRange, setPaginationRange] = useState<(number | "...")[]>(
    []
  );
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [useTotalPages, setUseTotalPages] = useState<number>(1);

  useEffect(() => {
    const { results, totalPages, hasNext, hasPrev } = getFilteredSortedPosts(
      panigation,
      blogData,
      searchQuery,
      currentSortOrder,
      currentLimit,
      currentPage
    );

    setPaginationRange(
      getPaginationRange(currentPage, totalPages, [10, 100], 1)
    );
    setHasPrev(hasPrev);
    setHasNext(hasNext);
    setUseTotalPages(totalPages);
    setBlogPosts(results);
  }, [currentLimit, currentSortOrder, searchQuery, location, currentPage]);

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
        <option value="6">6</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="80">80</option>
        <option value="100">100</option>
        {!panigation && <option value="-1">Show all</option>}
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
      {panigation && paginationRange.length > 0 && useTotalPages > 1 && (
        <div
          className="blog-pagination"
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "6px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={!hasPrev}
          >
            Prev
          </button>

          {paginationRange.map((page, idx) =>
            page === "..." ? (
              <span key={idx} style={{ padding: "0 6px" }}>
                ...
              </span>
            ) : (
              <button
                key={idx}
                onClick={() => setCurrentPage(page)}
                style={{
                  fontWeight: currentPage === page ? "bold" : "normal",
                  backgroundColor:
                    currentPage === page ? "#eee" : "transparent",
                  border: "1px solid #ccc",
                  padding: "4px 8px",
                }}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={!hasNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
