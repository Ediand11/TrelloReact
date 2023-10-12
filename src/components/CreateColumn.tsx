import React, { FC } from "react";

type Component = {
  addColumn: () => void;
};

const CreateColumn: FC<Component> = ({ addColumn }) => {
  return (
    <div>
      <button onClick={addColumn}>Добавить ещё одну колонку</button>
    </div>
  );
};

export default CreateColumn;
