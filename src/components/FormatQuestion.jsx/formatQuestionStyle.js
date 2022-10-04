import styled from "styled-components";

export const MainQuestion = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-child(odd) {
    background-color: ${({theme})=>theme.border};

  }
`;
