import React, { FC } from "react";
import { Comment } from "../../types/types";
import { CardSpan } from "./CardItems";
import styled from "styled-components";

const CommentSpan = styled.span`
  display: block;
  padding: 8px;
  margin: 8px;
  width: 100%;
`;

const CommentItem: FC<Comment> = ({ authorComment, contentComment }) => {
  return (
    <>
      <CommentSpan>{`${authorComment}: ${contentComment}`}</CommentSpan>
    </>
  );
};

export default CommentItem;
