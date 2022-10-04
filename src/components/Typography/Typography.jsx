import React from "react";
import { Title } from "./typographyStyle";

const Typography = ({
  children,
  color,
  size,
  weight,
  width,
  textAlign,
  onClick,
}) => {
  return (
    <Title
      color={color}
      size={size}
      weight={weight}
      width={width}
      textAlign={textAlign}
      onClick={onClick}
    >
      {children}
    </Title>
  );
};

export default Typography;
