import React from "react";
import { PaginationProps } from "./type/PaginationProps";
import "./Pagination.scss";
import { AnimationPD } from "../AnimationPD";

export const PaginationPD: React.FC<PaginationProps> = ({
  totalPage,
  paginRange,
  currentPage,
  setCurrentPage,
  hasNext,
  hasPrev,
}) => {
  return (
    <AnimationPD
      animation="fadeIn"
      duration={1.2}
      delayBase={0.2}
      classElement={`pagination-pd-lists margin-top-action ${
        totalPage > 999 ? "unit-max-by-Milion" : ""
      }`}
    >
      <button
        className="item-pagin btn-prev"
        onClick={() => setCurrentPage((p) => p - 1)}
        disabled={!hasPrev}
      >
        Prev
      </button>

      {paginRange.map((page, idx) =>
        page === "..." ? (
          <span className="item-pagin dots" key={idx}>
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => setCurrentPage(page)}
            className={`item-pagin ${currentPage === page ? "current" : ""}`}
          >
            {page}
          </button>
        )
      )}

      <button
        className="item-pagin btn-next"
        onClick={() => setCurrentPage((p) => p + 1)}
        disabled={!hasNext}
      >
        Next
      </button>
    </AnimationPD>
  );
};
