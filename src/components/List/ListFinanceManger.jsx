import React from "react";

// react redux module
import { useDispatch, useSelector } from "react-redux";

// actions for redux
import { confirmVisitRequest, rejectRequest } from "../../redux/action/visit";

//components
import Button from "../Button/Button";

// styled module
import styled from "styled-components";

const ListFinaceManager = ({ items }) => {
  const searchSelector = useSelector((state) => state.searchTerm);

  const { searchTerm } = searchSelector;

  // declare dispatch
  const dispatch = useDispatch();
  return (
    <ListStyle>
      <Table>
        <thead>
          <Tr>
            <Th>نام و نام خانوادگی</Th>
            <Th>نوع کشت</Th>
            <Th>کد بازدید</Th>
            <Th>تاریخ درخواست</Th>
            <Th>تایید</Th>
            <Th>ارجاع به بخش قبل</Th>
          </Tr>
        </thead>
        <tbody>
          {items?.filter((items) => {
            if (searchTerm === "") {
              return items;
            } else if (items?.fullName?.includes(searchTerm)) {
              return items;
            }
          })?.length > 0 ? (
            items.map((item) => (
              <Tr key={item._id}>
                <Td>{item.fullName}</Td>
                <Td>{item.product}</Td>
                <Td>{item.visitCode}</Td>
                <Td>{item.requestDate}</Td>
                <Td>
                  <Button
                    color="green"
                    onClick={() =>
                      dispatch(confirmVisitRequest(item.visitCode))
                    }
                  >
                    تایید
                  </Button>
                </Td>
                <Td>
                  <Button
                    color="red"
                    onClick={() => dispatch(rejectRequest(item.visitCode))}
                  >
                    ارجاع
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
  border-bottom: 1px solid #${({ theme }) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export default ListFinaceManager;
