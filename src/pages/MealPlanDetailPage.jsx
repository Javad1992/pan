import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import {
  detailQuestionnaire,
  mealPlanDetail,
} from "../redux/action/questionnaire";

// components
import Typography from "../components/Typography/Typography";
import RejectMealPlanDialog from "../components/Dialog/RejectMealPlanDialog";

// react router dom
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ListImage from "../components/ListImg/ListImage";
import BasicQuestions from "../components/BasicQuestions/BasicQuestions";
import Plots from "../components/Plots/Plots";
import Inventory from "../components/Inventory/Inventory";
import Fertilizer from "../components/Fertilizer/Fertilizer";
import ArchiveQuestionnaireDialog from "../components/Dialog/ArchiveQuestionnaireDialog";
import SoilTest from "../components/SoilTest/SoilTest";
import WaterTest from "../components/WaterTest/WaterTest";
import LeafTest from "../components/LeafTest/LeafTest";
import Loading from "../components/Loading/Loading";

const MealPlanDetailPage = () => {
  //   get params
  const { Qcode } = useParams();

  // declare dispatch
  const dispatch = useDispatch();

  // questionnaire selector
  const questionnaireSelector = useSelector((state) => state.questionnaire);
  const { mealDetail, questionnaire, questionForm } = questionnaireSelector;
  const questions = questionnaire?.data;


  //   modal selector
  const modalSelector = useSelector((state) => state.modal);
  const { isOpenArchiveQuestionModal } = modalSelector;

  // handle open reject modal
  const handleClick = () => {};

  useEffect(() => {
    dispatch(mealPlanDetail(Qcode));
  }, [dispatch]);

  useEffect(() => {
    dispatch(detailQuestionnaire(Qcode));
  }, [dispatch]);

  if (!mealDetail) {
    return <Loading />;
  }
  return (
    <div>
      <Typography size="20px">جزییات پرسشنامه</Typography>
      {/* <button onClick={() => handleClick(mealDetail?.Qcode)}>reject</button>
      {isOpenArchiveQuestionModal && <RejectMealPlanDialog />} */}

      <Content>
        <Wrapper>
          <Typography>نام : {questionnaire?.fullName}</Typography>
          <Typography>نوع کشت : {questionnaire?.product}</Typography>

          {/* <Typography color="#333">
            نام کارشناس : {detailVisit?.expertName}
          </Typography> */}
        </Wrapper>
        <Wrapper>
          <Typography>آدرس : {questionnaire?.city}</Typography>
          <Typography>مساحت : {questionnaire?.area}</Typography>
        </Wrapper>
        <Wrapper>
          <Typography>تاریخ : {questionnaire?.date}</Typography>
          <Typography>کد کشاورزی : {questionnaire?.farmerCode}</Typography>
        </Wrapper>
      </Content>
      {questions?.farmOrchardImages.length > 0 && (
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
      {questions?.fertilizers.length > 0 && (
        <Fertilizer fertilizers={questions?.fertilizers} />
      )}
      {/* <BasicQuestions baseQuestions={checklistPlot?.basicQuestions} />
      <Plots checklistPlot={checklistPlot?.plots} />
      {isOpenArchive && <ArchiveVisitDialog />} */}
      {/* <QuestionnaireEdit /> */}
      {isOpenArchiveQuestionModal && (
        <ArchiveQuestionnaireDialog Qcode={questionnaire.Qcode} />
      )}
      {/* {isOpenMealPlanModal && (
        <MealPlanUploadDialog
          Qcode={questionnaire?.Qcode}
          pid={questionnaire?.pid}
          farmerCode={questionnaire?.farmerCode}
        />
      )} */}
      <WrapperTest>
        {questions?.soilTest && <SoilTest soilTest={questions?.soilTest} />}
        {questions?.waterTest && <WaterTest waterTest={questions?.waterTest} />}
        {questions?.leafTest && <LeafTest leafTest={questions?.leafTest} />}
      </WrapperTest>
    </div>
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

export default MealPlanDetailPage;
