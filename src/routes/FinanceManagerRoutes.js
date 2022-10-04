import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import FinanceMangerPage from "../pages/FinanceMangerPage";

export const FinanceManagerRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="visit" element={<FinanceMangerPage />} />
        {/* <Route path="visit/:visitId" element={<SingleVisitRequestPage />} /> */}
      </Routes>
    </Fragment>
  );
};
