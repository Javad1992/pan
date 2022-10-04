import React, { Fragment, useEffect, useState } from "react";
// styled components
import styled from "styled-components";
// react redux module
import { useDispatch, useSelector } from "react-redux";
// actions
import { closeModal } from "../../redux/action/modal";
import { updatedPersonalVisitRequest } from "../../redux/action/visit";
// components
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const PersonalVisitEditDialog = ({ visitId }) => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
  });

  // get single visit request
  const singleVisitRequest = useSelector((state) => state.visit);
  const { updatedVisitRequest } = singleVisitRequest;

  // delcalre dispatch
  const dispatch = useDispatch();
  //   handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatedPersonalVisitRequest(visitId, form));
  };

  useEffect(() => {
    if (updatedVisitRequest) {
      setForm({
        fullName: updatedVisitRequest?.fullName,
        phoneNumber: updatedVisitRequest?.phoneNumber,
      });
    }
  }, [updatedVisitRequest]);

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <span
              onClick={() => dispatch(closeModal())}
              className="material-icons-sharp"
            >
              close
            </span>
            <Title>ویرایش اطلاعات شخصی</Title>
          </ModalHeader>
          <Form onSubmit={handleSubmit}>
            <InputField
              type="text"
              label="نام و نام خانوادگی"
              name="fullName"
              onChange={handleChange}
              value={form.fullName}
            />
            <InputField
              type="text"
              label="شماره تماس"
              name="phoneNumber"
              onChange={handleChange}
              value={form.phoneNumber}
            />
            <Button small>ویرایش</Button>
          </Form>
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

const Title = styled.h4`
  text-align: center;
  margin: 0 auto;
  color: #565c63;
`;

const Form = styled.form`
  margin-top: 1rem;
`;

export default PersonalVisitEditDialog;
