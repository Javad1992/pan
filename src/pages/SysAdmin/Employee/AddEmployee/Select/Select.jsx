import { Fragment } from "react";
import { Label, Option, SelectInput } from "./selectStyle";

const Select = ({ label, options, onChange }) => {
  return (
    <div className="mt-2">
      <Label>{label}</Label>
      <SelectInput onChange={onChange}>
        {options.map((option, index) => (
          <Option value={option.value} key={index}>
            {option.label}
          </Option>
        ))}
      </SelectInput>
    </div>
  );
};

export default Select;
