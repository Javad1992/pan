import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";

export default function PopupGfg({ desc }) {
  return (
    <span>
      <Popup trigger={<Button>مشاهده</Button>} position="right center">
        <div>{desc}</div>
      </Popup>
    </span>
  );
}

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: #6980ff;
  font-family: "IRANSans";
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
`;
