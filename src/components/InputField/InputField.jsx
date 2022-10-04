import React from "react";
import styled from "styled-components";

const InputField = ({
  label,
  type,
  placeholder,
  onChange,
  name,
  value,
  space,
  accept,
  onKeyDown,
}) => {
  return (
    <FormControl space={space}>
      <Label htmlFor={label}>{label}</Label>
      <Input
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        id={label}
        accept={accept}
        onKeyDown={onKeyDown}
      />
    </FormControl>
  );
};

const FormControl = styled.div`
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
  color: ${({ theme }) => theme.text};
  margin: 0px 0px 0.4rem 0px;
`;
const Input = styled.input`
  -webkit-appearance: none;
  border: 1px solid #c8cccf;
  border-radius: 5px;
  outline: none;
  font-size: 0.8rem;
  background-color: transparent;
  height: calc(2.25rem + 2px);
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.text};
`;

export default InputField;
