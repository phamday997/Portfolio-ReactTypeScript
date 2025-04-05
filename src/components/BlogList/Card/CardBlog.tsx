import React from "react";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import { CardBlogProps } from "../type/CardBlogProps";
import "./CardBlog.scss";
import { useGlobalStateZustand } from "../../../hooks";

export const CardBlog: React.FC<CardBlogProps> = ({
  layoutCard = "vertical",
  dataPost,
}) => {
  const { activeIndex, setActiveIndex } = useGlobalStateZustand();
  const handleLinkClick = (): void => {
    setActiveIndex(activeIndex);
    scroller.scrollTo("top", {
      duration: 200,
      smooth: true,
      offset: -100,
    });
  };
  return (
    <div className={`card-blog-pd ${layoutCard}`}>
      <div className="blog-item-inner">
        <Link
          to={`/blog/${dataPost.id}`}
          onClick={handleLinkClick}
          className="link-overlay"
        />
        <div className="feature-img">
          <img
            src={`${import.meta.env.BASE_URL}${dataPost.image}`}
            width="450"
            alt={dataPost.title?.toString() ?? ""}
          />
        </div>
        <div className="group-text">
          <div className="cat">{dataPost.category}</div>
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: dataPost.title }}
          />
        </div>
      </div>
    </div>
  );
};
