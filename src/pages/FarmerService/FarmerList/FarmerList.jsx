import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import TableList from "../../../core/Table";
import { Container, HeaderTitle } from "../../../globalStyle";
import { farmerData } from "../_mock/farmerListData";

const FarmerList = () => {
  const headerTitle = [
    "#",
    "نام کشاورز",
    "کد کشاورز",
    "شماره تماس",
    "مشاهده اصلاعات",
  ];

  const items = farmerData.map((farmer, index) => (
    <Tr key={farmer.id}>
      <Td>{index + 1}</Td>
      <Td>{`${farmer?.firstName} ${farmer?.lastName}`}</Td>
      <Td>{farmer.farmerCode}</Td>
      <Td>{farmer.phoneNumner}</Td>
      <Td>
        <Link to={`/dashboard/app/farmerList/${farmer.farmerCode}`}>
          <Button small>مشاهده اطلاعات</Button>
        </Link>
      </Td>
    </Tr>
  ));

  return (
    <Container>
      <HeaderTitle>لیست کشاورزان</HeaderTitle>
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
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export default FarmerList;
