import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { allVisitReport } from "../redux/action/visit";

// components
import EducationManagerList from "../components/List/EducationMangerList";
import Typography from "../components/Typography/Typography";

// styled components
import { Container } from "../globalStyle";

const EducationManagerPage = () => {
  const headerTitle = ["کد کشاورزی", "کد بازدید", "فایل پیش تحلیل"];

  const dispatch = useDispatch();

  // gis selector
  const gisSelector = useSelector((state) => state.gis);
  const { giss } = gisSelector;

  useEffect(() => {
    dispatch(allVisitReport());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="14px" weight="bold">
        لیست فایل های ریپورت
      </Typography>
      <EducationManagerList
        items={giss}
        gisFiles="true"
        headerTitle={headerTitle}
      />
    </Container>
  );
};
export default EducationManagerPage;
