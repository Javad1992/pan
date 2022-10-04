import { useEffect } from "react";

// react redux
import { useSelector, useDispatch } from "react-redux";
// import { allExpert } from "../../../redux/action/expertService";

// react router dom
import { Link } from "react-router-dom";

// components
import Button from "../../../components/Button/Button";
import InputField from "../../../components/InputField/InputField";
import Loading from "../../../components/Loading/Loading";
import TableList from "../../../core/Table";

// utils
// import { formatData } from "../../../utils/date";

// styled components
import styled from "styled-components";
import { Container, HeaderTitle } from "../../../globalStyle";
import { Wrapper, WrapperTable } from "../expertStyle";
import { allExpertEducation } from "../../../redux/action/education";
import { useState } from "react";

const ExpertEducationManager = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const headerTitle = [
    "#",
    "نام کارشناس",
    "کد کارشناس",
    "شماره تلفن",
    "مشاهده جزییات",
    "حذف",
  ];

  const dispatch = useDispatch();

  const expertSelector = useSelector((state) => state.education);
  const { experts } = expertSelector;
  const countPage = Math.ceil(experts?.count / 50);

  const items = experts ? (
    experts?.expert?.map((item, index) => (
      <Tr key={index}>
        <Td>{index + 1}</Td>
        <Td>{item?.fullName}</Td>
        <Td>{item?.expertCode}</Td>
        <Td>{item?.phoneNumber}</Td>
        <Td>
          <Link to={`/dashboard/app/experts/${item?.uid}`}>
            <Button small weight="bold">
              جزییات
            </Button>
          </Link>
        </Td>
        <Td>
          <Button small weight="bold" color="#F81C0B">
            حذف
          </Button>
        </Td>
      </Tr>
    ))
  ) : (
    <Loading />
  );

  useEffect(() => {
    dispatch(allExpertEducation(page, searchTerm));
  }, [dispatch, page, searchTerm]);

  return (
    <Container>
      <HeaderTitle>لیست کارشناسان</HeaderTitle>
      <WrapperTable>
        <Wrapper>
          <InputField
            type="text"
            placeholder="جستجو کنید..."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Wrapper>
        <TableList
          headerTitle={headerTitle}
          noPaginate
          items={items}
          page={page}
          setPage={setPage}
          countPage={countPage}
        />
      </WrapperTable>
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

export default ExpertEducationManager;
