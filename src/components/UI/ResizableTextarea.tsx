import React, { useState, ChangeEvent } from "react";
import { CardTextArea } from "./CardItems";

const ResizableTextarea: React.FC = () => {
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 24; // Замените это значение на высоту строки вашего textarea
    const previousRows = event.target.rows;
    event.target.rows = 1; // Сначала установите одну строку, чтобы текстовое поле автоматически росло по вертикали.

    const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    setText(event.target.value);
    setTextareaHeight("auto");
  };

  return (
    <textarea
      rows={1}
      style={{ height: textareaHeight }}
      value={text}
      onChange={handleChange}
      placeholder="Введите текст..."
    />
  );
};

export default ResizableTextarea;
