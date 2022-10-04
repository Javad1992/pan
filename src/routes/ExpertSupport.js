import React, { Fragment } from "react";
// react router dom module
import { Route, Routes } from "react-router-dom";
import DetailRequestExpert from "../pages/ExpertService/DetailRequestExpert";
import ListArchiveRequestFarmer from "../pages/ExpertService/ListArchievReqestFarmer";
import ListRejectRequestFarmer from "../pages/ExpertService/ListRejectRequestFarmer";
import ListRequestFarmer from "../pages/ExpertService/ListRequestFarmer";

export const ExpertSupport = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="list-request-farmer" element={<ListRequestFarmer />} />
        <Route
          path="list-request-farmer/:phoneNumber"
          element={<DetailRequestExpert />}
        />
        <Route
          path="reject-request-farmer"
          element={<ListRejectRequestFarmer />}
        />
        <Route
          path="archive-request-farmer"
          element={<ListArchiveRequestFarmer />}
        />
      </Routes>
    </Fragment>
  );
};
