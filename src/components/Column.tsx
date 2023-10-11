import React, { FC, useState } from "react";
import styled from "styled-components";

type ColumnNameProps = {
  name: string;
  onChangeName: (name: string) => void;
};

const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 12px;
  width: 300px;
  border: 1px solid gray;
  margin-right: 10px;
`;

const Input = styled.input`
  border-radius: 12px;
  margin: 0px;
  padding: 8px;
  border: none;
  background-color: #f4f5f7;
  width: 200px;
  outline: none;
`;

const Column: FC<ColumnNameProps> = ({ name, onChangeName }) => {
  const [titleName, setTitleName] = useState<string>(name);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setTitleName(newName);
    onChangeName(newName);
  };
  return (
    <Container>
      <Input type="text" value={titleName} onChange={handleNameChange} />
    </Container>
  );
};

export default Column;
