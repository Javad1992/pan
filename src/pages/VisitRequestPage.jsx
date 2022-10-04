import React, { useEffect } from "react";
// use dispatch from react redux
import { useDispatch, useSelector } from "react-redux";
// components
import List from "../components/List/List";
// styled components module
import { Container, HeaderTitle } from "../globalStyle";
// actions for visit request
import { fetchAllVisitRequest } from "../redux/action/visit";

const VisitRequestPage = () => {
  //   declare dispatch
  const dispatch = useDispatch();
  // get all visit requset
  const allVisitRequest = useSelector((state) => state.visit);
  const { visits } = allVisitRequest;
  console.log(visits);

  useEffect(() => {
    dispatch(fetchAllVisitRequest());
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>مدیریت درخواست بازدید</HeaderTitle>
      <List items={visits} />
    </Container>
  );
};

export default VisitRequestPage;
