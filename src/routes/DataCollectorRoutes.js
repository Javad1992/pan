import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";
// components
import ChecklistRequestPage from "../pages/ChecklistRequestPage";
import DetailChecklistRequestPage from "../pages/DetailChecklistRequestPage";
import ArchivePage from "../pages/ArchivePage";

export const DataCollectorRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="checklist" element={<ChecklistRequestPage />} />
        <Route
          path="checklist/:visitId"
          element={<DetailChecklistRequestPage />}
        />
        <Route path="archive" element={<ArchivePage />} />
      </Routes>
    </Fragment>
  );
};
