import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Id } from "../types/types";
import { Button, CardSpan, CardTextArea } from "./UI/StyledComponents";
import Popup from "./UI/Popup";

type CardProps = {
  task: any;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
};

const Card: FC<CardProps> = ({ task, updateTask, deleteTask }) => {
  const [editMode, setEditMode] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleCardClick = () => {
    setPopupVisible((state) => !state);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {editMode === true ? (
          <CardTextArea
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
          <CardSpan onClick={handleCardClick}>{task.content}</CardSpan>
        )}
        <Button onClick={() => deleteTask(task.id)}>X</Button>
      </div>

      {isPopupVisible && (
        <Popup setVisible={setPopupVisible}>
          <h2>Popup Content</h2>
          <CardTextArea
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
          <button onClick={handleCardClick}>Закрыть</button>
        </Popup>
      )}
    </div>
  );
};

export default Card;
