import React from "react";
import PostItem from "./PostItem";
const PostContainer = ({ posts, isLoading, error }) => {
  return (
    <div className="container">
      {isLoading && <h1> Идет загрузка </h1>}
      {error && <h1>{error} </h1>}
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
