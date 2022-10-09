import styled from 'styled-components'

export const PersonalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSidebar};

  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.p`
  color: gray;
  font-size: 16px;
  line-height:200%;
  
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: bold;
  margin-right: 0.3rem;
`;

export const PublicInfo = styled.div`
margin: 0.5rem 0;
background-color: ${({ theme }) => theme.backgroundSidebar};
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 1rem;
border-radius: 10px;
`;