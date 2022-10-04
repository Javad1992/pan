import React, { useState } from "react";

// components
import Typography from "../Typography/Typography";

// styled components
import { Header } from "./toggleTextStyle";

// icons
import { IoMdArrowDropdown, IoMdArrowDropleft } from "react-icons/io";

const ToggleText = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Header onClick={() => setToggle(!toggle)}>
        <Typography size="16px" weight="bold">
          {title}
        </Typography>
        {toggle ? (
          <IoMdArrowDropdown size={20} />
        ) : (
          <IoMdArrowDropleft size={20} />
        )}
      </Header>
      {toggle ? children : ""}
    </div>
  );
};

export default ToggleText;
