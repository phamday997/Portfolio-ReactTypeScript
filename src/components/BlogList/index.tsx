import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlogPost, BlogPostProps } from "./type";
import blogData from "../../data/post.json";
import { AnimationPD } from "../AnimationPD";
import { CardBlog } from "./Card/CardBlog";
import "./BlogList.scss";
import iconGrid1 from "./image/icon-grid1.png";
import iconGrid2 from "./image/icon-grid2.png";
import iconGrid3 from "./image/icon-grid3.png";
import iconList from "./image/list-icon.png";
import { Button } from "../Button";
import { getPaginationRange } from "../../helper";
import { useFilteredSortedPaginatedItems } from "../../hooks";

export const BlogList: React.FC<BlogPostProps> = ({
  panigation = false,
  linkReadMore = false,
  search = false,
  sort = false,
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
  const [layoutCard, setLayoutCard] = useState<"vertical" | "horizontal">(
    "vertical"
  );

  const handleLayoutVertical = useCallback((): void => {
    setLayoutColum(1);
    setLayoutCard("horizontal");
  }, [layoutCard, layoutColum]);

  const handleLayoutHorizontal = useCallback((): void => {
    setLayoutCard("vertical");
    setLayoutColum(3);
  }, [layoutCard, layoutColum]);

  const handleScreenResize = useCallback((): void => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1200 && windowWidth >= 992) {
      setLayoutColum(3);
      console.log("aaa");
    } else if (windowWidth < 992 && windowWidth >= 768) {
      setLayoutColum(2);
      console.log("bb");
    } else if (windowWidth < 768) {
      setLayoutColum(1);
      console.log("aaacc");
    }
  }, [layoutColum]);

  useEffect(() => {
    const { results, totalPages, hasNext, hasPrev } =
      useFilteredSortedPaginatedItems<BlogPost>(
        panigation,
        blogData,
        searchQuery,
        currentSortOrder,
        currentLimit,
        currentPage,
        {
          title: (item) => (typeof item.title === "string" ? item.title : ""),
          category: (item) => item.category,
          id: (item) => item.id,
        }
      );

    setPaginationRange(
      getPaginationRange(currentPage, totalPages, [10, 100], 1)
    );
    setHasPrev(hasPrev);
    setHasNext(hasNext);
    setUseTotalPages(totalPages);
    setBlogPosts(results);

    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [
    currentLimit,
    currentSortOrder,
    searchQuery,
    location,
    currentPage,
    layoutColum,
  ]);

  return (
    <div className="blog-wrapper">
      <div className="group-filter-sort-action">
        {search && (
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
            />
          </div>
        )}

        {sort && (
          <div className="sort-select-filter">
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
          </div>
        )}

        <div className="show-item-per-page">
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
        </div>
        <div className="change-layout-list">
          <span className="mouse-cursor-hover" onClick={handleLayoutHorizontal}>
            <img src={iconGrid1} alt="icon-grid" />
            <img src={iconGrid2} alt="icon-grid" />
            <img src={iconGrid3} alt="icon-grid" />
          </span>
          <span className="mouse-cursor-hover" onClick={handleLayoutVertical}>
            <img src={iconList} alt="icon-list" />
          </span>
        </div>
      </div>

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
              <CardBlog layoutCard={layoutCard} dataPost={post} />
            </AnimationPD>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
      {linkReadMore && (
        <div
          className="wrapper-button"
          style={{ marginTop: "50px", textAlign: "center" }}
        >
          <Button typeEle="link" href="#">
            See all articles
          </Button>
        </div>
      )}
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
