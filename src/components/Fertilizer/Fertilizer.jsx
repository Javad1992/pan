import React from "react";
// components
import Typography from "../Typography/Typography";
// styled components
import styled from "styled-components";

const Fertilizer = ({ fertilizers }) => {
  return (
    <Content>
      <Typography size="16px" weight="bold">
        کودهای پیشنهادی
      </Typography>
      {fertilizers?.map((fertilizer) => (
        <Row key={fertilizer?._id}>
          <a href={fertilizer?.imageUrl} alt={fertilizer?.name} target="_blank">
            <img src={fertilizer?.imageUrl} />
          </a>
          <Wrapper>
            <Typography>نام : {fertilizer?.name}</Typography>
            <Typography>
              منبع : {fertilizer?.source?.map((item) => ` ${item}`)}
            </Typography>
            <Typography>
              {" "}
              تعداد : {fertilizer?.stock === true ? "موجود" : "عدم موجودی"}
            </Typography>
          </Wrapper>
          <Wrapper>
            <Typography>کد : {fertilizer?.code}</Typography>
            <Typography>تاریخ : {fertilizer?.date}</Typography>
          </Wrapper>{" "}
          <Wrapper>
            <Typography>
              فرم کود : {fertilizer?.form?.map((item) => ` ${item}`)}
            </Typography>
            <Typography>بسته بندی : {fertilizer?.packageType}</Typography>
            <Typography>شرکت : {fertilizer?.producer}</Typography>
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
  padding: 1rem;
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
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Fertilizer;
