import styled from "styled-components";

export const Title = styled.p`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => (size ? size : "14px")};
  margin: 0px;
  width: ${({ width }) => (width ? width : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  a {
    color: ${({ color }) => color};
    text-decoration: none;
  }
  line-height: 200%;
  cursor: pointer;
`;
