import React, { FC } from "react";
import { Comment } from "../../types/types";
import { CardSpan } from "./CardItems";
import ResizableTextarea from "./ResizableTextarea";

const CommentItem: FC<Comment> = ({ authorComment, contentComment }) => {
  return (
    <>
      <ResizableTextarea />
      <span style={{ paddingBottom: "10px" }}>{`${authorComment}: ${contentComment}`}</span>
    </>
  );
};

export default CommentItem;
