import React, { Fragment } from "react";
// react router dom
import { Navigate, Route, Routes } from "react-router-dom";

// components
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

// react toastify notification
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./globalStyle";

const App = () => {
  return (
    <Fragment>
      <ToastContainer />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Fragment>
  );
};
export default App;
