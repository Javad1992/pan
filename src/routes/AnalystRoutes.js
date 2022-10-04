import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";

// components
import AnalystPage from "../pages/AnalystPage";

export const AnalystRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="gis" element={<AnalystPage />} />
        {/* <Route path="gis" element={<GISFilesPage />} />
        <Route path="checklist/:visitId" element={<DetailGISPage />} /> */}
      </Routes>
    </Fragment>
  );
};
