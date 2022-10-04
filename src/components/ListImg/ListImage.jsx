import React from "react";

// styled components
import styled from "styled-components";
import Typography from "../Typography/Typography";

const ListImage = ({ images, title }) => {
  return (
    <MainContent>
      <WrapperText>
        <Typography size="14px" weight="bold">
          {title}
        </Typography>
      </WrapperText>
      <Content>
        {images?.map((image, index) => (
          <CardImg key={index}>
            <a href={image} target="_blank">
              <Img src={image} alt="profile" />
            </a>
          </CardImg>
        ))}
      </Content>
    </MainContent>
  );
};

const WrapperText = styled.div`
  margin: 1rem 0.5rem;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-top: 1rem;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const CardImg = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 0.5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default ListImage;
