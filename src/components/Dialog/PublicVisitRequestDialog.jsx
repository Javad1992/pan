import React, { Fragment, useEffect, useState } from "react";
// styled components
import styled from "styled-components";
// react redux module
import { useDispatch, useSelector } from "react-redux";
// actions
import { closeModal } from "../../redux/action/modal";
import { allProducts, cities, province } from "../../redux/action/general";
// components
import InputField from "../InputField/InputField";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { updatedPublicVisitRequest } from "../../redux/action/visit";

const PublicVisitRequestDialog = ({ visitId }) => {
  const [form, setForm] = useState({
    visitCode: "",
    province: "",
    city: "مشهد",
    zone: "",
    transportationCost: false,
    product: "",
    area: "",
    distance: 0,
    cost: 0,
  });

  // declare dispatch
  const dispatch = useDispatch();

  const allproandCity = useSelector((state) => state.general);

  const provinces = allproandCity?.province;
  const sel = allproandCity?.selected;
  const products = allproandCity?.products;

  // get single visit request
  const singleVisitRequest = useSelector((state) => state.visit);
  const { updatedVisitRequest } = singleVisitRequest;

  //   handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(updatedPublicVisitRequest(visitId, form));
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

  useEffect(() => {
    if (updatedVisitRequest) {
      setForm({
        visitCode: updatedVisitRequest.visitCode,
        province: updatedVisitRequest.province,
        city: updatedVisitRequest.city,
        zone: updatedVisitRequest.zone,
        transportaionCost: false,
        product: updatedVisitRequest.product,
        area: updatedVisitRequest.area,
        distance: updatedVisitRequest.distance,
        cost: updatedVisitRequest.cost,
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
            <Title>ویرایش اطلاعات عمومی</Title>
          </ModalHeader>
          <Form onSubmit={handleSubmit}>
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
            <Select
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              name="product"
              items={products}
              label="نوع کشت"
              product={true}
            />
            <InputField
              name="zone"
              type="text"
              label="منطقه"
              onChange={handleChange}
              value={form.zone}
            />
            <InputField
              name="area"
              type="text"
              label="مساحت"
              onChange={handleChange}
              value={form.area}
            />
            <InputField
              name="distance"
              type="text"
              label="فاصله"
              onChange={handleChange}
              value={form.distance}
            />
            <InputField
              name="cost"
              type="text"
              label="قیمت"
              onChange={handleChange}
              value={form.cost}
            />
            <Button small>ویرایش</Button>
          </Form>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

const Modal = styled.div`
  display: block; 
  position: fixed;
  overflow-y: scroll;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  //background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  /* overflow-y: scroll; */
  border-radius: 5px;
  margin: 3% auto; /* 15% from the top and centered */
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
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export default PublicVisitRequestDialog;
