import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "../../../../components/Button/Button";
import InputField from "../../../../components/InputField/InputField";
import { Container, HeaderTitle } from "../../../../globalStyle";
import { insertEmployee } from "../../../../redux/action/sysAdmin";
import { Wrapper } from "./addEmployeeStyle";
import Select from "./Select/Select";

const initialState = [
  {
    id: "1",
    label: "انتخاب کنید",
    value: "",
  },
  {
    id: "2",
    label: "انتخاب کنید",
    value: "",
  },

  {
    id: "3",
    label: "انتخاب کنید",
    value: "",
  },

  {
    id: "4",
    label: "انتخاب کنید",
    value: "",
  },
];

const AddEmployee = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    organizationalPosition: "",
    organizationalCode: "",
    section: "",
    unit: "",
    role: "",
    password: "",
    passwordConfirmation: "",
  });

  const dispatch = useDispatch();

  const syeSelector = useSelector((state) => state.sysAdmin);
  const { addEmployeeLoading } = syeSelector;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(insertEmployee(form));
  };

  return (
    <Container>
      <HeaderTitle>افزودن کارمند جدید</HeaderTitle>
      <Wrapper>
        <div className="row p-3">
          <div className="col-4">
            <InputField
              type="text"
              label="نام و نام خانوادگی"
              name="fullName"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <InputField
              type="number"
              label="شماره تماس"
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <InputField
              type="password"
              label="رمز کارمندی"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <InputField
              type="password"
              label="تایید رمز کارمندی"
              name="passwordConfirmation"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <Select
              options={initialState}
              label="organizationalPosition"
              name="organizationalPosition"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <Select
              options={initialState}
              label="organizationalCode"
              name="organizationalCode"
            />
          </div>
          <div className="col-4">
            <Select
              options={initialState}
              label="section"
              name="section"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <Select
              options={initialState}
              label="unit"
              name="unit"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <Select
              options={initialState}
              label="role"
              name="role"
              onChange={handleChange}
            />
          </div>
          <div className="col-4">
            <Button small weight="bold" onClick={handleSubmit}>
              {addEmployeeLoading ? (
                <Spinner animation="border" variant="light" color="light" />
              ) : (
                "تایید"
              )}
            </Button>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default AddEmployee;
