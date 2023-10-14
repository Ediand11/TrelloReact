import React, { Children, FC, ReactNode } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

type PopupProps = {
  children: ReactNode;
};

const Popup: FC<PopupProps> = ({ children }) => {
  return (
    <PopupContainer>
      <PopupContent>{children}</PopupContent>
    </PopupContainer>
  );
};

export default Popup;
