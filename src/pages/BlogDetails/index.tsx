import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useBlogPosts } from "../../data/googleSheet/sheets/useBlogPosts";
import { useDebouncedCallback } from "use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlogPost } from "../../components/BlogList/type";
import {
  faCalendarDays,
  faFolder,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  AnimationPD,
  HeroHeaderNormal,
  Loader,
  SidebarBlog,
  TaxonomyList,
} from "../../components";
import { getPlainText } from "../../helper";
import { GOOGLE_SHEETS } from "../../data/config/googleSheet";
import "./BlogDetails.scss";

export const BlogDetails: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [post, setPost] = useState<BlogPost | null>(null);

  const { data: dataPosts } = useBlogPosts(
    GOOGLE_SHEETS.post.sheetId,
    GOOGLE_SHEETS.post.apiKey
  );

  const loadPost = useDebouncedCallback(() => {
    const numericId = Number(id);
    if (!numericId || isNaN(numericId)) return;

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

  console.table(dataPosts);

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
              <div className="cat">
                <span className="icon-cat icon-infor">
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <span>{post.category}</span>
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
              <div className="margin-top-action">
                <TaxonomyList<BlogPost>
                  typeList="normal"
                  linkParams="/blog/category?cat"
                  data={dataPosts}
                  title="Categories"
                  field="category"
                  imageField="imageCategory"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
