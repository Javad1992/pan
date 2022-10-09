import React, { useEffect } from "react";
// react redux module
import { useDispatch, useSelector } from "react-redux";
// react router dom module
import { useParams } from "react-router-dom";
// actions
import {
  fetchSingleVisitRequest,
  removeVisitRequest,
  sendQuestion,
} from "../redux/action/visit";
import {
  openExpertModal,
  openFactorModal,
  openFarmerModal,
  openModal,
  openModalPersonalEdit,
} from "../redux/action/modal";
// components
import Button from "../components/Button/Button";
import PersonalVisitEditDialog from "../components/Dialog/PersonalVisitEditDialog";
import PublicVisitRequestDialog from "../components/Dialog/PublicVisitRequestDialog";
import ConfirmCostDialog from "../components/Dialog/ConfirmCostDialog";
import RegisterFarmerDialog from "../components/Dialog/RegisterFarmerDialog";
import AddFactorDialog from "../components/Dialog/AddFactorDialog";
import CertainExpertDialog from "../components/Dialog/CertainExpertDialog";
import Typography from "../components/Typography/Typography";
// styled components
import styled from "styled-components";
import { Container } from "../globalStyle";
import Loading from "../components/Loading/Loading";
import TabsContainer from "./VisitService/Tabs/Tabs";
import { TabWrapper } from "./VisitService/Tabs/tabStyle";

const SingleVisitRequestPage = () => {
  // declare params
  const { parentId } = useParams();
  // declare dispatch
  const dispatch = useDispatch();
  // get single visit request
  const singleVisitRequest = useSelector((state) => state.visit);
  const { visit, updatedVisitRequest } = singleVisitRequest;
  // get status of modal
  const statusModal = useSelector((state) => state.modal);
  const {
    isOpen,
    isOpenCostModal,
    isOpenFarmer,
    isOpenFactor,
    isOpenExpert,
    isOpenPersonalModal,
  } = statusModal;

  useEffect(() => {
    dispatch(fetchSingleVisitRequest(parentId));
  }, [dispatch]);

  if (!visit) {
    return <Loading />;
  }

  return (
    <Container>
      <Typography size="18px" weight="bold">
        جزییات درخواست بازدید{" "}
      </Typography>
      
      <PersonalInfo>
        <Wrapper>
          <Item>
            <Title>نام و نام خانوادگی :</Title>
            <SubTitle>{visit[0]?.fullName}</SubTitle>
          </Item>
          <Item>
            <Title>شماره تلفن :</Title>
            <SubTitle>{visit[0]?.phoneNumber}</SubTitle>
          </Item>
        </Wrapper>
        <Wrapper>
          {!visit[0]?.farmerCode && (
              <Item>
              <Button
                small
                color="#51D451"
                onClick={() => dispatch(openFarmerModal())}
              >
                استعلام کشاورز
              </Button>
            </Item>
          )}
          <Item>
            <Button
              small
              onClick={() => dispatch(openModalPersonalEdit(visit[0]?._id))}
            >
              ویرایش
            </Button>
          </Item>
        </Wrapper>
      </PersonalInfo>
      {visit[0]?.farmerCode ? (
      <TabWrapper>
      <TabsContainer visit={visit} />
      </TabWrapper>
      ) : (
        <Typography>برای ادامه پردازش درخواست فرد مورد نظر باید کشاورز باشد .</Typography>
      )}
      {isOpenPersonalModal && <PersonalVisitEditDialog visitId={parentId} />}
      {isOpenFarmer && <RegisterFarmerDialog />}
      {isOpen && <PublicVisitRequestDialog visitId={parentId} />}
      {isOpenCostModal && <ConfirmCostDialog visitId={parentId} />}
      {isOpenFactor && <AddFactorDialog visitId={parentId} />}
      {isOpenExpert && <CertainExpertDialog visitId={parentId} />}
    </Container>
  );
};

const PersonalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSidebar};

  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  color:gray;
  font-size: 16px;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: bold;
  margin-right: 0.3rem;
`;

const PublicInfo = styled.div`
  margin: 0.5rem 0;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
`;

export default SingleVisitRequestPage;
