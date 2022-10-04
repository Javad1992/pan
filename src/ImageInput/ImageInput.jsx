import React from "react";
// react reduux module
import { useDispatch } from "react-redux";
// actions
import { selectImageFile } from "../redux/action/profile";
// components
import Button from "../components/Button/Button";
// styled components module
import styled from "styled-components";

const ImageInput = ({ profileImage, setProfileImage, onClick }) => {
  // declare dispatch

  return (
    <ImageInputStyle>
      <Input
        onChange={(e) => setProfileImage(e.target.files[0])}
        accept="image/*"
        type="file"
        id="image"
      />
      <Title htmlFor="image">
        {profileImage === null ? "آپلود عکس..." : profileImage?.name}
      </Title>
      <Button small onClick={onClick}>
        تایید
      </Button>
    </ImageInputStyle>
  );
};

const ImageInputStyle = styled.div`
  width: 100%;
  padding: 0.5rem;
`;

const Input = styled.input`
  display: none;
  cursor: pointer;
  border: 1px solid gray;
`;

const Title = styled.label`
  /* width: 100%; */
  border-radius: 5px;
  height: 35px;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: flex-start;
  color: #495057 !important;
  font-family: "IRAN";
  cursor: pointer;
  border: 1px solid #e9ecef;
`;

export default ImageInput;
