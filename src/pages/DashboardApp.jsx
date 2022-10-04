import React from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";
// main layout components
import Layout from "../layout/Layout";
// components
import HomePage from "./HomePage";
// get user information
import { userData } from "../help/userData";
// get routes
import { MainRoutes } from "../routes/routes";
// pages
import ProfilePage from "./ProfilePage";

const DashboardApp = () => {
  // get information user
  const userInformation = userData()?.data;
  const { role } = userInformation?.result?.employee;

  return (
    <Layout>
      <MainRoutes roleUser={role} />
      <Routes>
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
};
export default DashboardApp;
