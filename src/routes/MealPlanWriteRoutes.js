import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";
// components
import QuestionnaireDetailPage from "../pages/QuestionnaireDetailPage";
import QuestionnairePage from "../pages/QuestionnairePage";
import RejectMealPlanPage from "../pages/RejectMealPlanPage";

export const MealPlanWriteRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="questionnaireList" element={<QuestionnairePage />} />
        <Route
          path="questionnaireList/:Qcode"
          element={<QuestionnaireDetailPage />}
        />
        <Route path="rejectQuestionnaireList" element={<RejectMealPlanPage />} />
      </Routes>
    </Fragment>
  );
};
