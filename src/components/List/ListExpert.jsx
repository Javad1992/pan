import React from "react";
import { useDispatch } from "react-redux";

// actions redux
import { cenrtainExpert } from "../../redux/action/expert";

// components
import styled from "styled-components";

const ListExpert = ({ parentId, visitCode, item }) => {
  // dispatch from useDispatch
  const dispatch = useDispatch();

  if (!item) {
    return <h1>Loading...</h1>;
  }

  return (
    <ListStyle>
      <Table>
        <thead>
          <Tr>
            <Th>نام و نام خانوادگی</Th>
            <Th>عنوان تخصص</Th>
            <Th>شماره تماس</Th>
            <Th>کد کارشناسی</Th>
          </Tr>
        </thead>
        <tbody>
          {/* {items ? (
            items?.map((item) => ( */}
          <Tr
            key={item._id}
            onClick={() =>
              dispatch(
                cenrtainExpert(parentId, visitCode, {
                  visitCode: visitCode,
                  expertCode: item?.expertCode,
                  expertName: item?.eName,
                })
              )
            }
          >
            <Td>{item.fullName}</Td>
            <Td>{item.major}</Td>
            <Td>{item.phoneNumber}</Td>
            <Td>{item.expertCode}</Td>
          </Tr>
          {/* ))
          ) : (
            <Td>کارشناسی وجود ندارد</Td>
          )} */}
        </tbody>
      </Table>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  max-height: 100vh;
  width: 100%;
  overflow: auto;
  border: 1px solid #dddddd;
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
  background-color: #6980ff;
  color: #e6e7e8;
  font-size: 15px;
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  font-size: 14px;
`;
const Td = styled.td`
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  font-size: 14px;
  color: #404040;
  &:nth-child(even) {
    background-color: #edeef1;
  }
`;
const Tr = styled.tr`
  background-color: #dddddd;
  cursor: pointer;
  &:nth-child(odd) {
    background-color: #dddddd;
  }
`;

export default ListExpert;
