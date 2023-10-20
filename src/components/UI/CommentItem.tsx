import { FC } from "react";
import { Comment, Id } from "../../types/types";
import styled from "styled-components";
import { Button } from "./Button";

const CommentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 350px;
`;

const CommentSpan = styled.span`
  flex: 1; /* Распределение равной ширины между элементами */
  max-width: 100%;
  margin: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  white-space: pre-wrap;
  overflow: auto;
  overflow-wrap: break-word;
`;

const CommentButton = styled.button`
  padding: 2px 8px;
  margin: 8px 4px;
  border: 1px solid gray;
  border-radius: 12px;
  cursor: pointer;
`;

const CommentItem: FC<Comment & { deleteComment: () => void }> = ({
  authorComment,
  contentComment,
  deleteComment,
}) => {
  return (
    <CommentContainer>
      <CommentSpan>{`${authorComment}: ${contentComment}`}</CommentSpan>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CommentButton onClick={deleteComment}>x</CommentButton>
      </div>
    </CommentContainer>
  );
};

export default CommentItem;
