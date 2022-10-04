import { Fragment } from "react";

// react router dom
import { Routes, Route } from "react-router-dom";

// components
import ManagementPage from "../pages/ContentSupport/ManagementPage";
import ManageWeblogText from "../pages/ContentSupport/ManageWeblog/ManageWeblogText";
import ManageWeblogVideo from "../pages/ContentSupport/ManageWeblog/ManageWeblogVideo";
import SingleWeblogText from "../pages/ContentSupport/ManageWeblog/SingleWeblogText";
import SingleWeblogVideo from "../pages/ContentSupport/ManageWeblog/SingleWeblogVideo";
import SingleManageContent from "../pages/ContentSupport/SingleManageContent";

export const ContentSupportRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/manage-page" element={<ManagementPage />} />
        <Route path="/manage-page/:sid" element={<SingleManageContent />} />
        <Route path="/content-video" element={<ManageWeblogVideo />} />
        <Route path="/content-video/:id" element={<SingleWeblogVideo />} />
        <Route path="/content-text" element={<ManageWeblogText />} />
        <Route path="/content-text/:id" element={<SingleWeblogText />} />
      </Routes>
    </Fragment>
  );
};
