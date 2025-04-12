import React from "react";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import { CardBlogProps } from "../type/CardBlogProps";
import "./CardBlog.scss";
import { useGlobalStateZustand } from "../../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { getPlainText } from "../../../helper";

export const CardBlog: React.FC<CardBlogProps> = ({
  layoutCard = "vertical",
  showExcerpt,
  showDate,
  showCate,
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
          title={getPlainText(dataPost.title)}
        />
        <div className="feature-img">
          <img
            src={`${dataPost.image}`}
            width="450"
            alt={getPlainText(dataPost.title)}
          />
        </div>
        <div className="group-text">
          {showDate && (
            <div className="infor-wraper">
              <div className="post-date">
                <span className="icon-date icon-infor">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>
                <span>{dataPost.date}</span>
              </div>
            </div>
          )}

          {showCate && <div className="cat">{dataPost.category}</div>}
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: dataPost.title }}
          />
          {showExcerpt && dataPost.excerpt && (
            <div className="excerpt">{dataPost.excerpt}</div>
          )}
        </div>
      </div>
    </div>
  );
};
