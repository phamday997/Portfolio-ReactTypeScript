import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchSortProps } from "./type";
import "./FilterSortLayout.scss";

export const SearchSort: React.FC<SearchSortProps> = ({
  width,
  label,
  valueSearch,
  setSearch,
}) => {
  return (
    <div className="search-filter mouse-cursor-hover">
      <FontAwesomeIcon icon={faSearch} />
      <input
        style={{ width: `${width}px` }}
        type="text"
        placeholder={label}
        value={valueSearch}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};
