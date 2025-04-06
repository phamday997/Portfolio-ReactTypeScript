import React from "react";
import { ShowItemPerPageProps } from "./type";
import "./FilterSortLayout.scss";

export const ShowItemPerPage: React.FC<ShowItemPerPageProps> = ({
  pagination = false,
  currentPerPage,
  setChange,
  columnList,
}) => {
  const perPageOptionsByColumn: Record<1 | 2 | 3 | 4 | 5 | 6, number[]> = {
    1: [2, 6, 8, 12],
    2: [4, 6, 10, 20, 50],
    3: [3, 6, 9, 24, 48],
    4: [4, 8, 12, 24, 48],
    5: [5, 10, 15, 30, 60],
    6: [6, 12, 18, 36, 72],
  };
  const options = perPageOptionsByColumn[columnList] || [];
  return (
    <div className="show-item-per-page group-select">
      <span>Show</span>
      <select
        value={currentPerPage}
        onChange={(e) => setChange(Number(e.target.value))}
        className="blog-sort-dropdown mouse-cursor-hover"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        {!pagination && <option value="-1">Show all</option>}
      </select>
    </div>
  );
};
