import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useBlogPosts } from "../../data/googleSheet/useBlogPosts";
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
import {
  getArrayFromString,
  getCapitalizeWords,
  getPlainText,
} from "../../helper";
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
  }, 100);

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
  const tagsList = useMemo(() => getArrayFromString(post?.tag, false), [post]);

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
          <div className="col-lg-8 col-md-7 col-sm-12 col-12 col-left">
            <AnimationPD animation="fadeIn" duration={1.2} delayBase={0.2}>
              {post.image && (
                <div className="feature-image">
                  <img src={`${post.image}`} alt={getPlainText(post.title)} />
                </div>
              )}
              <div className="infor-wraper">
                {post.date && (
                  <div className="post-date">
                    <span className="icon-date icon-infor">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    <span>{post.date}</span>
                  </div>
                )}
                {post.category && (
                  <div className="cat">
                    <span className="icon-cat icon-infor">
                      <FontAwesomeIcon icon={faFolder} />
                    </span>
                    <span>{post.category}</span>
                  </div>
                )}
                {post.author && (
                  <div className="post-author">
                    <span className="icon-author icon-infor">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <span>{post.author}</span>
                  </div>
                )}
              </div>
              <div
                className="main-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              {tagsList.length > 0 && (
                <div className="tags-wrapper">
                  <div className="label">
                    <small>Tags:</small>
                  </div>
                  <ul className="tags-list">
                    {tagsList.map((tag: string, index: number) => (
                      <li className="tag" key={index}>
                        <Link
                          to={`/blog/tag?tag=${getPlainText(
                            tag
                          ).toLowerCase()}`}
                        >
                          {getCapitalizeWords(tag)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </AnimationPD>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12 col-12 col-right col-sidebar">
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
              <div className="margin-top-action">
                <TaxonomyList<BlogPost>
                  typeList="tag"
                  linkParams="/blog/tag?tag"
                  data={dataPosts}
                  title="Tags"
                  field="tag"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
