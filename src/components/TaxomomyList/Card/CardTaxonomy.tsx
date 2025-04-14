import React from "react";
import { Link } from "react-router-dom";
import { CardTaxProps } from "../type";
import { getCapitalizeWords } from "../../../helper";
import "./CardTaxonomy.scss";

export const CardTaxonomy: React.FC<CardTaxProps> = ({
  linkParams,
  data,
  handleClick,
}) => {
  const nameTax = data.name;
  const imgTax = data.image;
  return (
    <div className="card-taxonomy">
      <Link
        to={`${linkParams}=${nameTax.toLowerCase()}`}
        onClick={handleClick}
        className="link-overlay"
        title={getCapitalizeWords(nameTax)}
      />
      <div className="feature-img">
        <img width="100%" height="auto" src={imgTax} alt={nameTax} />
      </div>
      {nameTax && (
        <div className="group-text">
          <div className="title">{getCapitalizeWords(nameTax)}</div>
        </div>
      )}
    </div>
  );
};
