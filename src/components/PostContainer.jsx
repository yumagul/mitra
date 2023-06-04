import React from "react";
import { useAppSelector } from "../redux/redux";
import PostItem from "./PostItem";
const PostContainer = () => {
  const { posts, isLoading, error } = useAppSelector(
    (state) => state.PostsReducer
  );
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
