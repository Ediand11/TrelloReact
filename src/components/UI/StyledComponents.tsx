import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;

  background-color: #f4f5f7;
  border-radius: 12px;
  max-width: 300px;
  width: 100%;
  min-width: 150px;

  height: 100%;
  border: 1px solid gray;
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 100%;

  border-radius: 12px;
  margin: 0px;
  padding: 8px;
  border: none;
  background-color: #f4f5f7;
  outline: none;
`;
export const Button = styled.button`
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

export const CardTextArea = styled.textarea`
  height: auto;
  display: block;
  max-width: 100%;
  width: 300px;
  margin: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  white-space: pre-wrap;
  overflow: auto;
  font: inherit;
  resize: none;
`;

export const CardSpan = styled.span`
  max-width: 300px;
  width: 100%;
  margin: 8px;
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  white-space: pre-wrap;
  overflow: auto;
  overflow-wrap: break-word;
`;
