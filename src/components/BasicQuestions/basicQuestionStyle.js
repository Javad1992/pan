import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  width: 30%;
  margin: 1rem 0.7rem;

  @media (max-width: 1023px) {
    width: 50% !important;
  }

  @media (max-width: 768px) {
    width: 70% !important;
  }

  @media (max-width: 568px) {
    width: 100% !important;
  }

  .wrapper {
    padding: 0 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
  cursor: pointer;
  &:hover {
    background-color: #8b9dc3;
    transition: all 0.4s ease-in-out;
  }
`;

/* export const MainQuestion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
`; */
