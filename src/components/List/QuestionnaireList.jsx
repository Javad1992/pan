import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {toWaitingQuestionnaire, confirmQuestion} from "../../redux/action/questionnaire";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styled from "styled-components";
import { BsHourglassSplit, BsHourglassTop } from "react-icons/bs";
import { formatData } from "../../utils/date";
import InputField from "../InputField/InputField";
import Typography from "../Typography/Typography";
import Pagination from "@material-ui/lab/Pagination";

const QuestionnaireList = ({
  items,
  role,
  setPageNumber,
  pageNumber,
  setPhoneNumber,
  setFullName,
  products,
  setProduct,
  countPage,
}) => {
  // declare dispatch
  const dispatch = useDispatch();

  const handleConfirm = (Qcode) => {
    dispatch(confirmQuestion(Qcode));
  };

  const [, forceUpdate] = useState(0);

  const waitQuestionnaire = (Qcode, flag, i) => {
    dispatch(
      toWaitingQuestionnaire(
        Qcode,
        {
          waiting: flag,
        },
        i
      )
    );
    forceUpdate(1)
  };


  return (
    <ListStyle>
      <SearchList>
        <div>
          <Typography size="14px" width="100px" weight="bold">
            جستجو براساس :{" "}
          </Typography>
        </div>
        <InputField
          type="text"
          placeholder="نام و نام خانوادگی"
          onChange={(event) => setFullName(event.target.value)}
        />
        <Select onChange={(event) => setProduct(event.target.value)}>
          {products.map((product, index) => (
            <Option
              key={index}
              value={product?.pid}
              selected={product?.persianName === "انتخاب کنید"}
            >
              {product?.persianName}
            </Option>
          ))}
        </Select>
        <InputField
          type="number"
          placeholder="شماره تماس"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </SearchList>
      <Table>
        <thead>
          <Tr>
            <Th>نام و نام خانوادگی</Th>
            <Th>نوع کشت</Th>
            <Th>شهر</Th>
            <Th>تاریخ درخواست</Th>
            <Th>وضعیت</Th>
            {role === "mealPlanWriter" ? null : <Th>ارجاع به بخش بعد</Th>}
          </Tr>
        </thead>
        <tbody>
        {/*{change}*/}
          {items ? (
            items?.map((item, i) => (
                !item.hasMealPlan && (
                    <Tr key={item.Qcode}>
                      <Td>{item.fullName}</Td>
                      <Td>{item.product}</Td>
                      <Td>{item.city}</Td>
                      <Td>{formatData(item?.date?.toString())}</Td>
                      <Td>
                        {item?.waiting === true ? (
                            <BsHourglassSplit
                                size={20}
                                color="#00A300"
                                onClick={() => waitQuestionnaire(item?.Qcode, false, i)}
                            />
                        ) : (
                            <BsHourglassTop
                                size={20}
                                onClick={() => waitQuestionnaire(item?.Qcode, true, i)}
                            />
                        )}
                      </Td>
                      {/* {role === "mealPlanWriter" ? null : role ===
                  "educationManager" ? (
                  <Td>
                    <Link to={`/dashboard/app/questionnaireList/${item.Qcode}`}>
                      <Button small>جزییات</Button>
                    </Link>
                  </Td>
                ) : ( */}

                      <Td>
                        <Link to={`/dashboard/app/questionnaireList/${item.Qcode}`}>
                          <Button small weight="bold">
                            جزییات
                          </Button>
                        </Link>
                      </Td>
                      {role === "mealPlanWriter" ? null : (
                          <Td>
                            <Button
                                small
                                color="#00A300"
                                onClick={() => handleConfirm(item?.Qcode)}
                                weight="bold"
                            >
                              ارجاع به بخش بعد
                            </Button>
                          </Td>
                      )}
                      {/* )} */}
                    </Tr>
                )
            ))
          ) : (
            <Td>درخواست بازدیدی وجود ندارد</Td>
          )}
        </tbody>
        <Paginate>
          <Pagination
            page={+pageNumber}
            onChange={(event, value) => setPageNumber(value)}
            count={countPage}
            color="primary"
          />
        </Paginate>
      </Table>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  max-height: 80vh;
  width: 100%;
  overflow: auto;
  text-align: center;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  padding: 1rem 0;
  margin-bottom: 2rem;
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
  padding: 10px 20px;
  font-size: 14px;
`;

const Td = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  svg {
    cursor: pointer;
  }
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

const SearchList = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    p {
      margin-top: 0.6rem;
    }
  }
`;

const Select = styled.select`
  font-size: 12px;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  border: 1px solid #c8cccf;
  color: ${({ theme }) => theme.text};
  outline: none;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

const Option = styled.option``;

const Paginate = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export default QuestionnaireList;
