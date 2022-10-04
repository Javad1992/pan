import React from "react";
import { useDispatch } from "react-redux";
import { addToArchive } from "../../redux/action/checklist";

// styled components module
import Button from "../Button/Button";
// styled components
import styled from "styled-components";

const ListArchive = ({ items }) => {
  // declare dispatch
  const dispatch = useDispatch();
  const handleExitArchive = (visitCode) => {
    const data = {
      status: false,
      visitCode,
    };
    console.log("Hello", data);
    dispatch(addToArchive(data));
  };

  return (
    <ListStyle>
      <Table>
        <thead>
          <Tr>
            <Th>نام و نام خانوادگی</Th>
            {/* <Th>نوع کشت</Th> */}
            <Th>کد بازدید</Th>
            {/* <Th>تاریخ درخواست</Th> */}
            <Th>توضیحات</Th>
            <Th>خروج از بایگانی</Th>
          </Tr>
        </thead>
        <tbody>
          {items ? (
            items.map((item) => (
              <Tr key={item._id}>
                <Td>{item.fullName}</Td>
                {/* <Td>{item.product}</Td> */}
                <Td>{item.visitCode}</Td>
                <Td>{item.archiveDescription}</Td>
                <Td>
                  <Button
                    small
                    onClick={() => handleExitArchive(item?.visitCode)}
                  >
                    خروج از بایگانی
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Td>درخواست بازدیدی وجود ندارد</Td>
          )}
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
  border-radius: 5px;
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

export default ListArchive;
