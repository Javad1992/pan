import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { AllArchiveChecklist } from "../redux/action/checklist";
// components
import ListArchive from "../components/List/ListArchive";
import Typography from "../components/Typography/Typography";
// styled components
import { Container } from "../globalStyle";

const ArchivePage = () => {
  // declare dispatch
  const dispatch = useDispatch();

  // checklist selector
  const checklistSelector = useSelector((state) => state.checklist);
  const { archives } = checklistSelector;

  useEffect(() => {
    dispatch(AllArchiveChecklist());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="18px" weight="bold">
        {" "}
        بازدیدهای بایگانی شده
      </Typography>
      <ListArchive items={archives} />
      {/* <List items={visits} /> */}
    </Container>
  );
};
export default ArchivePage;
