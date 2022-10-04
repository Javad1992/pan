import React, { Fragment } from "react";

// react router dom module
import { Route, Routes } from "react-router-dom";
import EditQuestionnaireDetailPage from "../pages/EditQuestionnaireDetailPage";
import EditQuestionnairePage from "../pages/EditQuestionnairePage";
import ExpertEducationManagementDetail from "../pages/EducationManager/Expert/ExpertEducationManagementDetails";
import ExpertEducationManager from "../pages/EducationManager/Expert/ExpertEducationManager";

// components
import EducationManagerPage from "../pages/EducationManagerPage";
import DetailRequestExpert from "../pages/ExpertService/DetailRequestExpert";
import ListRequestFarmer from "../pages/ExpertService/ListRequestFarmer";
import FarmerDetail from "../pages/FarmerService/FarmerDetail/FarmerDetail";
import FarmerList from "../pages/FarmerService/FarmerList/FarmerList";
import FarmerAllListItem from "../pages/FarmerService/ListItems/ListItems";
import MealPlanDetailPage from "../pages/MealPlanDetailPage";

export const EducationManagerRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="gis" element={<EducationManagerPage />} />
        <Route
          path="editquestionnaireList"
          element={<EditQuestionnairePage />}
        />
        <Route
          path="editquestionnaireList/:Qcode"
          element={<EditQuestionnaireDetailPage />}
        />
        <Route
          path="questionnaireList/:Qcode"
          element={<MealPlanDetailPage />}
        />
        <Route path="list-request-farmer" element={<ListRequestFarmer />} />
        <Route
          path="list-request-farmer/:phoneNumber"
          element={<DetailRequestExpert />}
        />
        <Route path="/experts" element={<ExpertEducationManager />} />
        <Route
          path="/experts/:uid"
          element={<ExpertEducationManagementDetail />}
        />
        <Route path="/farmerList" element={<FarmerList />} />
        <Route path="/farmerList/:farmerCode" element={<FarmerDetail />} />
        <Route path="/farmerallList" element={<FarmerAllListItem />} />
      </Routes>
    </Fragment>
  );
};
