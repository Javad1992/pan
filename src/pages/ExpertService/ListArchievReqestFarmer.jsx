import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  allArchiveExpert,
  removeFromArchive,
  updatedExpert,
} from "../../redux/action/expertService";
import { BsHourglassSplit, BsHourglassTop } from "react-icons/bs";
import Loading from "../../components/Loading/Loading";
import Button from "../../components/Button/Button";
import TableList from "../../core/Table";
import ArchiveRequestExpertDialog from "../../components/Dialog/ArchiveRequestExpertDialog";
import { openArchiveQuestionModal } from "../../redux/action/modal";
import { useState } from "react";
import { Container, HeaderTitle } from "../../globalStyle";
import { formatData } from "../../utils/date";
import { useNavigate } from "react-router-dom";

import PopupGfg from "../../components/Popup/Popup";

const ListArchiveRequestFarmer = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const headerTitle = [
    "#",
    "نام کارشناس",
    "آدرس",
    "تاریخ درخواست",
    "توضیحات",
    "وضعیت",
    "خروج از بایگانی",
  ];
  // declare dispatch
  const dispatch = useDispatch();

  const handleOpenModal = (phoneNumber) => {
    dispatch(openArchiveQuestionModal());
    setPhoneNumber(phoneNumber);
  };

  const modalSelector = useSelector((state) => state.modal);
  const { isOpenArchiveQuestionModal } = modalSelector;

  const expertSelector = useSelector((state) => state.expertService);

  const { archiveExpert } = expertSelector;

  const countPage = archiveExpert?.count;
  const count = Math.ceil(countPage / 10);
  console.log(archiveExpert);

  const handleDisActive = (phoneNumber) => {
    dispatch(updatedExpert(phoneNumber, { waiting: false }));
  };

  const handleActive = (phoneNumber) => {
    dispatch(updatedExpert(phoneNumber, { waiting: true }));
  };

  useEffect(() => {
    dispatch(allArchiveExpert(page, searchTerm));
  }, [dispatch, page, searchTerm]);

  const items = archiveExpert ? (
    archiveExpert?.expert?.map((item, index) => (
      <Tr key={index}>
        <Td>{index + 1}</Td>
        <Td>{item?.fullName}</Td>
        <Td>{`${item?.province} ${item?.city}`}</Td>
        <Td>{formatData(item?.insertedDate?.toString() || "")}</Td>
        <Td className="popup">
          <span>
            <PopupGfg desc={item?.archiveDescription} />
          </span>
        </Td>
        <Td>
          {item?.waiting === true ? (
            <BsHourglassSplit
              onClick={() => handleDisActive(item?.phoneNumber)}
              size={20}
              color="#00A300"
            />
          ) : (
            <BsHourglassTop
              onClick={() => handleActive(item?.phoneNumber)}
              size={20}
            />
          )}
        </Td>
        <Td>
          <Button
            small
            weight="bold"
            onClick={() =>
              dispatch(
                removeFromArchive(
                  item?.phoneNumber,
                  { archiveDescription: "" },
                  navigate
                )
              )
            }
          >
            خروج از بایگانی
          </Button>
        </Td>
      </Tr>
    ))
  ) : (
    <Loading />
  );

  return (
    <Container>
      <HeaderTitle>بایگانی ها</HeaderTitle>
      <TableList
        items={items}
        headerTitle={headerTitle}
        page={page}
        setPage={setPage}
        countPage={count}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {isOpenArchiveQuestionModal && (
        <ArchiveRequestExpertDialog
          title="خروج از بایگانی"
          removeArchive={true}
          phoneNumber={phoneNumber}
        />
      )}
    </Container>
  );
};

const Td = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  /* &:nth-child(even) {
        background-color: #edeef1;
      } */
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
  /* &:nth-child(odd) {
        background-color: #dddddd;
      } */
`;

export default ListArchiveRequestFarmer;
