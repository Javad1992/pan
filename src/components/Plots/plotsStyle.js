import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlotQuestion = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Plot = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
`;
