import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Loading from "../../components/Loading/Loading";
import TableList from "../../core/Table";
import {
  allExpert,
  searchedExpert,
  updatedExpert,
  updateEducationStatus,
} from "../../redux/action/expertService";
import { BsHourglassSplit, BsHourglassTop } from "react-icons/bs";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, HeaderTitle } from "../../globalStyle";
import { formatData } from "../../utils/date";
import { userData } from "../../help/userData";

const ListRequestFarmer = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const userInformation = userData();
  const role = userInformation?.data?.result?.employee?.role;

  console.log("role", role);

  const headerTitle = [
    "#",
    "نام کارشناس",
    "آدرس",
    "تاریخ درخواست",
    "انتظار",
    "جزییات",
  ];
  // declare dispatch
  const dispatch = useDispatch();

  // expert selector
  const expertSelector = useSelector((state) => state.expertService);
  const { experts } = expertSelector;

  const countPage = experts?.count;
  const count = Math.ceil(countPage / 10);

  const handleDisActive = (phoneNumber) => {
    if (role === "educationManager") {
      dispatch(updateEducationStatus(phoneNumber, { waiting: false }));
    } else {
      dispatch(updatedExpert(phoneNumber, { waiting: false }));
    }
  };

  const handleActive = (phoneNumber) => {
    if (role === "educationManager") {
      dispatch(updateEducationStatus(phoneNumber, { waiting: true }));
    } else {
      dispatch(updatedExpert(phoneNumber, { waiting: true }));
    }
  };

  useEffect(() => {
    dispatch(allExpert(page, searchTerm));
  }, [dispatch, page, searchTerm]);

  const items = experts ? (
    experts?.expert?.map((item, index) => (
      <Tr key={index}>
        <Td>{index + 1}</Td>
        <Td>{item?.fullName}</Td>
        <Td>{`${item?.province} ${item?.city}`}</Td>
        <Td>{formatData(item?.insertedDate?.toString() || "")}</Td>
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
          <Link to={`${item?.phoneNumber}`}>
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
      <HeaderTitle>ثبت نام کارشناسان</HeaderTitle>
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

export default ListRequestFarmer;
