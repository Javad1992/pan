import styled from "styled-components";

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  margin-top: 1rem;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 1rem;
  }
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

export const CardContent = styled.div`
  display: flex;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  p {
    line-height: 200%;
  }
`;
