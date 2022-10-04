import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// components
import DashboardApp from "./DashboardApp";

const Dashboard = () => {
  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/app/*" element={<DashboardApp />} />
        {/* <Route path="/visit" element={<VisitRequestPage />} /> */}
      </Routes>
    </Fragment>
  );
};
export default Dashboard;
