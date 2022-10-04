import React, { useEffect } from "react";

// react router dom
import { useParams } from "react-router-dom";

// react redux
import { useDispatch, useSelector } from "react-redux";
import {
  detailQuestionnaire,
  rejectedMealPaln,
  updateQuestions,
} from "../redux/action/questionnaire";
import { Container, HeaderTitle, Row } from "../globalStyle";
import {
  openArchiveQuestionModal,
  openMealPlanModal,
} from "../redux/action/modal";
// components
import Typography from "../components/Typography/Typography";
import ListImage from "../components/ListImg/ListImage";
import BasicQuestions from "../components/BasicQuestions/BasicQuestions";
import Fertilizer from "../components/Fertilizer/Fertilizer";
import Inventory from "../components/Inventory/Inventory";
import Button from "../components/Button/Button";
import Plots from "../components/Plots/Plots";
import ArchiveQuestionnaireDialog from "../components/Dialog/ArchiveQuestionnaireDialog";
// helper
import { userData } from "../help/userData";
// styled components
import styled from "styled-components";
import LeafTest from "../components/LeafTest/LeafTest";
import SoilTest from "../components/SoilTest/SoilTest";
import WaterTest from "../components/WaterTest/WaterTest";
import { formatData, separate } from "../utils/date";
import Loading from "../components/Loading/Loading";
import RejectMealPlanList from "../components/List/RejectMealPlanList";
import RejectMealPlanDialog from "../components/Dialog/RejectMealPlanDialog";

const EditQuestionnaireDetailPage = () => {
  // user information
  const { role } = userData()?.data?.result?.employee;

  // declare dispatch
  const dispatch = useDispatch();
  //   use params
  const { Qcode } = useParams();

  // qestionnaire selector
  const questionnaireSelector = useSelector((state) => state.questionnaire);
  const { questionnaire, questionForm, isLoadingQuestionnaire } =
    questionnaireSelector;
  const questions = questionnaire?.data;
  //   open modal
  const modalSelector = useSelector((state) => state.modal);
  const { isOpenArchiveQuestionModal, isOpenMealPlanModal } = modalSelector;

  const handleConfirm = () => {
    const result = {
      ...questionnaire,
      data: {
        ...questions,
        leafTest: questionForm?.leafTest,
        soilTest: questionForm?.soilTest,
        waterTest: questionForm?.waterTest,
      },
    };

    dispatch(updateQuestions(result, Qcode));
  };

  useEffect(() => {
    dispatch(detailQuestionnaire(Qcode));
  }, [dispatch]);

  if (!questionnaire) {
    return <Loading />;
  }

  return (
    <Container>
      <Row>
        <HeaderTitle>جزییات پرسشنامه</HeaderTitle>

        <Button
          color="#DC3545"
          small
          onClick={() => dispatch(openMealPlanModal())}
          weight="bold"
        >
          برگشت دادن
        </Button>
      </Row>
      {(questionnaire.record?.comment && questionnaire.record?.comment.length !== 0) && (
          <Content>
            <Col>
              <span style={{width:"100%", textAlign:"center"}}>توضیحات پیگیری پرسشنامه</span>
              {questionnaire.record?.comment?.map((comm, index) => (
                  <Typography key={index}>
                    <span style={{ fontWeight: "bold" }}>توضیحات : </span>
                    {comm?.content}
                  </Typography>
              ))}
            </Col>
          </Content>
      )}

      {(questionnaire.record?.educationReject && questionnaire.record?.educationReject.length !== 0) && (
          <Content>
            <Col>
              <span style={{width:"100%", textAlign:"center"}}>توضیحات مدیر ارشد</span>
              {questionnaire.record?.educationReject?.map((comm, index) => (
                  <Typography key={index}>
                    <span style={{ fontWeight: "bold" }}>توضیحات : </span>
                    {comm?.content}
                  </Typography>
              ))}
            </Col>
          </Content>
      )}
      <Content>
        <Wrapper>
          <Typography size="15px">نام : {questionnaire?.fullName}</Typography>
          <Typography size="15px">
            نوع کشت : {questionnaire?.product}
          </Typography>
          <Typography size="15px">
            شماره تماس : {questionnaire?.phoneNumber}
          </Typography>

          {/* <Typography color="#333">
            نام کارشناس : {detailVisit?.expertName}
          </Typography> */}
        </Wrapper>
        <Wrapper>
          <Typography size="15px">آدرس : {questionnaire?.city}</Typography>
          <Typography size="15px">
            مساحت : {questionnaire?.area} هکتار
          </Typography>
        </Wrapper>
        <Wrapper>
          <Typography size="15px">
            تاریخ : {formatData(questionnaire?.date?.toString())}
          </Typography>
          <Typography size="15px">
            کد کشاورزی : {questionnaire?.farmerCode}
          </Typography>
        </Wrapper>
      </Content>
      {questions?.farmOrchardImages?.length > 0 && (
        <ListImage images={questions?.farmOrchardImages} />
      )}

      {/* اطلاعات مزرعه */}
      <BasicQuestions
        title="اطلاعات مزرعه"
        baseQuestions={questions?.farmQuestions}
      />
      {/* اظلاعات قطعه */}
      {/* index + 1 */}
      <Plots checklistPlot={questions?.plots} />
      {/* اطلاعات منطقه */}
      <BasicQuestions
        title="اطلاعات منطقه"
        baseQuestions={questions?.zoneQuestions}
      />
      {/* موجودی انبار */}
      {questions?.inventory?.length > 0 && (
        <Inventory inventory={questions?.inventory} />
      )}
      {/* کودهای پیشنهادی */}
      {questions?.fertilizers?.length > 0 && (
        <Fertilizer fertilizers={questions?.fertilizers} />
      )}
      {/* <BasicQuestions baseQuestions={checklistPlot?.basicQuestions} />
      <Plots checklistPlot={checklistPlot?.plots} />
      {isOpenArchive && <ArchiveVisitDialog />} */}
      {/* <QuestionnaireEdit /> */}
      {isOpenArchiveQuestionModal && (
        <ArchiveQuestionnaireDialog Qcode={questionnaire.Qcode} />
      )}
      {isOpenMealPlanModal && (
        <RejectMealPlanDialog
          Qcode={questionnaire?.Qcode}
          pid={questionnaire?.pid}
          farmerCode={questionnaire?.farmerCode}
          role={role}
        />
      )}
      <WrapperTest>
        {questions?.soilTest && (
          <SoilTest role={role} soilTest={questions?.soilTest} />
        )}
        {questions?.waterTest && (
          <WaterTest role={role} waterTest={questions?.waterTest} />
        )}
        {questions?.leafTest && (
          <LeafTest role={role} leafTest={questions?.leafTest} />
        )}
      </WrapperTest>
      {role === "Qsupport" && (
        <Button color="#6980FF" small onClick={handleConfirm} weight="bold">
          {isLoadingQuestionnaire ? (
            <Typography size="10px">Loading...</Typography>
          ) : (
            "ارجاع به بخش بعد"
          )}
        </Button>
      )}
    </Container>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  margin-top: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperTest = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export default EditQuestionnaireDetailPage;
