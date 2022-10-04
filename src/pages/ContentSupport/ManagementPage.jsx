import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import TableList from "../../core/Table";
import { Container, HeaderTitle } from "../../globalStyle";
import { allCarriers, getContents } from "../../redux/action/content";
import { formatData } from "../../utils/date";

const ManagementPage = () => {
  const headerTitle = ["#", "کد کارشناس", "عنوان", "تاریخ بارگذاری", "جزییات"];

  // declare dispatch
  const dispatch = useDispatch();

  const contentSelector = useSelector((state) => state.content);

  const { carriers } = contentSelector;

  useEffect(() => {
    dispatch(allCarriers());
  }, [dispatch]);

  const items = carriers ? (
    carriers?.map((content, index) => (
      <Tr key={index}>
        <Td>{index + 1}</Td>
        <Td>{content?.expertCode}</Td>
        <Td>{content?.title}</Td>
        <Td>{formatData(content?.insertedDate?.toString() || "")}</Td>
        <Td>
          <Link to={`/dashboard/app/manage-page/${content.sid}`}>
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
      <HeaderTitle>مدیریت صفحات</HeaderTitle>
      <TableList headerTitle={headerTitle} items={items} />
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

export default ManagementPage;
