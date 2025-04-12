import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogPosts } from "../../data/googleSheet/sheets/useBlogPosts";
import { BlogPost } from "../../components/BlogList/type";
import { useDebouncedCallback } from "use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogDetails.scss";
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  AnimationPD,
  HeroHeaderNormal,
  Loader,
  SidebarBlog,
} from "../../components";
import { getPlainText } from "../../helper";
import { GOOGLE_SHEETS } from "../../data/config/googleSheet";

export const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  const { data: dataPosts } = useBlogPosts(
    GOOGLE_SHEETS.post.sheetId,
    GOOGLE_SHEETS.post.apiKey
  );

  const loadPost = useDebouncedCallback(() => {
    const numericId = Number(id);
    const foundPost = dataPosts.find((p) => p.id === numericId);
    setPost(foundPost || null);
  }, 300);

  const dataBreadcumb = [
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: `${post?.title}`,
      url: "",
    },
  ];

  useEffect(() => {
    loadPost();
    return () => loadPost.cancel();
  }, [id, loadPost, dataPosts]);

  const excludeIds = useMemo(() => (post ? [post.id] : []), [post]);

  if (!post)
    return (
      <div className="blog-details">
        <Loader />
      </div>
    );

  return (
    <div className="blog-details">
      <HeroHeaderNormal breadcrumb={true} dataBreadcrumb={dataBreadcumb}>
        <span
          className="text"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
      </HeroHeaderNormal>
      <div className="container">
        <div className="row">
          <AnimationPD
            animation="fadeIn"
            duration={1.2}
            delayBase={0.2}
            classElement="col-lg-8 col-md-7 col-sm-12 col-12 col-left"
          >
            <div className="feature-image">
              <img src={`${post.image}`} alt={getPlainText(post.title)} />
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
          </AnimationPD>
          <div className="col-lg-4 col-md-5 col-sm-12 col-12 col-right">
            <div className="col-right-wraper">
              <SidebarBlog excludeIds={excludeIds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
