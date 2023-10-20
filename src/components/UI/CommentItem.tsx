import { FC } from "react";
import { Comment, Id } from "../../types/types";
import styled from "styled-components";
import { Button } from "./Button";

const CommentSpan = styled.span`
  display: block;
  padding: 8px;
  margin: 8px;
  width: 100%;
`;

const CommentItem: FC<Comment & { deleteTask: () => void }> = ({
  authorComment,
  contentComment,
  deleteTask,
}) => {
  return (
    <>
      <CommentSpan>{`${authorComment}: ${contentComment}`}</CommentSpan>
      <button onClick={deleteTask}>X</button>
    </>
  );
};

export default CommentItem;
