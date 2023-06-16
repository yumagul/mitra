import React from "react";
import { Accordion } from "react-bootstrap";
import CustomToggle from "./CustomToggle";
import Card from "react-bootstrap/Card";

const PostIem = ({ post }) => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <div className={`post post_${post.id}`}>
            <strong>
              {post.id}. {post.title}
            </strong>
            <div>{post.body}</div>
            <CustomToggle eventKey="0">Комментарии</CustomToggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default PostIem;
