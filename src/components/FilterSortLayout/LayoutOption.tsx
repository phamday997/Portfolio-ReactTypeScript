import React from "react";
import iconGrid1 from "./image/icon-grid1.png";
import iconGrid2 from "./image/icon-grid2.png";
import iconGrid3 from "./image/icon-grid3.png";
import iconList from "./image/list-icon.png";
import "./FilterSortLayout.scss";

interface LayoutOptionProps {
  horizontal: () => void;
  vertical: () => void;
}

export const LayoutOption: React.FC<LayoutOptionProps> = ({
  horizontal,
  vertical,
}) => {
  return (
    <div className="layout-grid-option">
      <div className="mouse-cursor-hover icon-layout" onClick={horizontal}>
        <span className="icon-col-1">
          <img width={24} src={iconGrid1} alt="icon-grid-1-colum" />
        </span>
        <span className="icon-col-2">
          <img width={21} src={iconGrid2} alt="icon-grid-2-colum" />
        </span>
        <span className="icon-col-3">
          <img width={25} src={iconGrid3} alt="icon-grid-3-colum" />
        </span>
      </div>
      <div className="mouse-cursor-hover icon-layout" onClick={vertical}>
        <span>
          <img width={30} src={iconList} alt="icon-list" />
        </span>
      </div>
    </div>
  );
};
