import { Fragment } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { closeUpdateRequestExpert } from "../../../redux/action/modal";

import Button from "../../../components/Button/Button";

import { AiOutlineClose } from "react-icons/ai";
import InputField from "../../../components/InputField/InputField";
import { useState } from "react";
import { useEffect } from "react";
import { updatedExpert } from "../../../redux/action/expertService";

const UpdateDetailRequestExpert = ({ expertInfo }) => {
  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    nationalCode: "",
    degree: "",
    position: "",
    accountNumber: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(updatedExpert(expertInfo?.phoneNumber, form));
  };

  //   console.log(expertInfo);

  useEffect(() => {
    if (expertInfo) {
      setForm({
        fullName: expertInfo?.fullName,
        fatherName: expertInfo?.fatherName,
        nationalCode: expertInfo?.nationalCode,
        degree: expertInfo?.degree,
        position: expertInfo?.position,
        accountNumber: expertInfo?.accountNumber,
      });
    }
  }, [expertInfo]);

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <AiOutlineClose
              size={20}
              onClick={() => dispatch(closeUpdateRequestExpert())}
            />
            <Title>ویرایش</Title>
          </ModalHeader>
          <InputField
            type="text"
            label="نام و نام خانوادگی"
            name="fullName"
            onChange={handleChange}
            value={form.fullName}
          />
          <InputField
            type="text"
            label="نام پدر"
            name="fatherName"
            onChange={handleChange}
            value={form.fatherName}
          />
          <InputField
            type="text"
            label="کد ملی"
            name="nationalCode"
            onChange={handleChange}
            value={form.nationalCode}
          />
          <InputField
            type="text"
            label="مدرک تحصیلی"
            name="degree"
            onChange={handleChange}
            value={form.degree}
          />
          <InputField
            type="text"
            label="موقعیت شغلی"
            name="position"
            onChange={handleChange}
            value={form.position}
          />
          <InputField
            type="text"
            label="شماره حساب"
            name="accountNumber"
            onChange={handleChange}
            value={form.accountNumber}
          />
          <Wrapper>
            <Button small onClick={handleSubmit}>
              تایید
            </Button>
            <Button
              small
              space={true}
              onClick={() => dispatch(closeUpdateRequestExpert())}
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

export default UpdateDetailRequestExpert;
