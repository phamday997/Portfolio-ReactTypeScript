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
  CommentForm,
  HeroHeaderNormal,
  Loader,
  SidebarBlog,
  TaxonomyList,
  TaxonomyListSingle,
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

              <div className="comments-section" style={{ marginTop: 40 }}>
                <h3 style={{ marginBottom: 20 }}>Comments</h3>

                {post.comments && post.comments.length > 0 ? (
                  post.comments.map((comment, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: 20,
                        paddingBottom: 10,
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <strong>{comment.fullName}</strong> ({comment.email}) on{" "}
                      {comment.date}
                      <p>{comment.message}</p>
                    </div>
                  ))
                ) : (
                  <p>No comments yet. Be the first to comment!</p>
                )}

                <CommentForm
                  sheetWebAppUrl={import.meta.env.VITE_SHEET_WEBAPP_URL}
                  rowIndex={dataPosts.findIndex((p) => p.id === post.id) + 2}
                  onCommentPosted={() => {
                    const numericId = Number(id);
                    const updatedPost = dataPosts.find(
                      (p) => p.id === numericId
                    );
                    if (updatedPost) setPost({ ...updatedPost });
                  }}
                  replyTo={post.author}
                />
              </div>
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
