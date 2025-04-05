import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchSortProps {
  width?: number;
  label?: string;
  valueSearch: string;
  handleSearch: (e: string) => void;
}

export const SearchSort: React.FC<SearchSortProps> = ({
  width,
  label,
  valueSearch,
  handleSearch,
}) => {
  return (
    <div className="search-filter mouse-cursor-hover">
      <FontAwesomeIcon icon={faSearch} />
      <input
        style={{ width: `${width}px` }}
        type="text"
        placeholder={label}
        value={valueSearch}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};
