import React, { Fragment, useEffect, useState } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";

// actions
import { closeExpertModal } from "../../redux/action/modal";
import { searchedExpert } from "../../redux/action/expert";
import { cities, province } from "../../redux/action/general";

// components
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import Select from "../Select/Select";

// styled components module
import styled from "styled-components";
import ListExpert from "../List/ListExpert";

const CertainExpertDialog = ({ visitId }) => {
  const [form, setForm] = useState({
    visitCode: "",
    fullName: "",
    zone: "",
    phoneNumber: "",
    province: "",
    city: "",
    nationalCode: "",
  });

  //   visit selector
  const visitSelector = useSelector((state) => state.visit);
  const { updatedVisitRequest } = visitSelector;
  console.log(updatedVisitRequest);

  // declare dispatch
  const dispatch = useDispatch();

  // handle change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  //   province and city
  const allproandCity = useSelector((state) => state.general);
  const provinces = allproandCity?.province;
  const sel = allproandCity?.selected;

  // export selector
  const expertSelector = useSelector((state) => state.expert);
  const { experts } = expertSelector;

  console.log("experts", experts);

  //   handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const data =
      form.fullName.length > 0
        ? { fullName: form.fullName }
        : form.phoneNumber.length > 0
        ? { phoneNumber: form.phoneNumber }
        : form.city.length > 0
        ? { city: form.city }
        : form.zone.length > 0
        ? { zone: form.zone }
        : form.province.length > 0
        ? { province: form.province }
        : form.nationalCode.length > 0
        ? { nationalCode: form.nationalCode }
        : null;
    const expertKey = Object.entries(data).map(([key]) => {
      return key;
    });
    const expertValue = Object.entries(data).map(([_, value]) => {
      return value;
    });

    console.log(expertKey, expertValue);

    dispatch(searchedExpert(expertKey, expertValue));
  };

  useEffect(() => {
    dispatch(province());
  }, [dispatch]);

  useEffect(() => {
    dispatch(cities());
  }, [dispatch]);

  useEffect(() => {
    if (updatedVisitRequest) {
      setForm({ ...form, visitCode: updatedVisitRequest?.visitCode });
    }
  }, [updatedVisitRequest]);

  console.log("experts", experts);

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <span
              onClick={() => dispatch(closeExpertModal())}
              className="material-icons-sharp"
            >
              close
            </span>
            <Title>انتخاب کارشناس</Title>
          </ModalHeader>
          {experts?.role ? (
            <ListExpert
              parentId={visitId}
              item={experts}
              visitCode={form.visitCode}
            />
          ) : (
            <Form onSubmit={handleSubmit}>
              <InputField
                type="text"
                label="کد بازدید"
                name="visitCode"
                onChange={handleChange}
                value={form.visitCode}
              />
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
              <Select
                onChange={(e) => setForm({ ...form, province: e.target.value })}
                name="province"
                pro={true}
                items={provinces}
                label="استان"
              />
              <Select
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                name="city"
                items={sel}
                label="شهرستان"
              />
              <InputField
                type="text"
                label="منطفه"
                name="zone"
                onChange={handleChange}
                value={form.zone}
              />
              <InputField
                type="text"
                label="کد ملی"
                name="nationalCode"
                onChange={handleChange}
                value={form.nationalCode}
              />
              <Button small>جستجو</Button>
            </Form>
          )}
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

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Item = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

export default CertainExpertDialog;
