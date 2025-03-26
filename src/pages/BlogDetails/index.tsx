import React, { useEffect, useState } from "react";
import blogData from "../../data/post.json";
import { useParams } from "react-router-dom";
import { BlogPost } from "../../components/BlogList/type";
import { useDebouncedCallback } from "use-debounce";

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
      <div className="container">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-4">
          By {post.author} on {post.date}
        </p>
        <div
          className="main-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};
