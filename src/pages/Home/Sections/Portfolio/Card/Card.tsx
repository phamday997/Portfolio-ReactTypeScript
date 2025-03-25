import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PortfolioItem } from "../types/PortfolioCard";

interface cardPorfolio {
  data: PortfolioItem;
  onOpen: () => void;
}
const Card: React.FC<cardPorfolio> = ({ data, onOpen }) => {
  const { objectAlign, srcImg, title, category } = data;

  return (
    <div className={`card-porfolio align-${objectAlign}`}>
      <div className="overlay-action" onClick={onOpen}></div>
      <div className="bg-img">
        <img src={srcImg} alt={srcImg} />
      </div>
      <div className="cont-group">
        <div className="cont-wraper">
          <div className="category">{category}</div>
          {title && (
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          <span className="view-project">
            <a href="/#">View Project</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
