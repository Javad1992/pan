import React, { useEffect } from "react";
// reqact redux module
import { useDispatch, useSelector } from "react-redux";
// actions
import { fetchAllVisitRequest } from "../redux/action/visit";
// global styled components
import { Container, HeaderTitle } from "../globalStyle";
// components
import ListDataCollector from "../components/List/ListDataCollector";

const ChecklistRequestPage = () => {
  const allVisitRequest = useSelector((state) => state.visit);
  const { visits } = allVisitRequest;

  // declare dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllVisitRequest());
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>بازدیدهای انجام شده</HeaderTitle>
      <ListDataCollector items={visits} />
    </Container>
  );
};

export default ChecklistRequestPage;
