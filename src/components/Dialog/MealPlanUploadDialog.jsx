import React, { Fragment, useState } from "react";

// react redux
import { useDispatch } from "react-redux";
import { closeMealPlanModal } from "../../redux/action/modal";
import { addMealPlan } from "../../redux/action/questionnaire";

// components
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

// stled components
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import Loading from "../Loading/Loading";
import styled from "styled-components";
const MealPlanUploadDialog = ({ Qcode, pid, farmerCode, area }) => {
  const [files, setFiles] = useState(null);

  // declare dispatch
  const dispatch = useDispatch();

  // navigate
  const navigate = useNavigate();

  const questionnaireSelector = useSelector((state) => state.questionnaire);
  const { loading } = questionnaireSelector;

  console.log(loading);

  //   handle submit
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("files", files);
    formData.append("farmerCode", farmerCode);
    formData.append("Qcode", Qcode);
    formData.append("pid", pid);
    dispatch(addMealPlan(formData, navigate, area));
  };

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <GrClose size={20} onClick={() => dispatch(closeMealPlanModal())} />
            <Title>آپلود برنامه غذایی</Title>
          </ModalHeader>
          <InputField
            type="file"
            label="فایل برنامه غذایی"
            onChange={(e) => setFiles(e.target.files[0])}
            accept=".pdf"
          />

          <Wrapper>
            <Button small onClick={handleSubmit}>
              {loading ? <Loading /> : "تایید"}
            </Button>
            <Button
              small
              space={true}
              onClick={() => dispatch(closeMealPlanModal())}
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
  justify-content: flex-start;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }

  p {
    color: ${({ theme }) => theme.text};
    text-align: center;
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
  color: ${({ theme }) => theme.text};
`;

export default MealPlanUploadDialog;
