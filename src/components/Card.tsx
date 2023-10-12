import React, { FC, useState } from "react";
import styled from "styled-components";
import { Id } from "../types/types";

type CardProps = {
  task: any;
  updateTask: (id: Id, content: string) => void;
};

const CardContainer = styled.input`
  margin: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
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

const Card: FC<CardProps> = ({ task, updateTask }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <CardContainer
        value={task.content}
        onChange={(e) => {
          updateTask(task.id, e.target.value);
        }}
      />
      <Button>X</Button>
    </div>
  );
};

export default Card;
