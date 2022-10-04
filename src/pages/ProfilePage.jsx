import React, { useEffect, useState } from "react";
// react redux module
import { useDispatch, useSelector } from "react-redux";
// actions
import { allAvatarUrl, selectImageFile } from "../redux/action/profile";
// global styled components
import { Container, HeaderTitle } from "../globalStyle";
import styled from "styled-components";
// components
import Button from "../components/Button/Button";
import ImageInput from "../ImageInput/ImageInput";
// image background

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);

  const profileSelector = useSelector((state) => state.profile);
  const { staticAvatars } = profileSelector;

  // declare dispatch
  const dispatch = useDispatch();
  // get all static avatar

  // upload image
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", profileImage);
    dispatch(selectImageFile(formData));
    setProfileImage(null);
  };

  useEffect(() => {
    dispatch(allAvatarUrl());
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>پروفایل شخصی</HeaderTitle>
      <Wrapper>
        <Right>
          <Title>انتخاب آواتار</Title>
          <WrapperRight>
            <ImageContainer>
              {/* {staticAvatars?.map((image) => (
                <img src={image.avatarUrl} />
              ))} */}
            </ImageContainer>
            <Button small>تایید</Button>
          </WrapperRight>
        </Right>
        <Left>
          <Title>انتخاب عکس</Title>
          <WrapperLeft>
            <ImageInput
              onClick={uploadImage}
              profileImage={profileImage}
              setProfileImage={setProfileImage}
            />
          </WrapperLeft>
        </Left>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
  background-color: #ececec;
  display: flex;
  padding: 2rem 1rem;
  border-radius: 5px;
`;
const Right = styled.div`
  width: 48%;
  margin: 0.5rem;
`;
const Left = styled.div`
  width: 48%;
  margin: 0.5rem;
`;

const Title = styled.h6`
  color: #565c63;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;
const WrapperRight = styled.div`
  margin: 0.5rem 0 0.5rem 0.5rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0.5rem;
    cursor: pointer;
  }
`;

const WrapperLeft = styled.div`
  margin: 0.5rem 0 0.5rem 0.5rem;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 5px;
`;

export default ProfilePage;
