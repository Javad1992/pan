import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import TableList from "../../core/Table";
import { BsHourglassSplit, BsHourglassTop } from "react-icons/bs";
import {
  allRejectExport,
  confirmExpert,
  updatedExpert,
} from "../../redux/action/expertService";
import Loading from "../../components/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, HeaderTitle } from "../../globalStyle";
import { formatData } from "../../utils/date";
import PopupGfg from "../../components/Popup/Popup";

const ListRejectRequestFarmer = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const headerTitle = [
    "#",
    "نام کارشناس",
    "آدرس",
    "تاریخ درخواست",
    "توضیحات",
    "وضعیت",
    "جزییات",
  ];
  // declare dispatch
  const dispatch = useDispatch();

  const expertSelector = useSelector((state) => state.expertService);

  const { expertsReject } = expertSelector;

  const countPage = expertsReject?.count;
  const count = Math.ceil(countPage / 10);

  const handleDisActive = (phoneNumber) => {
    dispatch(updatedExpert(phoneNumber, { waiting: false }));
  };

  const handleActive = (phoneNumber) => {
    dispatch(updatedExpert(phoneNumber, { waiting: true }));
  };

  useEffect(() => {
    dispatch(allRejectExport(page, searchTerm));
  }, [dispatch, page, searchTerm]);

  const items = expertsReject ? (
    expertsReject?.expert?.map((item, index) => (
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
              size={20}
              onClick={() => handleActive(item?.phoneNumber)}
            />
          )}
        </Td>

        <Td>
          <Link to={`/dashboard/app/list-request-farmer/${item?.phoneNumber}`}>
            <Button small weight="bold">
              جزییات
            </Button>
          </Link>
        </Td>
      </Tr>
    ))
  ) : (
    <Loading />
  );

  return (
    <Container>
      <HeaderTitle>برگشت خورده ها</HeaderTitle>

      <TableList
        items={items}
        headerTitle={headerTitle}
        setPage={setPage}
        page={page}
        countPage={count}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </Container>
  );
};

const Td = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export default ListRejectRequestFarmer;
