import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "../pages/SysAdmin/Employee/AddEmployee/AddEmployee";
import EmployeeList from "../pages/SysAdmin/Employee/EmployeeList/EmployeeList";

export const SysAdminRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="employees" element={<EmployeeList />} />
        <Route path="addEmployees" element={<AddEmployee />} />
      </Routes>
    </Fragment>
  );
};

export default SysAdminRoutes;
