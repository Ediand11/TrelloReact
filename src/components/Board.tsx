import React, { FC, useState } from "react";
import ColumnKanban from "./ColumnKanban";
import { Column, Id, Task } from "../types/types";
import { Button } from "./UI/StyledComponents";

const Board: FC = () => {
  const defaultColumns: Column[] = [
    { id: "todo", title: "TODO" },
    { id: "doing", title: "In Progress" },
    { id: "testing", title: "Testing" },
    { id: "done", title: "Done" },
  ];

  const defaultTasks: Task[] = [
    {
      id: "1",
      columnId: "todo",
      content: "List admin APIs for dashboard",
    },
    {
      id: "2",
      columnId: "todo",
      content:
        "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
    },
    {
      id: "3",
      columnId: "doing",
      content: "Conduct security testing",
    },
    {
      id: "4",
      columnId: "doing",
      content: "Analyze competitors",
    },
    {
      id: "5",
      columnId: "done",
      content: "Create UI kit documentation",
    },
    {
      id: "6",
      columnId: "done",
      content: "Dev meeting",
    },
    {
      id: "7",
      columnId: "done",
      content: "Deliver dashboard prototype",
    },
    {
      id: "8",
      columnId: "todo",
      content: "Optimize application performance",
    },
    {
      id: "9",
      columnId: "todo",
      content: "Implement data validation",
    },
    {
      id: "10",
      columnId: "todo",
      content: "Design database schema",
    },
    {
      id: "11",
      columnId: "todo",
      content: "Integrate SSL web certificates into workflow",
    },
    {
      id: "12",
      columnId: "doing",
      content: "Implement error logging and monitoring",
    },
    {
      id: "13",
      columnId: "doing",
      content: "Design and implement responsive UI",
    },
  ];

  const [columns, setColumns] = useState<Column[]>(defaultColumns);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const handleNameChange = (index: number, newName: string) => {
    const newColumnNames = [...columns];
    newColumnNames[index].title = newName;
    setColumns(newColumnNames);
  };

  function createNewColumn() {
    const columnToAdd: Column = {
      id: Math.floor(Math.random() * 10001),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  function createTask(columnId: Id) {
    const newTask: Task = {
      id: Math.floor(Math.random() * 10001),
      columnId,
      content: `Task ${tasks.length + 1}`,
    };

    setTasks([...tasks, newTask]);
  }

  function updateTask(id: Id, content: string) {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });
    setTasks([...newTasks]);
  }

  function deleteTask(id: Id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks([...newTasks]);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {columns.map((column, index) => (
        <ColumnKanban
          key={column.id}
          column={column}
          onChangeName={(newName) => handleNameChange(index, newName)}
          deleteColumn={() => deleteColumn(column.id)}
          tasks={tasks.filter((task) => task.columnId === column.id)}
          addNewTask={createTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
      <Button onClick={() => createNewColumn()}>Создать новую колонку</Button>
    </div>
  );
};

export default Board;
