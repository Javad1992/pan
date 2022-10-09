import React from "react";
// react redux
import { useDispatch } from "react-redux";
// react router dom
import { Link } from "react-router-dom";
// components
import Button from "../Button/Button";
// styled components
import styled from "styled-components";
import { confirmVisitRequest } from "../../redux/action/visit";

const List = ({ items }) => {
  // declare dispatch
  const dispatch = useDispatch();

  const handleConfirm = (visitCode) => {
    dispatch(confirmVisitRequest(visitCode));
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
            {/* <Th>تایید</Th> */}
            <Th>جزییات</Th>
          </Tr>
        </thead>
        <tbody>
          {items ? (
            items.map((item) => (
              <Tr key={item._id}>
                <Td>{item.fullName}</Td>
                {/* <Td>{item.product}</Td> */}
                {/* #task 1 */}
                <Td>{item.visitCode}</Td>
                {/* <Td>{item.requestDate}</Td> */}

                {/* <Td>
                  <Button
                    small
                    color="#00A300"
                    onClick={() => handleConfirm(item?.visitCode)}
                  >
                    تایید
                  </Button>
                </Td> */}
                <Td>
                  <Link to={`/dashboard/app/visit/${item.parentId}`}>
                    <Button small>جزییات</Button>
                  </Link>
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
  color: ${({ theme }) => theme.text};
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

export default List;
