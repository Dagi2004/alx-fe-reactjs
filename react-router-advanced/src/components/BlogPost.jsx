import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      {/* Fetch and display blog post content based on postId */}
    </div>
  );
};

export default BlogPost;
