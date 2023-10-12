import React, { FC, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Id, Task } from "../types/types";

type ColumnNameProps = {
  column: any;
  onChangeName: (name: string) => void;
  deleteColumn: () => void;
  tasks: Task[];
  addNewTask: () => void;
  updateTask: (id: Id, content: string) => void;
};

const Container = styled.div`
  box-sizing: border-box;

  background-color: #f4f5f7;
  border-radius: 12px;
  width: 300px;

  height: 100%;
  border: 1px solid gray;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 100%;

  border-radius: 12px;
  margin: 0px;
  padding: 8px;
  border: none;
  background-color: #f4f5f7;
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

const ColumnKanban: FC<ColumnNameProps> = ({
  column,
  onChangeName,
  deleteColumn,
  tasks,
  addNewTask,
  updateTask,
}) => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Input type="text" value={column.title} onChange={(e) => onChangeName(e.target.value)} />
        <Button
          style={{ border: "none", outline: "none", borderRadius: 12 }}
          onClick={deleteColumn}
        >
          X
        </Button>
      </div>

      {tasks.map(
        (task, index) =>
          task.columnId === column.id && <Card key={index} task={task} updateTask={updateTask} />
      )}

      <Button onClick={addNewTask}>Добавить карточку</Button>
    </Container>
  );
};

export default ColumnKanban;
