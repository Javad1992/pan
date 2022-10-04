import React, { Fragment, useState } from "react";
// useDispatch from react redux
import { useDispatch } from "react-redux";
// useNavigate from react router dom
import { Link, useNavigate } from "react-router-dom";
// components
import Button from "../Button/Button";
// action for logout
import { logoutUser } from "../../redux/action/auth";
// getting user data
import { userData } from "../../help/userData";
// styled components
import styled from "styled-components";
// background profile
import bg from "../../assets/images/user.png";
// icons
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);
  //   declare dispatch
  const dispatch = useDispatch();
  // declare navigate
  const navigate = useNavigate();
  // get information user
  const userInformation = userData()?.data;
  const { fullName, section, avatarUrl } = userInformation?.result?.employee;
  return (
    <Fragment>
      <ProfileStyle onClick={() => setShowProfile(!showProfile)}>
        <img src={bg} alt="profle" />
        <IoMdArrowDropdown size={20} />
      </ProfileStyle>
      {showProfile && (
        <ModalProfile>
          <ProfileDetails>
            <Details>
              <Wrapper>
                <img src={bg} alt="profile" />
                <div>
                  <Title>{fullName}</Title>
                  <SubTitle>{section}</SubTitle>
                </div>
              </Wrapper>
              <Wrapper>
                <Link to="/dashboard/app/profile">
                  <FiSettings size={20} />
                </Link>
                <Button small onClick={() => dispatch(logoutUser(navigate))}>
                  خروج از پنل
                </Button>
              </Wrapper>
            </Details>
          </ProfileDetails>
        </ModalProfile>
      )}
    </Fragment>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
  }
  span {
    color: #8e9296;
  }
`;

const ModalProfile = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 330px;
  top: 77px;
  z-index: 100;
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
  @media (max-width: 500px) {
    left: 230px;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  width: 350px;
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    width: 300px;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 30px;
    height: 30px;
    margin-top: 1rem;
    span {
      color: gray;
    }
  }
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #565c63;
  margin-right: 0.5rem;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const SubTitle = styled.p`
  font-size: 10px;
  color: #565c63;
  margin-right: 0.5rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 9px;
    font-weight: bold;
  }
`;

export default Profile;
