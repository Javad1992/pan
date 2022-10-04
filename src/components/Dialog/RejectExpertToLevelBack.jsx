import React, { Fragment, useState } from "react";

// react redux
import { useDispatch } from "react-redux";
import { rejectExpert } from "../../redux/action/expertService";

// components
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { GrClose } from "react-icons/gr";

// styled components
import styled from "styled-components";
import {
  closeExpertLevelBackModal,
  closeMealPlanModal,
} from "../../redux/action/modal";
import Typography from "../Typography/Typography";
import { useNavigate } from "react-router-dom";

const RejectExpertToLevelBack = ({ phoneNumber }) => {
  const [rejectDescription, setRejectDescription] = useState("");
  const navigate = useNavigate();
  // declare dispatch
  const dispatch = useDispatch();

  // handle submit
  const handleSubmit = () => {
    dispatch(rejectExpert(phoneNumber, { rejectDescription }, navigate));
  };

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <GrClose
            size={20}
            onClick={() => dispatch(closeExpertLevelBackModal())}
          />
          <ModalHeader>
            <Typography weight="bold" textAlign="center">
              ارجاع به بخش قبل
            </Typography>
          </ModalHeader>

          <InputField
            type="text"
            label="توضیحات"
            name="supportComment"
            value={rejectDescription}
            onChange={(e) => setRejectDescription(e.target.value)}
          />
          <Wrapper>
            <Button small onClick={handleSubmit}>
              تایید
            </Button>
            <Button
              small
              space={true}
              onClick={() => dispatch(closeExpertLevelBackModal())}
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
  background-color: ${({ theme }) => theme.backgroundSidebar};
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
  justify-content: center;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.text} !important;
    cursor: pointer;
    text-align: right;
  }
  p {
    text-align: center !important;
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

export default RejectExpertToLevelBack;
