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

const SingleVisitRequestPage = () => {
  // declare params
  const { parentId } = useParams();
  console.log(parentId);
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

  console.log(updatedVisitRequest);

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
          <Item>
            <Button
              small
              color="#51D451"
              onClick={() => dispatch(openFarmerModal())}
            >
              ثبت نام کشاورز
            </Button>
          </Item>
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
      {visit?.map((item, index) => (
        <PublicInfo key={index}>
          <Wrapper>
            <Item>
              <Title>نام و نام خانوادگی :</Title>
              <SubTitle>{item.fullName}</SubTitle>
            </Item>
            <Item>
              <Title>نوع کشت :</Title>
              <SubTitle>{item.product}</SubTitle>
            </Item>
            <Item>
              <Title>شماره تماس :</Title>
              <SubTitle>{item.phoneNumber}</SubTitle>
            </Item>
            <Item>
              <Title>مساحت :</Title>
              <SubTitle>{item.area}</SubTitle>
            </Item>
          </Wrapper>
          <Wrapper>
            <Item>
              <Title>کد کشاورزی :</Title>
              <SubTitle>{item.farmerCode}</SubTitle>
            </Item>
            <Item>
              <Title>آدرس :</Title>
              <SubTitle>{`${item.province} , ${item.city}  `}</SubTitle>
            </Item>
            <Item>
              <Title>فاصله :</Title>
              <SubTitle>{item.distance}</SubTitle>
            </Item>
            <Item>
              <Title>قیمت :</Title>
              <SubTitle>{item.cost}</SubTitle>
            </Item>
          </Wrapper>
          <Wrapper>
            <Item>
              <Button small onClick={() => dispatch(openModal(item._id))}>
                ویرایش
              </Button>
            </Item>
            <Item>
              <Button
                small
                color="#08313A"
                onClick={() => {
                  dispatch(sendQuestion(item?.visitCode));
                }}
              >
                ارسال پرسشنامه
              </Button>
            </Item>
            <Item>
              <Button
                small
                color="#da624a"
                onClick={() => dispatch(openFactorModal(item._id))}
              >
                ثبت فاکتور
              </Button>
            </Item>
            <Item>
              <Button
                small
                color="#51D451"
                onClick={() => {
                  dispatch(openExpertModal(item._id));
                  console.log("item?.id", item._id);
                }}
              >
                تعیین کارشناس
              </Button>
            </Item>
            <Item>
              <Button
                small
                color="#F81C0B"
                onClick={() =>
                  dispatch(removeVisitRequest(parentId, item?.visitCode))
                }
              >
                حذف
              </Button>
            </Item>
          </Wrapper>
        </PublicInfo>
      ))}
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
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 12px;
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
