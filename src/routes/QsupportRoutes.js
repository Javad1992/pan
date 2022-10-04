import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";

// components
import QuestionnairePage from "../pages/QuestionnairePage";
import QuestionnaireDetailPage from "../pages/QuestionnaireDetailPage";
import QuestionnaireArchive from "../pages/QuestionnaireArchive";

export const Qsupport = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="questionnaireList" element={<QuestionnairePage />} />
        <Route
          path="questionnaireList/:Qcode"
          element={<QuestionnaireDetailPage />}
        />
        <Route path="archive" element={<QuestionnaireArchive />} />
      </Routes>
    </Fragment>
  );
};
