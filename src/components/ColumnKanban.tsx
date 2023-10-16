import React, { FC, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Id, Task } from "../types/types";
import { Button, Container, Input } from "./UI/StyledComponents";

type ColumnNameProps = {
  column: any;
  onChangeName: (name: string) => void;
  deleteColumn: () => void;
  tasks: Task[];
  addNewTask: (user: string, columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  user: string;
};

const ColumnKanban: FC<ColumnNameProps> = ({
  column,
  onChangeName,
  deleteColumn,
  tasks,
  addNewTask,
  updateTask,
  deleteTask,
  user,
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

      {tasks.map((task) => (
        <Card key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
      ))}

      <Button onClick={() => addNewTask(user, column.id)}>Добавить карточку</Button>
    </Container>
  );
};

export default ColumnKanban;
