import React, { FC, useEffect, useState } from "react";
import ColumnKanban from "./ColumnKanban";
import { Column, Id, Task } from "../types/types";
import { Button, Container, Header, Input } from "./UI/StyledComponents";
import Popup from "./UI/Popup";

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
      author: "Test User",
    },
    {
      id: "2",
      columnId: "todo",
      content:
        "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
      author: "Test User",
    },
    {
      id: "3",
      columnId: "doing",
      content: "Conduct security testing",
      author: "Test User",
    },
    {
      id: "4",
      columnId: "doing",
      content: "Analyze competitors",
      author: "Test User",
    },
    {
      id: "5",
      columnId: "done",
      content: "Create UI kit documentation",
      author: "Test User",
    },
    {
      id: "6",
      columnId: "done",
      content: "Dev meeting",
      author: "Test User",
    },
    {
      id: "7",
      columnId: "done",
      content: "Deliver dashboard prototype",
      author: "Test User",
    },
    {
      id: "8",
      columnId: "todo",
      content: "Optimize application performance",
      author: "Test User",
    },
    {
      id: "9",
      columnId: "todo",
      content: "Implement data validation",
      author: "Test User",
    },
    {
      id: "10",
      columnId: "todo",
      content: "Design database schema",
      author: "Test User",
    },
    {
      id: "11",
      columnId: "todo",
      content: "Integrate SSL web certificates into workflow",
      author: "Test User",
    },
    {
      id: "12",
      columnId: "doing",
      content: "Implement error logging and monitoring",
      author: "Test User",
    },
    {
      id: "13",
      columnId: "doing",
      content: "Design and implement responsive UI",
      author: "Test User",
    },
  ];

  const [columns, setColumns] = useState<Column[]>(
    JSON.parse(localStorage.getItem("columns") || "null") || defaultColumns
  );

  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks") || "null") || defaultTasks
  );

  const [user, setUser] = useState<string>(JSON.parse(localStorage.getItem("user") || ""));

  const handleNameChange = (index: number, newName: string) => {
    const newColumnNames = [...columns];
    newColumnNames[index].title = newName;
    setColumns(newColumnNames);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Позже вынести функции в отдельный файл
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

  function createTask(userName: string, columnId: Id) {
    const newTask: Task = {
      id: Math.floor(Math.random() * 10001),
      columnId,
      content: `Task ${tasks.length + 1}`,
      author: userName,
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
  //----------------------------------------------------------------

  const [isPopupVisibleUser, setIsPopupVisibleUser] = useState<boolean>(() => !user);

  const handleCardClick = () => {
    setIsPopupVisibleUser((state) => !state);
  };

  return (
    <div>
      <Header>
        <Button onClick={handleCardClick}>Изменить Пользователя</Button>
      </Header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {isPopupVisibleUser && (
          <Popup setVisible={handleCardClick}>
            <h1>Введите Имя пользователя</h1>
            <Input value={user} onChange={(e) => setUser(e.target.value)}></Input>
            <Button onClick={handleCardClick}>Закрыть</Button>
          </Popup>
        )}

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
            user={user}
          />
        ))}
        <Container>
          <Button onClick={() => createNewColumn()}>Создать новую колонку</Button>
        </Container>
      </div>
    </div>
  );
};

export default Board;
