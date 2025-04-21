import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  TaxonomyListSingle,
} from "../../components";
import { getPlainText } from "../../helper";
import { GOOGLE_SHEETS } from "../../data/config/googleSheet";
import "./BlogDetails.scss";
import Inst1 from "./images/instagram-0.jpg";
import Inst2 from "./images/instagram-1.jpg";
import Inst3 from "./images/instagram-2.jpg";
import Inst4 from "./images/instagram-3.jpg";
import Inst5 from "./images/instagram-4.jpg";
import Inst6 from "./images/instagram-5.jpg";

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

  const instagrams = [
    {
      img: `${Inst1}`,
      url: "https://www.instagram.com/p/CrksSS9PGzi/?utm_source=ig_web_copy_link",
    },
    {
      img: `${Inst2}`,
      url: "https://www.instagram.com/p/CrksWJ-vd-E/?utm_source=ig_web_copy_link",
    },
    {
      img: `${Inst3}`,
      url: "https://www.instagram.com/p/CrksX7rvHSw/?utm_source=ig_web_copy_link",
    },
    {
      img: `${Inst4}`,
      url: "https://www.instagram.com/p/CrksZtGPr_W/?utm_source=ig_web_copy_link",
    },
    {
      img: `${Inst5}`,
      url: "https://www.instagram.com/p/CrksbYJPJFy/?utm_source=ig_web_copy_link",
    },
    {
      img: `${Inst6}`,
      url: "https://www.instagram.com/p/CrksdP5PDaa/?utm_source=ig_web_copy_link",
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
                    <TaxonomyListSingle
                      typeItem="normal"
                      linkParams="/blog/category?cat"
                      dataTax={post?.category}
                    />
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
              <TaxonomyListSingle
                label="Tags:"
                linkParams="/blog/tag?tag"
                dataTax={post?.tag}
                style={{
                  marginTop: "20px",
                  marginBottom: "30px",
                }}
              />
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
              <div className="margin-top-action">
                <AnimationPD animation="fadeIn" duration={1.2} delayBase={0.4}>
                  <h2 className="title-h2">Instagram</h2>
                </AnimationPD>
                <div className="img-link-list-wraper">
                  <ul className="img-link-list">
                    {instagrams.length > 0 &&
                      instagrams.map((item, index: number) => (
                        <AnimationPD
                          key={index}
                          animation="fadeInUp"
                          duration={1.2}
                          delayBase={0.4}
                          index={index}
                          totalItem={instagrams.length}
                        >
                          <li className="img-link-list--item">
                            <a href={item.url} target="_blank">
                              <img
                                width="100%"
                                height="auto"
                                src={item.img}
                                alt={item.url}
                              />
                            </a>
                          </li>
                        </AnimationPD>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
