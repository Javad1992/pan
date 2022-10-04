import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";
// components
import DetailGISPage from "../pages/DetailGipPage";
import GISFilesPage from "../pages/GISFilesPage";
import GISPage from "../pages/GISPage";

export const GISRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="checklist" element={<GISPage />} />
        <Route path="gis" element={<GISFilesPage />} />
        <Route path="checklist/:visitId" element={<DetailGISPage />} />
      </Routes>
    </Fragment>
  );
};
