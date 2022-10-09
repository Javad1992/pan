import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// styled components
import styled from "styled-components";
// actions
import { allProducts, cities, province } from "../../redux/action/general";
import { closeFarmerModal } from "../../redux/action/modal";
import { signupFarmer } from "../../redux/action/farmer";
// components
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Select from "../Select/Select";

const RegisterFarmerDialog = () => {
  const [form, setForm] = useState({
    phoneNumber: "",
    fullName: "",
    eName: "",
    eFamilyName: "",
    nationalCode: "",
    province: "",
    city: "",
    zone: "",
    birthDate:'',
    products: [],
  });

  const allproandCity = useSelector((state) => state.general);

  const provinces = allproandCity?.province;
  const sel = allproandCity?.selected;
  const products = allproandCity?.products;

  // declare dispatch
  const dispatch = useDispatch();

  // handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    // dispatch(signupFarmer(form));
  };

  useEffect(() => {
    dispatch(province());
  }, [dispatch]);

  useEffect(() => {
    dispatch(cities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <span
              onClick={() => dispatch(closeFarmerModal())}
              className="material-icons-sharp"
            >
              close
            </span>
            <Title>ثبت نام کشاورز</Title>
          </ModalHeader>
          <form className="form-control my-4 py-4"
            onSubmit={handleSubmit}
          >
            <div className="row">
            <div className="col-md-4">
            <InputField
              type="text"
              label="نام و نام خانوادگی"
              name="fullName"
              onChange={handleChange}
              value={form.fullName}
            />
            </div>
            <div className="col-md-4">
            <InputField
              type="text"
              label="نام به لاتین"
              name="eName"
              onChange={handleChange}
              value={form.eName}
            />
            </div>
            <div className="col-md-4">
            <InputField
              type="text"
              label="نام خانوادگی به لاتین"
              name="eFamilyName"
              onChange={handleChange}
              value={form.eFamilyName}
            />
            </div>
            <div className="col-md-4">
            <InputField
              type="text"
              label="شماره ملی"
              name="nationalCode"
              onChange={handleChange}
              value={form.nationalCode}
            />
            </div>
            <div className="col-md-4">
            <InputField
              type="text"
              label="شماره تماس"
              name="phoneNumber"
              onChange={handleChange}
              value={form.phoneNumber}
            />
            </div>
            <div className="col-md-4">
            <Select
              onChange={(e) => setForm({ ...form, province: e.target.value })}
              name="province"
              pro={true}
              items={provinces}
              label="استان"
            />
            </div>
            <div className="col-md-4">
            <Select
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              name="city"
              items={sel}
              label="شهرستان"
            />
            </div>
            <div className="col-md-4">
            <Select
              onChange={(e) => setForm({ ...form, products: [e.target.value] })}
              name="product"
              items={products}
              label="نوع کشت"
              product={true}
            />
            </div>
            <div className="col-md-4">
            <InputField
              type="text"
              label="منطقه"
              name="zone"
              onChange={handleChange}
              value={form.zone}
            />
            </div>
            <div className="col-md-4">
            <InputField
              type="text"
              label="تاریخ تولد"
              name="birthDate"
              onChange={handleChange}
              value={form.birthDate}
            />
            </div>
            </div>
            <Button small type='submit'>ثبت نام</Button>
          </form>
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
  overflow-y: scroll;
  border-radius: 5px;
  margin: 5% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  overflow-y: hidden;
  /* height: 500px; */

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
  display:flex;
  flex-direction:column;
  margin-bottom:1rem;
`;

export default RegisterFarmerDialog;
