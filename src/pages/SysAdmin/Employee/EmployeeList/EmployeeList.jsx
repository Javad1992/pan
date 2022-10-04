import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableList from "../../../../core/Table";
import { Container, HeaderTitle } from "../../../../globalStyle";
import { allEmployee } from "../../../../redux/action/sysAdmin";

const EmployeeList = () => {
  const headerTitle = ["نام", "شماره تلفن", "نقش", "واحد", "بخش", "ویرایش"];

  const dispatch = useDispatch();

  const sysAdminSelector = useSelector((state) => state.sysAdmin);

  console.log(sysAdminSelector);

  useEffect(() => {
    dispatch(allEmployee());
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>لیست کارمندان</HeaderTitle>
      <TableList headerTitle={headerTitle} />
    </Container>
  );
};
export default EmployeeList;
