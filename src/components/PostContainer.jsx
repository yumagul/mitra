import React from "react";
import { postApi } from "../redux/service";

const PostContainer = () => {
  const { data } = postApi.useFetchAllPostsQuery(5);
  return <div>data</div>;
};

export default PostContainer;
