import React, { Fragment, useEffect, useState } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { closeGisModal } from "../../redux/action/modal";
import { allProducts } from "../../redux/action/general";
import { uploadVisitReport } from "../../redux/action/visit";

// components
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import Select from "../Select/Select";

// styled components
import styled from "styled-components";

const UploadReportModal = () => {
  const [form, setForm] = useState({
    product: [],
    visitCode: "",
    files: null,
  });

  // declare dispatch
  const dispatch = useDispatch();

  //   all products
  const allproandCity = useSelector((state) => state.general);
  const products = allproandCity?.products;

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("product", form.product);
    formData.append("visitCode", form.visitCode);
    formData.append("files", form.files);

    dispatch(uploadVisitReport(formData));
  };

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <span
              onClick={() => dispatch(closeGisModal())}
              className="material-icons-sharp"
            >
              close
            </span>
            <Title>آپلود پیش تحلیل بازدید</Title>
          </ModalHeader>
          <Select
            onChange={(e) => setForm({ ...form, product: e.target.value })}
            name="product"
            items={products}
            label="نوع کشت"
            product={true}
          />
          <InputField
            type="text"
            label="کد بازدید"
            value={form.visitCode}
            // onChange={(e) => setForm({ ...form, visitCode: e.target.value })}
          />
          <InputField
            type="file"
            label="انتخاب فایل"
            onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
          />
          <Wrapper>
            <Button small onClick={handleSubmit}>
              تایید
            </Button>
            <Button
              small
              space={true}
              onClick={() => dispatch(closeGisModal())}
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
export default UploadReportModal;
