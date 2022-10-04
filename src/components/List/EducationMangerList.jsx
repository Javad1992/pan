import React from "react";

// react redux
import { useDispatch } from "react-redux";
import { openGisModal } from "../../redux/action/modal";

// styled components
import styled from "styled-components";
import Button from "../Button/Button";

const EducationManagerList = ({ headerTitle, items }) => {
  // declare dispatch
  const dispatch = useDispatch();

  return (
    <ListStyle>
      <Table>
        <thead>
          <Tr>
            {headerTitle.map((item, index) => (
              <Th key={index}>{item}</Th>
            ))}
            {/* <Th>نام و نام خانوادگی</Th>
            <Th>نوع کشت</Th>
            <Th>کد بازدید</Th>
            <Th>کد کشاورزی</Th>
            <Th>آپلود پیش تحلیل</Th> */}
          </Tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Tr key={item._id}>
              <Td>{item.fullName}</Td>
              <Td>{item.product}</Td>
              <Td>{item.visitCode}</Td>
              <Td>{item.farmerCode}</Td>
              <Td>
                <Button
                  small
                  onClick={() => dispatch(openGisModal(item?.visitCode))}
                >
                  آپلود فایل ریپورت
                </Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  max-height: 100vh;
  width: 100%;
  overflow: auto;
  text-align: center;
  margin-top: 1rem;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  color: ${({ theme }) => theme.text};
  font-size: 15px;
  padding: 10px 20px;
  font-size: 14px;
`;
const Td = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: #404040;
  &:nth-child(even) {
    background-color: #edeef1;
  }
`;
const Tr = styled.tr`
  background-color: #dddddd;
  &:nth-child(odd) {
    background-color: #dddddd;
  }
`;

export default EducationManagerList;
