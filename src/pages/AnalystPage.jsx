import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import AnalystList from "../components/List/AnalystList";
import UploadReportModal from "../components/Dialog/UploadReportModal";
import Typography from "../components/Typography/Typography";

// styled components
import { Container } from "../globalStyle";
import { allGisFiles } from "../redux/action/gis";

const AnalystPage = () => {
  const headerTitle = ["کد کشاورزی", "کد بازدید", "فایل پیش تحلیل"];

  //   declare dispatch
  const dispatch = useDispatch();

  // gis selector
  const gisSelector = useSelector((state) => state.gis);
  const { giss } = gisSelector;

  // get status of modal
  const statusModal = useSelector((state) => state.modal);
  const { isOpenReportModal } = statusModal;

  useEffect(() => {
    dispatch(allGisFiles());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="18px" weight="bold">
        لیست فایل های GIS
      </Typography>
      <AnalystList items={giss} gisFiles="true" headerTitle={headerTitle} />
      {isOpenReportModal && <UploadReportModal />}
    </Container>
  );
};
export default AnalystPage;
