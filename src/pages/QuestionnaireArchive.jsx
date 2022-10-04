import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { archiveQuestionnaire } from "../redux/action/questionnaire";

// components

import QuestionnaireArchiveList from "../components/List/QuestionnaireArchive";

// styled componetns
import { Container } from "../globalStyle";
import Typography from "../components/Typography/Typography";

const QuestionnaireArchive = () => {
  // declare dispatch
  const dispatch = useDispatch();

  // questionnaire selector
  const questionnaireSelector = useSelector((state) => state?.questionnaire);
  console.log("questionnaireSelector" , questionnaireSelector)
  const { archives } = questionnaireSelector;

  useEffect(() => {
    dispatch(archiveQuestionnaire());
  }, [dispatch]);

  if (!archives) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Container>
      <Typography size="18px" weight="bold">
        لیست پرسشنامه های بایگانی شده
      </Typography>
      <QuestionnaireArchiveList items={archives} />
      {/* <QuestionnaireList items={questionairesList} /> */}
    </Container>
  );
};

export default QuestionnaireArchive;
