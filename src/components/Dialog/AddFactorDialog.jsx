import React, { Fragment, useEffect, useState } from "react";
// react redux module
import { useDispatch, useSelector } from "react-redux";
// actions
import { closeFactorModal } from "../../redux/action/modal";
// components
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
// styled components module
import styled from "styled-components";
import { generateFactor, updatedFactorVisit } from "../../redux/action/visit";

const AddFactorDialog = ({ visitId }) => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    category: "بازدید",
    cost: "",
    visitCode: "",
    uid: "",
    details: "",
  });

  // get single visit request
  const singleVisitRequest = useSelector((state) => state.visit);
  const { updatedVisitRequest } = singleVisitRequest;

  // declare dispatch
  const dispatch = useDispatch();

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(generateFactor(visitId, form));
    // update factor
    // dispatch(updatedFactorVisit());
  };

  useEffect(() => {
    if (updatedVisitRequest) {
      setForm({
        fullName: updatedVisitRequest.fullName,
        phoneNumber: updatedVisitRequest.phoneNumber,
        category: "بازدید",
        cost: updatedVisitRequest.cost,
        visitCode: updatedVisitRequest.visitCode,
        uid: updatedVisitRequest.uid,
        details: "",
      });
    }
  }, [updatedVisitRequest]);

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <span
              onClick={() => dispatch(closeFactorModal())}
              className="material-icons-sharp"
            >
              close
            </span>
            <Title>ثبت فاکتور</Title>
          </ModalHeader>
          <InputField
            type="text"
            label="نام و نام خانوادگی"
            value={form.fullName}
          />
          <InputField type="text" label="شماره تماس" value={form.phoneNumber} />
          <InputField type="text" label="قیمت" value={form.cost} />
          <InputField type="text" label="کد بازدید" value={form.visitCode} />
          <InputField
            type="text"
            label="جزییات"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />
          <Wrapper>
            <Button small onClick={handleSubmit}>
              تایید
            </Button>
            <Button
              small
              space={true}
              onClick={() => dispatch(closeFactorModal())}
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

export default AddFactorDialog;
