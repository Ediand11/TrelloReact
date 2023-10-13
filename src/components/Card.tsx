import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Id } from "../types/types";

type CardProps = {
  task: any;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
};

const CardInput = styled.textarea`
  width: 100%;
  height: auto;

  margin: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  white-space: pre-wrap;
  overflow: auto;
  font: inherit;
`;

const CardSpan = styled.span`
  max-width: 300px;
  width: 100%;
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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 12px;
  padding: 8px;
  border: none;
  background-color: #f4f5f7;
  outline: none;
  cursor: pointer;
`;

const Card: FC<CardProps> = ({ task, updateTask, deleteTask }) => {
  const [editMode, setEditMode] = useState(true);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {editMode === true ? (
        <CardInput
          value={task.content}
          onChange={(e) => {
            updateTask(task.id, e.target.value);
          }}
          onBlur={() => setEditMode(false)}
          autoFocus
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            setEditMode(false);
          }}
        />
      ) : (
        <CardSpan>{task.content}</CardSpan>
      )}
      <Button onClick={() => deleteTask(task.id)}>X</Button>
    </div>
  );
};

export default Card;
