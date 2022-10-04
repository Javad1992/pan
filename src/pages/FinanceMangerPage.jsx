import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVisitRequest } from "../redux/action/visit";

// components
import ListFinaceManager from "../components/List/ListFinanceManger";
import Typography from "../components/Typography/Typography";

// style componets
import { Container } from "../globalStyle";

const FinanceMangerPage = () => {
  //   declare dispatch
  const dispatch = useDispatch();
  // get all visit requset
  const allVisitRequest = useSelector((state) => state.visit);
  const { visits } = allVisitRequest;

  useEffect(() => {
    dispatch(fetchAllVisitRequest());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="18px" weight="bold">
        مدیریت امور مالی
      </Typography>
      <ListFinaceManager items={visits} />
    </Container>
  );
};
export default FinanceMangerPage;
