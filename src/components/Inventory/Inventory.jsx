import React from "react";
// components
import Typography from "../Typography/Typography";

// styled components
import styled from "styled-components";

const Inventory = ({ inventory }) => {
  return (
    <Content>
      <Typography size="16px" weight="bold">
        موجودی انبار
      </Typography>
      {inventory?.map((invet) => (
        <Row key={invet?.id}>
          <Wrapper>
            <Typography>نام : {invet?.fertilizerName}</Typography>
            <Typography>نوع : {invet?.fertilizerType}</Typography>
            <Typography> مقدار : {invet?.inventory}</Typography>
          </Wrapper>
          <Wrapper>
            <a href={invet?.onPackImageName}>
              <Img src={invet?.onPackImageName} />
            </a>
          </Wrapper>
          <Wrapper>
            <a href={invet?.tableOfElementsImageName}>
              <Img src={invet?.tableOfElementsImageName} />
            </a>
          </Wrapper>
        </Row>
      ))}
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  margin-top: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export default Inventory;
