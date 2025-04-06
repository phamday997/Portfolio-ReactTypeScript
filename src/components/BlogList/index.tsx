import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlogPost, BlogPostProps } from "./type";
import blogData from "../../data/post.json";
import { AnimationPD } from "../AnimationPD";
import { CardBlog } from "./Card/CardBlog";
import "./BlogList.scss";
import { Button } from "../Button";
import { getPaginationRange } from "../../helper";
import { useFilteredSortedPaginatedItems } from "../../hooks";
import { LayoutOption, ShowItemPerPage, SortOption } from "../FilterSortLayout";
import { SearchSort } from "../FilterSortLayout/SearchSort";
import { PaginationPD } from "../PaginationPD";

export const BlogList: React.FC<BlogPostProps> = ({
  pagination = false,
  linkReadMore = false,
  search = false,
  sort = false,
  showLayoutSeting = false,
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

  useEffect(() => {
    const { results, totalPages, hasNext, hasPrev } =
      useFilteredSortedPaginatedItems<BlogPost>(
        pagination,
        blogData,
        searchQuery,
        currentSortOrder,
        currentLimit,
        currentPage,
        {
          title: (item) => item.title,
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
  }, [currentLimit, currentSortOrder, searchQuery, location, currentPage]);

  return (
    <div className="list-blog-wrapper">
      {/* handle show search, sort and setting layout */}
      {(search || sort || showLayoutSeting) && (
        <AnimationPD
          animation="fadeIn"
          duration={1.2}
          delayBase={1}
          classElement={`group-filter-sort-action ${
            search && sort ? "both-cpn" : ""
          }`}
        >
          {(search || sort) && (
            <div
              className={`col-left ${search && sort ? "both-cpn" : ""} ${
                showLayoutSeting ? "" : "only"
              }`}
            >
              {search && (
                <SearchSort
                  label="Search post by name or category..."
                  width={260}
                  valueSearch={searchQuery}
                  setSearch={setSearchQuery}
                />
              )}
              {sort && (
                <SortOption
                  typeName="post"
                  valueSort={currentSortOrder}
                  setCurrentSort={setCurrentSortOrder}
                />
              )}
            </div>
          )}

          {showLayoutSeting && (
            <div
              className={`col-right ${search && sort ? "both-cpn" : "only"}`}
            >
              <ShowItemPerPage
                pagination={pagination}
                setChange={setCurrentLimit}
                currentPerPage={currentLimit}
                columnList={columList}
              />
              <LayoutOption
                horizontal={handleLayoutHorizontal}
                vertical={handleLayoutVertical}
              />
            </div>
          )}
        </AnimationPD>
      )}

      {/* handle show list item */}
      <div
        className="blog-list-pd"
        data-colum={layoutColum}
        style={{ gap: `${spaceRow}px ${spaceCol}px` }}
      >
        {blogPosts.length > 0 &&
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
          ))}
      </div>
      {blogPosts.length <= 0 && (
        <div
          className="result-not-found"
          style={{ textAlign: "center", width: "70%", margin: "30px auto" }}
        >
          Your search for <em style={{ color: "#fb503b" }}>"{searchQuery}"</em>{" "}
          did not match any items.
        </div>
      )}

      {/* handle show link See all articles */}
      {linkReadMore && (
        <div className="margin-top-action" style={{ textAlign: "center" }}>
          <Button typeEle="link" sizeEle="small" href="#">
            See all articles
          </Button>
        </div>
      )}

      {/* handle show pagination */}
      {pagination && paginationRange.length > 0 && useTotalPages > 1 && (
        <PaginationPD
          totalPage={useTotalPages}
          paginRange={paginationRange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
      )}
    </div>
  );
};
