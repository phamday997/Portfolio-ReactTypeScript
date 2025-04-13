import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BlogPost, BlogPostProps } from "./type";
import { AnimationPD } from "../AnimationPD";
import { CardBlog } from "./Card/CardBlog";
import "./BlogList.scss";
import { getPaginationRange } from "../../helper";
import { useFilteredSortedPaginatedItems } from "../../hooks";
import { LayoutOption, ShowItemPerPage, SortOption } from "../FilterSortLayout";
import { SearchSort } from "../FilterSortLayout/SearchSort";
import { PaginationPD } from "../PaginationPD";
import { scroller } from "react-scroll";
import { useBlogPosts } from "../../data/googleSheet/sheets/useBlogPosts";
import { GOOGLE_SHEETS } from "../../data/config/googleSheet";

export const BlogList: React.FC<BlogPostProps> = ({
  pagination = false,
  linkReadMore = false,
  search = false,
  sort = false,
  showLayoutSeting = false,
  showDate = false,
  showExcerpt = false,
  showCat = true,
  taxonomyParams = "",
  excludeIds,
  typeCard = "vertical",
  urlLinkReadMore,
  postPerPage,
  columList,
  spaceCol,
  spaceRow,
  sortOrder = "lastest",
}) => {
  const location = useLocation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [currentSortOrder, setCurrentSortOrder] = useState<string>(sortOrder);
  const [searchQuery, setSearchQuery] = useState<string>(taxonomyParams);
  const [layoutColum, setLayoutColum] = useState<number>(columList);
  const [currentLimit, setCurrentLimit] = useState<number>(postPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationRange, setPaginationRange] = useState<(number | "...")[]>(
    []
  );
  const [layoutCard, setLayoutCard] = useState<"vertical" | "horizontal">(
    typeCard
  );

  const handleLayoutVertical = useCallback((): void => {
    setLayoutColum(1);
    setLayoutCard("horizontal");
  }, [layoutCard, layoutColum]);

  const handleLayoutHorizontal = useCallback((): void => {
    setLayoutCard("vertical");
    setLayoutColum(3);
  }, [layoutCard, layoutColum]);

  const handleLinkClick = (): void => {
    scroller.scrollTo("top", {
      duration: 200,
      smooth: true,
      offset: -100,
    });
  };

  const { data: dataPosts, loading } = useBlogPosts(
    GOOGLE_SHEETS.post.sheetId,
    GOOGLE_SHEETS.post.apiKey
  );

  const { results, totalPages, hasNext, hasPrev } =
    useFilteredSortedPaginatedItems<BlogPost>(
      pagination,
      dataPosts,
      searchQuery,
      currentSortOrder,
      currentLimit,
      currentPage,
      excludeIds ?? [],
      {
        title: (item) => item.title,
        category: (item) => item.category,
        id: (item) => item.id,
      }
    );

  useEffect(() => {
    setPaginationRange(
      getPaginationRange(currentPage, totalPages, [10, 100], 1)
    );
    setBlogPosts(results);
  }, [
    currentLimit,
    currentSortOrder,
    searchQuery,
    location,
    currentPage,
    dataPosts,
  ]);

  return (
    <div className="list-blog-wrapper">
      {/* handle show search, sort and setting layout */}
      {(search || sort || showLayoutSeting) && (
        <AnimationPD
          animation="fadeIn"
          duration={1.2}
          delayBase={0.2}
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
      {!loading ? (
        <>
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
                  <CardBlog
                    showCate={showCat}
                    showExcerpt={showExcerpt}
                    showDate={showDate}
                    layoutCard={layoutCard}
                    dataPost={post}
                  />
                </AnimationPD>
              ))}
          </div>
          {blogPosts.length <= 0 && (
            <AnimationPD
              classElement="result-not-found-list"
              animation="fadeIn"
              duration={1.2}
              delayBase={0.2}
            >
              No results found.
            </AnimationPD>
          )}
        </>
      ) : (
        <div
          className="d-flex justify-content-center align-center"
          style={{ alignItems: "center", height: "auto", minHeight: "200px" }}
        >
          Loading...
        </div>
      )}

      {/* handle show link See all articles */}
      {linkReadMore && (
        <AnimationPD animation="fadeInUp" duration={1.2} delayBase={0.2}>
          <div className="margin-top-action" style={{ textAlign: "center" }}>
            <Link
              className="primary dp-btn dp-btn--normal"
              to={`${urlLinkReadMore ? urlLinkReadMore : "/"}`}
              onClick={handleLinkClick}
            >
              See all articles
            </Link>
          </div>
        </AnimationPD>
      )}

      {/* handle show pagination */}
      {pagination && paginationRange.length > 0 && totalPages > 1 && (
        <PaginationPD
          totalPage={totalPages}
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
