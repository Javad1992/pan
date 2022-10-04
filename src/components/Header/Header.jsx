import React from "react";
// components
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Typography from "../Typography/Typography";
// styled components module
import styled from "styled-components";
const Header = () => {
  return (
    <Wrapper>
      <HeaderTitle>
        <Typography size="16px" weight="bold">
          داشبورد
        </Typography>
      </HeaderTitle>
      <WrapperProfile>
        {/* <Search /> */}
        <Profile />
      </WrapperProfile>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  height: 58px;
  padding: 0 1rem;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4`
  color: #${({ theme }) => theme.text};
  font-size: 1.25rem;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export default Header;
