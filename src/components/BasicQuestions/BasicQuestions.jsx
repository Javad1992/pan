import React, { useState } from "react";
import FormatQuestion from "../FormatQuestion.jsx/FormatQuestion";

// components
import ToggleText from "../ToggleText/ToggleText";
// styled components
import styled from "styled-components";

const BasicQuestions = ({ baseQuestions, title }) => {
  return (
    <Content>
      <ToggleText title={title || "سوالات اولیه"}>
        <FormatQuestion items={baseQuestions} />
      </ToggleText>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  /* margin: 1rem 0.7rem; */
`;

export default BasicQuestions;
