import React from "react";
import "./Loader.scss";

export const Loader: React.FC = () => {
  return (
    <div className="overlayer-loader">
      <div className="loader-wraper">
        <span>Loading</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
    </div>
  );
};
