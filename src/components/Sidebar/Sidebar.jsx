import React, { Fragment, useState } from "react";
// react router dom module
import { Link } from "react-router-dom";
// helper
import { userData } from "../../help/userData";
// styled components module
import styled from "styled-components";
// sidebar data
import SidebarData from "../../data/sidebarData.json";
// icons
import { BsCardChecklist } from "react-icons/bs";
import { GoArrowSmallDown } from "react-icons/go";

const Sidebar = () => {
  const [showSub, setShowSub] = useState(false);
  const userInfo = userData();
  const role = userInfo?.data?.result?.employee?.role;
  const sidebarMenu = SidebarData.filter((item) => item.role === role);
  console.log(SidebarData);
  console.log(sidebarMenu);
  // edueactionManager
  // educationManager

  return (
    <SidebarStyle>
      <Logo>
        <TitleLogo>Agroyaar</TitleLogo>
      </Logo>
      <MenuList>
        {sidebarMenu[0].features?.map((feature, index) => {
          console.log(feature);
          if (feature?.child?.length > 0) {
            return (
              <Fragment key={index}>
                <MenuListItem onClick={() => setShowSub(!showSub)}>
                  {/* <Link to="/"> */}
                  <BsCardChecklist size={20} style={{ marginLeft: ".5rem" }} />
                  <p style={{ marginBottom: ".5rem " }}>
                    {feature.display_name}
                  </p>
                  <GoArrowSmallDown size={20} style={{ marginLeft: ".5rem" }} />
                  {/* </Link> */}
                </MenuListItem>
                {showSub &&
                  feature.child.map((sub, index) => (
                    <MenuListItem key={index}>
                      <Link to={sub.route}>
                        <BsCardChecklist
                          size={20}
                          style={{ marginLeft: ".5rem" }}
                        />
                        <p>{sub.display_name}</p>
                      </Link>
                    </MenuListItem>
                  ))}
              </Fragment>
            );
          } else {
            return (
              <MenuListItem key={index}>
                <Link to={feature.route}>
                  <BsCardChecklist size={20} style={{ marginLeft: ".5rem" }} />
                  <p>{feature.display_name}</p>
                </Link>
              </MenuListItem>
            );
          }
        })}
      </MenuList>
    </SidebarStyle>
  );
};

const SidebarStyle = styled.div`
  width: 240px;
  transition: all 0.4s ease-in-out;

  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  -webkit-box-shadow: -1px 0px 9px 0px #000000;
  box-shadow: 5px 0px 8px 0px #000000;
  @media (max-width: 899px) {
    width: 50px;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: all 0.4s ease-in-out;
`;

const TitleLogo = styled.p`
  /* background: -webkit-linear-gradient(#6980ff, #6980ff); */
  color: #6980ff;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin: 10px;
  @media (max-width: 899px) {
    font-size: 16px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #495057;
  transition: 0.4s all ease-in-out;
  cursor: pointer;
  margin: 0.5rem 0;
  span {
    color: ${({ theme }) => theme.text};
    margin-left: 0.5rem;
  }
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9ea4a9;
    margin-top: 5px;
  }
  p {
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  &:hover {
    transform: translateX(-10px);
  }
  @media (max-width: 899px) {
    justify-content: center;
    cursor: pointer;
    p {
      display: none;
    }
    /* &:hover {
      transform: translateX(0);
    } */
  }
`;

const MenuListDropdouwn = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 5rem;
  list-style: none;
  -webkit-animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @-webkit-keyframes scale-up-top {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
    }
  }
  @keyframes scale-up-top {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
    }
  }

  @media (max-width: 900px) {
    background-color: #f5f5f5;
    border-radius: 10px;

    padding-right: 1rem;
    margin-right: 10rem;
    width: 200px;
  }
`;

const MenuListItemDropDown = styled.li`
  display: flex;
  a {
    text-decoration: none;
    color: #8e98a3;
    font-size: 12px;
    font-weight: bold;
    margin: 0.3rem 0;
    @media (max-width: 900px) {
      color: #8e98a3;
    }
  }
`;

export default Sidebar;
