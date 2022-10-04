import React from "react";

// react redux
import { useDispatch } from "react-redux";
import { openGisModal } from "../../redux/action/modal";

// components
import Button from "../Button/Button";

// styled components
import styled from "styled-components";
import { Link } from "react-router-dom";

const GISList = ({ items, headerTitle, gisFiles }) => {
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
          {gisFiles ? (
            items ? (
              items.map((item) => (
                <Tr key={item._id}>
                  <Td>{item.farmerCode}</Td>
                  <Td>{item.visitCode}</Td>

                  <Td>
                    <a href={item?.exelFile} target="_blank">
                      <Button small>دانلود فایل پیش تحلیل</Button>
                    </a>
                  </Td>
                </Tr>
              ))
            ) : (
              <Td>درخواست بازدیدی وجود ندارد</Td>
            )
          ) : items ? (
            items.map((item) => (
              <Tr key={item._id}>
                <Td>{item.fullName}</Td>
                <Td>{item.product}</Td>
                <Td>{item.visitCode}</Td>
                <Td>{item.farmerCode}</Td>
                <Td>
                  <Link to={`/dashboard/app/checklist/${item.parentId}`}>
                    <Button small>جزییات</Button>
                  </Link>
                </Td>
                <Td>
                  <Button
                    small
                    onClick={() => dispatch(openGisModal(item?._id))}
                  >
                    آپلود پیش تحلیل{" "}
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
  color: ${({ theme }) => theme.text};
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export default GISList;
