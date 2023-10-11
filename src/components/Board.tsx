import React, { FC, useState } from "react";
import Column from "./Column";

const Board: FC = () => {
  const [columns, setColumns] = useState<string[]>(["ToDo", "In Progress", "Testing"]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      {columns.map((column, key) => (
        <Column name={column} key={key}></Column>
      ))}
    </div>
  );
};

export default Board;
