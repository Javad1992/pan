// styled components
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`


  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    box-sizing:border-box;
    direction:rtl !important;
  
    
  }

  a{
      text-decoration:none;
  }

  ul{
      list-style:none
  }

`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* width: 100%; */
`;
