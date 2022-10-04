import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #8b9dc3;
    transition: all 0.4s ease-in-out;
  }
`;
