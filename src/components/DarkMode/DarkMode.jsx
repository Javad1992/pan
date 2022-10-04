import React from "react";
// react icons
import { FiMoon } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";
// styled components
import styled from "styled-components";

const DarkMode = ({ theme, themeToggler }) => {
  return (
    <DarkStyle
      onClick={themeToggler}
      bgColor={theme === "light" ? "#0F1015" : "#191C24"}
    >
      {theme === "light" ? (
        <FiMoon size={20} color="#fff" />
      ) : (
        <BsFillSunFill size={20} color="#FBBC04" />
      )}
    </DarkStyle>
  );
};

export const DarkStyle = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default DarkMode;
