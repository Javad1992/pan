import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVisitRequest } from "../redux/action/visit";

// components
import GISList from "../components/List/GisList";
import UploadGISDialog from "../components/Dialog/UploadGISDialog";
import Typography from "../components/Typography/Typography";

// styled components
import { Container } from "../globalStyle";

const GISPage = () => {
  const headerTitle = [
    "نام و نام خانوادگی",
    "نوع کشت",
    "کد بازدید",
    "کد کشاورزی",
    "جزییات",
    "آپلود پیش تحلیل",
  ];

  const allVisitRequest = useSelector((state) => state.visit);
  const { visits } = allVisitRequest;

  // declare dispatch
  const dispatch = useDispatch();

  // get status of modal
  const statusModal = useSelector((state) => state.modal);
  const { isOpenGisModal } = statusModal;

  useEffect(() => {
    dispatch(fetchAllVisitRequest());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="18px" weight="bold">
        بازدیدهای انجام شده
      </Typography>
      <GISList items={visits} headerTitle={headerTitle} />
      {isOpenGisModal && <UploadGISDialog />}
    </Container>
  );
};
export default GISPage;
