import React, { useEffect } from "react";

// react router dom
import { useParams } from "react-router-dom";
// react redux
import { useDispatch, useSelector } from "react-redux";

// actions
import { detailChecklist } from "../redux/action/checklist";
import { openArchiveModal } from "../redux/action/modal";
// components
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";
// styled components
import { Container, HeaderTitle, Row } from "../globalStyle";
import styled from "styled-components";
import BasicQuestions from "../components/BasicQuestions/BasicQuestions";
import Plots from "../components/Plots/Plots";
import ArchiveVisitDialog from "../components/Dialog/ArchiveVisitDialog";

const DetailGISPage = () => {
  const { visitId } = useParams();
  // declare dispatch
  const dispatch = useDispatch();
  // detail checklist selector
  const checklistSelector = useSelector((state) => state.checklist);
  const { checklist } = checklistSelector;

  // get status of modal
  const statusModal = useSelector((state) => state.modal);
  const { isOpenArchive } = statusModal;

  const detailVisit = checklist?.visitRequest;
  const checklistPlot = checklist?.checklist?.data;
  console.log(checklist);

  useEffect(() => {
    dispatch(detailChecklist(visitId));
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Typography size="18px" weight="bold">
          جزییات بازدید انجام شده
        </Typography>
      </Row>
      <Content>
        <Wrapper>
          <Typography color="#333">نام : {detailVisit?.fullName}</Typography>
          <Typography color="#333">نوع کشت : {detailVisit?.product}</Typography>
          <Typography color="#333">
            کد کشاورزی : {detailVisit?.farmerCode}
          </Typography>
          <Typography color="#333">
            نام کارشناس : {detailVisit?.expertName}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Typography color="#333">
            آدرس : {`${detailVisit?.province}, ${detailVisit?.city} `}
          </Typography>
          <Typography color="#333">مساحت : {detailVisit?.area}</Typography>
          <Typography color="#333">تاریخ : {detailVisit?.time}</Typography>
        </Wrapper>
        <Wrapper>
          <Typography color="#333">هزینه : {detailVisit?.cost}</Typography>
          <Typography color="#333">فاصله : {detailVisit?.distance}</Typography>
        </Wrapper>
      </Content>
      <BasicQuestions baseQuestions={checklistPlot?.basicQuestions} />
      <Plots checklistPlot={checklistPlot?.plots} />
      {isOpenArchive && <ArchiveVisitDialog />}
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: -webkit-box-shadow 0px 0px 15px 2px gray;
  box-shadow: 0px 0px 15px 2px gray;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default DetailGISPage;
