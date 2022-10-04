// import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import InputField from "../components/InputField/InputField";
const TableList = ({
  items,
  headerTitle,
  setPage,
  page,
  countPage,
  onChange,
  noPaginate,
}) => {
  console.log(page);

  return (
    <ListStyle>
      <SearchBox>
        {noPaginate ? (
          ""
        ) : (
          <InputField
            type="text"
            placeholder="جستجو کنید..."
            onChange={onChange}
          />
        )}
      </SearchBox>
      <Table>
        <thead>
          <Tr>
            {headerTitle?.map((title, index) => (
              <Th key={index}>{title}</Th>
            ))}
          </Tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
      <Paginate>
        <Pagination
          page={+page}
          onChange={(event, value) => setPage(value)}
          count={countPage}
          color="primary"
        />
      </Paginate>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  max-height: 70vh;
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

const SearchBox = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};

  div {
    width: 20%;
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
// const Td = styled.td`
//   border-bottom: 1px solid ${({ theme }) => theme.border};
//   padding: 10px 20px;
//   font-size: 14px;
//   color: ${({ theme }) => theme.text};
// `;

const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  /* &:nth-child(odd) {
    background-color: #dddddd;
  } */
`;

const Paginate = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export default TableList;
