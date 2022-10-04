import React, { Fragment, useState } from "react";

// reac redux
import { useDispatch, useSelector } from "react-redux";
import { closeArchiveModal } from "../../redux/action/modal";
import { addToArchive } from "../../redux/action/checklist";
// components
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
// styled components module
import styled from "styled-components";

// icons
import { AiOutlineClose } from "react-icons/ai";

const ArchiveVisitDialog = () => {
  const [description, setDescription] = useState("");

  const checklistSelector = useSelector((state) => state.checklist);

  const { visitCodeChecklist } = checklistSelector;

  // declare dispatch
  const dispatch = useDispatch();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      status: true,
      visitCode: visitCodeChecklist,
      description,
    };
    console.log(data);
    dispatch(addToArchive(data));
  };

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <AiOutlineClose
              size={20}
              onClick={() => dispatch(closeArchiveModal())}
            />
            <Title>ثبت بایگانی</Title>
          </ModalHeader>
          <InputField
            type="text"
            label="توضیحات"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Wrapper>
            <Button small onClick={handleSubmit}>
              تایید
            </Button>
            <Button
              small
              space={true}
              onClick={() => dispatch(closeArchiveModal())}
            >
              منصرف شدم
            </Button>
          </Wrapper>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

const Modal = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  /* overflow-y: scroll; */
  border-radius: 5px;
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 40%; /* Could be more or less, depending on screen size */

  @media (max-width: 850px) {
    width: 60%;
  }
  @media (max-width: 599px) {
    width: 80%;
  }
  @media (max-width: 499px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    color: #6980ff;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.h4`
  text-align: center;
  margin: 0 auto;
  color: #565c63;
`;

export default ArchiveVisitDialog;
