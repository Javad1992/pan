import styled from "styled-components";

export const Conttent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
`;

export const WrapperCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 1rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 10px;
`;
