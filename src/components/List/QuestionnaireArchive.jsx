import React, {useState} from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import { archiveQuestion } from "../../redux/action/questionnaire";

// components
import Button from "../Button/Button";

// styled components
import styled from "styled-components";
import { formatData } from "../../utils/date";
import PopupGfg from "../Popup/Popup";

const QuestionnaireArchiveList = ({ items }) => {
  console.log("items", items);

  const [,forceUpdate] = useState(0)

  // declare dispatch
  const dispatch = useDispatch();

  const searchSelector = useSelector((state) => state.searchTerm);

  const { searchTerm } = searchSelector;

  const handleArchive = (Qcode) => {
    dispatch(archiveQuestion("2", Qcode, { archiveDescription: "" }));
    forceUpdate(1);
  };

  //   archiveDescription;

  return (
    <ListStyle>
      <Table>
        <thead>
          <Tr>
            <Th>نام و نام خانوادگی</Th>
            <Th>نوع کشت</Th>
            <Th>شهر</Th>
            <Th>توضیحات</Th>
            <Th>تاریخ درخواست</Th>
            <Th>جزییات</Th>
          </Tr>
        </thead>
        <tbody>
          {items ? (
            items
              ?.filter((items) => {
                if (searchTerm === "") {
                  return items;
                } else if (items?.fullName?.includes(searchTerm)) {
                  return items;
                }
              })
              .map((item,index) => (
                <Tr key={item.Qcode}>
                  <Td>{item.fullName}</Td>
                  <Td>{item.product}</Td>
                  <Td>{item.area}</Td>
                  {item?.records?.archive.length >0 ?
                      (
                    <Td className="popup">
                      <span>
                        <PopupGfg desc={item?.records?.archive?.map((comment , index) => {
                          return (
                              <>
                              <p>{comment.content}</p>
                              <hr/>
                              </>
                          )
                        } )} />
                      </span>
                    </Td>
                  ) :
                      (
                    <Td>وجود ندارد</Td>
                  )}
                  <Td>{formatData(item?.date?.toString())}</Td>
                  <Td>
                    <Button small onClick={() => handleArchive(item?.Qcode)}>
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

  thead {
    border-bottom: ${({ theme }) => theme.border};
  }
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
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: #e2e4e6;
    cursor: pointer;
  }
`;

export default QuestionnaireArchiveList;
