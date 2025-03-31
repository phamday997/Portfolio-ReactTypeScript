import React, { useEffect, useState } from "react";
import blogData from "../../data/post.json";
import { useParams } from "react-router-dom";
import { BlogPost } from "../../components/BlogList/type";
import { useDebouncedCallback } from "use-debounce";
import { HeroHeaderBase } from "../../components/HeroHeader/HeroHeaderBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogDetails.scss";
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";

export const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  const loadPost = useDebouncedCallback(() => {
    const foundPost = blogData.find((p) => p.id === Number(id));
    setPost(foundPost || null);
  }, 300);

  useEffect(() => {
    loadPost();
    return () => loadPost.cancel();
  }, [id, loadPost]);

  if (!post) return <div className="blog-details"></div>;

  return (
    <div className="blog-details">
      <HeroHeaderBase>
        <span
          className="text"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </HeroHeaderBase>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 col-12">
            <div className="feature-image">
              <img
                src={`${import.meta.env.BASE_URL}${post.image}`}
                alt={post.title?.toString() ?? ""}
              />
            </div>
            <div className="infor-wraper">
              <div className="post-date">
                <span className="icon-date icon-infor">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>
                <span>{post.date}</span>
              </div>
              <div className="post-author">
                <span className="icon-author icon-infor">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span>{post.author}</span>
              </div>
            </div>
            <div
              className="main-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12"></div>
        </div>
      </div>
    </div>
  );
};
