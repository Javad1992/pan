import React from "react";
// react redux module
import { useDispatch } from "react-redux";
// actions
import { citiesByProvince } from "../../redux/action/general";
// styled components
import styled from "styled-components";

const Select = ({ label, items, pro, product, onChange, name }) => {
  //   declare dispatch
  const dispatch = useDispatch();

  if (product) {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <SelectStyle onChange={onChange} name={name}>
          {items?.map((item) => (
            <Option key={item.pid} value={item.persianName}>
              {item?.persianName}
            </Option>
          ))}
        </SelectStyle>
      </FormGroup>
    );
  }

  return (
    <FormGroup>
      <Label>{label}</Label>
      <SelectStyle
        name={name}
        onChange={onChange}
        onClick={(e) => {
          if (pro === true) {
            dispatch(citiesByProvince(e.target.value));
          } else {
            return null;
          }
        }}
      >
        {items?.map((item) => (
          <Option key={item._id} value={pro ? item.persianName : item.name}>
            {item?.name}
          </Option>
        ))}
      </SelectStyle>
    </FormGroup>
  );
};

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: ${({ space }) => (space ? "5px" : "0")};
  margin-top: 0.4rem;
  /* margin-left: 1.5rem; */
  /* justify-content: space-between; */
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  margin-bottom: 0.4rem;
`;

const SelectStyle = styled.select`
  width: 100%;
  border: 1px solid #c8cccf;
  padding: 0.4rem;
  border-radius: 5px;
  font-family: "IRAN";
  color: #495057;
  outline: none;
`;

const Option = styled.option``;

export default Select;
