import React from "react";
import Mybutton from "../UI/MyButton";

const PostIem = ({ post }) => {
  return (
    <div className={`post post_${post.id}`}>
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <Mybutton />
    </div>
  );
};

export default PostIem;
