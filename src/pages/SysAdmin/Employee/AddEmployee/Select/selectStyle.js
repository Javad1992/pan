import styled from "styled-components";

export const SelectInput = styled.select`
  padding: 0.4rem;
  border: 1px solid #c8cccf;
  width: 100%;
  color: #565c63;
  font-size: 14px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin: 0px 0px 0.2rem 0px;
`;

export const Option = styled.option``;
