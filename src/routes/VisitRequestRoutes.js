import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";
// components
import VisitRequestPage from "../pages/VisitRequestPage";
import SingleVisitRequestPage from "../pages/SingleVisitRequestPage";

export const VisitRequestRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="visit" element={<VisitRequestPage />} />
        {/* <Route path="visit" element={<h1>Hello</h1>} /> */}
        <Route path="visit/:parentId" element={<SingleVisitRequestPage />} />
      </Routes>
    </Fragment>
  );
};
