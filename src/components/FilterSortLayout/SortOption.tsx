import React from "react";

interface SortOptionProps {
  typeName: "post" | "product";
  width?: number;
  valueSort: string;
  handleSort: (e: string) => void;
}

export const SortOption: React.FC<SortOptionProps> = ({
  typeName = "post",
  width,
  valueSort,
  handleSort,
}) => {
  return (
    <div className="sort-select-filter group-select">
      <select
        style={{ width: `${width}px` }}
        value={valueSort}
        onChange={(e) => handleSort(e.target.value)}
        className="blog-sort-dropdown"
      >
        <option value="latest">Sort {typeName} by latest (ID)</option>
        <option value="oldest">Sort {typeName} by oldest (ID)</option>
        <option value="az">Sort {typeName} A to Z (Title)</option>
        <option value="za">Sort {typeName} Z to A (Title)</option>
      </select>
    </div>
  );
};
