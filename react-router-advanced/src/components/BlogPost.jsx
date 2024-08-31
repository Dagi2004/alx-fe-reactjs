import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Fetch and display blog post content based on postId */}
    </div>
  );
};

export default BlogPost;
