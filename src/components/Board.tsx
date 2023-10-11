import React, { FC, useState } from "react";
import Column from "./Column";

const Board: FC = () => {
  const [columns, setColumns] = useState<string[]>(["ToDo", "In Progress", "Testing", "Done"]);

  const handleNameChange = (index: number, newName: string) => {
    const newColumnNames = [...columns];
    newColumnNames[index] = newName;
    setColumns(newColumnNames);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {columns.map((column, index) => (
        <Column
          key={index}
          name={column}
          onChangeName={(newName) => handleNameChange(index, newName)}
        />
      ))}
    </div>
  );
};

export default Board;
