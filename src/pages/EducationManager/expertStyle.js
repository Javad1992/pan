import styled from "styled-components";

export const WrapperTable = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 48%;
  }
`;
