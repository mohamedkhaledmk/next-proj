import React from "react";
import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query); //array of the backslashes
  return (
    <div>
      <h1>Blog Post</h1>
    </div>
  );
};

export default BlogPostsPage;
