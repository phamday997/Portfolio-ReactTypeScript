import React, { useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchSortProps } from "./type";
import "./FilterSortLayout.scss";
import { useDebouncedCallback } from "use-debounce";

export const SearchSort: React.FC<SearchSortProps> = ({
  width,
  label,
  valueSearch,
  setSearch,
}) => {
  // Debounced version of the setSearchQuery
  const debouncedSetSearch = useDebouncedCallback((val: string) => {
    setSearch(val);
  }, 300);

  useEffect(() => {
    // Cleanup Debounce => The same setTimeout and clearTimeout
    return () => {
      debouncedSetSearch.cancel(); // optional safety
    };
  }, [debouncedSetSearch]);

  return (
    <div className="search-filter mouse-cursor-hover">
      <FontAwesomeIcon icon={faSearch} />
      <input
        style={{ width: `${width}px` }}
        type="text"
        placeholder={label}
        defaultValue={valueSearch}
        onChange={(e) => debouncedSetSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};
