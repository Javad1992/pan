import React, {useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailQuestionnaire, updateQuestions} from "../redux/action/questionnaire";
import {Container, HeaderTitle, Row} from "../globalStyle";
import {openArchiveQuestionModal, openMealPlanModal,} from "../redux/action/modal";
import Typography from "../components/Typography/Typography";
import ListImage from "../components/ListImg/ListImage";
import BasicQuestions from "../components/BasicQuestions/BasicQuestions";
import Fertilizer from "../components/Fertilizer/Fertilizer";
import Inventory from "../components/Inventory/Inventory";
import Button from "../components/Button/Button";
import Plots from "../components/Plots/Plots";
import ArchiveQuestionnaireDialog from "../components/Dialog/ArchiveQuestionnaireDialog";
import {userData} from "../help/userData";
import styled from "styled-components";
import MealPlanUploadDialog from "../components/Dialog/MealPlanUploadDialog";
import LeafTest from "../components/LeafTest/LeafTest";
import SoilTest from "../components/SoilTest/SoilTest";
import WaterTest from "../components/WaterTest/WaterTest";
import {formatData, separate} from "../utils/date";
import Loading from "../components/Loading/Loading";

const QuestionnaireDetailPage = () => {
    // user information
    const {role} = userData()?.data?.result?.employee;

    const location = useLocation();
    const {reject} = location.search;

    const navigate = useNavigate();

    // declare dispatch
    const dispatch = useDispatch();
    //   use params
    const {Qcode} = useParams();

    // questionnaire selector
    const questionnaireSelector = useSelector((state) => state.questionnaire);
    const {questionnaire, questionForm, isLoadingQuestionnaire} =
        questionnaireSelector;
    const questions = questionnaire?.data;
    //   open modal
    const modalSelector = useSelector((state) => state.modal);
    const {isOpenArchiveQuestionModal, isOpenMealPlanModal} = modalSelector;

    const handleConfirm = () => {

        const result = {
            data: {
                ...questions,
                leafTest: questionForm?.leafTest,
                soilTest: questionForm?.soilTest,
                waterTest: questionForm?.waterTest,
            },
        };

        dispatch(updateQuestions(result, Qcode, navigate));
    };

    useEffect(() => {
        dispatch(detailQuestionnaire(Qcode));
    }, [dispatch]);

    if (!questionnaire) {
        return <Loading/>;
    }

    return (
        <Container>
            <Row>
                <HeaderTitle>???????????? ????????????????</HeaderTitle>
                {role === "mealPlanWriter" ? (
                    <Button small onClick={() => dispatch(openMealPlanModal())}>
                        ?????????? ???????????? ??????????
                    </Button>
                ) : (
                    <div>
                        <Button
                            color="#DC3545"
                            small
                            onClick={() => dispatch(openArchiveQuestionModal("archive"))}
                            weight="bold"
                        >
                            ??????????????
                        </Button>
                        <Button
                            space
                            small
                            onClick={() => dispatch(openArchiveQuestionModal("comment"))}
                            weight="bold"
                        >
                            ?????????? ???????? ??????????
                        </Button>
                    </div>
                )}
            </Row>
            {/* {questionnaire?.supportComment && (
        <Content>
          <Typography>
            <span style={{ fontWeight: "bold" }}>?????????????? : </span>
            {questionnaire?.supportComment}
          </Typography>
        </Content>
      )} */}

            {(questionnaire.record?.comment && questionnaire.record?.comment.length !== 0) && (
                // {(questionnaire.record?.comment && questionnaire.record?.comment.length !== 0) && !reject && (
                <Content>
                    <Col>
                        <span style={{width: "100%", textAlign: "center"}}>?????????????? ???????????? ????????????????</span>
                        {questionnaire.record?.comment?.map((comm, index) => (
                            <Typography key={index}>
                                <span style={{fontWeight: "bold"}}>??????????????: </span>
                                {comm?.content}
                            </Typography>
                        ))}
                    </Col>
                </Content>
            )}

            {(questionnaire.record?.educationReject && questionnaire.record?.educationReject.length !== 0) && (
                <Content>
                    <Col>
                        <span style={{width: "100%", textAlign: "center"}}>?????????????? ???????? ????????</span>
                        {questionnaire.record?.educationReject?.map((comm, index) => (
                            <Typography key={index}>
                                <span style={{fontWeight: "bold"}}>??????????????: </span>
                                {comm?.content}
                            </Typography>
                        ))}
                    </Col>
                </Content>
            )}

            <Content>
                <Wrapper>
                    <Typography size="15px">??????: {questionnaire?.fullName}</Typography>
                    <Typography size="15px">
                        ?????? ??????: {questionnaire?.product}
                    </Typography>
                    <Typography size="15px">
                        ?????????? ????????: {questionnaire?.phoneNumber}
                    </Typography>

                    {/* <Typography color="#333">
            ?????? ?????????????? : {detailVisit?.expertName}
          </Typography> */}
                </Wrapper>
                <Wrapper>
                    <Typography size="15px">???????? : {questionnaire?.city}</Typography>
                    <Typography size="15px">
                        ?????????? : {questionnaire?.area} ??????????
                    </Typography>
                </Wrapper>
                <Wrapper>
                    <Typography size="15px">
                        ?????????? : {formatData(questionnaire?.date?.toString())}
                    </Typography>
                    <Typography size="15px">
                        ???? ?????????????? : {questionnaire?.farmerCode}
                    </Typography>
                </Wrapper>
            </Content>
            {questions?.farmOrchardImages?.length > 0 && (
                <ListImage
                    title="???????????? ?????? ?? ??????????"
                    images={questions?.farmOrchardImages}
                />
            )}

            {questions?.leafTestFiles?.length > 0 && (
                <ListImage title="???????????? ?????? ??????" images={questions?.leafTestFiles}/>
            )}

            {questions?.soilTestFiles?.length > 0 && (
                <ListImage title="???????????? ?????? ??????" images={questions?.soilTestFiles}/>
            )}

            {questions?.waterTestFiles?.length > 0 && (
                <ListImage title="???????????? ?????? ????" images={questions?.waterTestFiles}/>
            )}
            {/* ?????????????? ?????????? */}
            <BasicQuestions
                title="?????????????? ??????????"
                baseQuestions={questions?.farmQuestions}
            />
            {/* ?????????????? ???????? */}
            {/* index + 1 */}
            <Plots checklistPlot={questions?.plots}/>
            {/* ?????????????? ?????????? */}
            <BasicQuestions
                title="?????????????? ??????????"
                baseQuestions={questions?.zoneQuestions}
            />
            {/* ???????????? ?????????? */}
            {questions?.inventory?.length > 0 && (
                <Inventory inventory={questions?.inventory}/>
            )}
            {/* ???????????? ???????????????? */}
            {questions?.fertilizers?.length > 0 && (
                <Fertilizer fertilizers={questions?.fertilizers}/>
            )}
            {/* <BasicQuestions baseQuestions={checklistPlot?.basicQuestions} />
      <Plots checklistPlot={checklistPlot?.plots} />
      {isOpenArchive && <ArchiveVisitDialog />} */}
            {/* <QuestionnaireEdit /> */}
            {isOpenArchiveQuestionModal && (
                <ArchiveQuestionnaireDialog Qcode={questionnaire.Qcode}/>
            )}
            {isOpenMealPlanModal && (
                <MealPlanUploadDialog
                    Qcode={questionnaire?.Qcode}
                    pid={questionnaire?.pid}
                    farmerCode={questionnaire?.farmerCode}
                    area={questionnaire?.area}
                />
            )}
            <WrapperTest>
                {questions?.soilTest && (
                    <SoilTest role={role} soilTest={questions?.soilTest}/>
                )}
                {questions?.waterTest && (
                    <WaterTest role={role} waterTest={questions?.waterTest}/>
                )}
                {questions?.leafTest && (
                    <LeafTest role={role} leafTest={questions?.leafTest}/>
                )}
            </WrapperTest>
            {role === "Qsupport" && (
                <Button color="#6980FF" small onClick={handleConfirm} weight="bold">
                    {isLoadingQuestionnaire ? (
                        <Typography size="10px">Loading...</Typography>
                    ) : (
                        "?????????? ???? ?????? ??????"
                    )}
                </Button>
            )}
        </Container>
    );
};

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: ${({theme}) => theme.shadow};
  border-radius: 10px;
  margin-top: 1rem;
  padding: 2rem;
  background-color: ${({theme}) => theme.backgroundSidebar};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WrapperTest = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export default QuestionnaireDetailPage;
