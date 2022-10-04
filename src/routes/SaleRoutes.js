import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";

// components
import EditQuestionnaireDetailPage from "../pages/EditQuestionnaireDetailPage";
import EditQuestionnairePage from "../pages/EditQuestionnairePage";

export const SaleRoute = () => {
  return (
    <Fragment>
      <Routes>
      <Route path="questionnaireList" element={<EditQuestionnairePage />} />
        <Route path="questionnaireList/:Qcode" element={<EditQuestionnaireDetailPage />} />
      </Routes>
    </Fragment>
  );
};
