import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";

interface cardPorfolio {
  srcImg?: string;
  category?: string;
  title?: string | TrustedHTML;
  objectAlign?: "default" | "center" | "right" | string;
}
const Card: React.FC<cardPorfolio> = ({
  srcImg,
  category,
  title,
  objectAlign = "default",
  ...props
}) => {
  return (
    <div className={`card-porfolio align-${objectAlign}`}>
      <div className="overlay-action" {...props}></div>
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
