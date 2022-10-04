import React from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import {
  archiveQuestion,
  confirmQuestion, mealPlanDetail,
} from "../../redux/action/questionnaire";

// react router dom
import { Link } from "react-router-dom";

// components
import Button from "../Button/Button";

// styled components
import styled from "styled-components";

// icons
import { BsHourglassSplit, BsHourglassTop } from "react-icons/bs";
import { formatData } from "../../utils/date";
import InputField from "../InputField/InputField";
import Typography from "../Typography/Typography";
import { userData } from "../../help/userData";

const RejectMealPlanList = ({ items }) => {
  const userInfo = userData();

  const role = userInfo?.data?.result?.employee?.role;

  // declare dispatch
  const dispatch = useDispatch();

  const handleConfirm = (Qcode) => {
    dispatch(confirmQuestion(Qcode));
  };

  const searchSelector = useSelector((state) => state.searchTerm);
  const mealPlanDetails = useSelector(state => state?.questionnaire?.mealDetail)
  console.log(mealPlanDetails)
  const { searchTerm } = searchSelector;

  const downloadMealPlan = (mealPlanId) => {
    dispatch(mealPlanDetail(mealPlanId))
  }

  const archiveQuestionnaire = (Qcode, flag) => {
    dispatch(
      archiveQuestion(2, Qcode, {
        waiting: flag,
      })
    );
  };

  return (
    <ListStyle>
      <SearchList>
        <div>
          <Typography size="14px" width="100px" weight="bold">
            جستجو براساس :{" "}
          </Typography>
        </div>
        <InputField type="text" placeholder="نام و نام خانوادگی" />
        <InputField type="text" placeholder="نوع کشت" />
        <InputField type="number" placeholder="شماره تماس" />
      </SearchList>
      <Table>
        <thead>
          <Tr>
            <Th>نام</Th>
            <Th>نوع کشت</Th>
            <Th>شهر</Th>
            <Th>تاریخ درخواست</Th>
            <Th>فایل</Th>
            <Th>وضعیت</Th>
            <Th>جزییات</Th>
            {role === "mealPlanWriter" ? null : <Th>ارجاع به بخش بعد</Th>}
          </Tr>
        </thead>
        <tbody>
          {items ? (
            items
              ?.filter((items) => {
                if (searchTerm === "") {
                  return items;
                } else if (items?.product?.includes(searchTerm)) {
                  return items;
                } else if (items?.fullName?.includes(searchTerm)) {
                  return items;
                }
              })
              .map((item) => (
                <Tr key={item.Qcode}>
                  <Td>{item?.fullName}</Td>
                  <Td>{item?.product}</Td>
                  <Td>{item.city}</Td>
                  <Td>{formatData(item?.date.toString())}</Td>
                  <Td>
                    <Typography>
                      <a href={item?.files} target="blank">
                       دانلود فایل
                      </a>
                      {/* <Button small onClick={() => downloadMealPlan(item?.mealPlanId)}>دانلود</Button> */}
                    </Typography>
                  </Td>
                  <Td>
                    {item?.waiting === true ? (
                      <BsHourglassSplit
                        size={20}
                        color="#00A300"
                        onClick={() => archiveQuestionnaire(item?.Qcode, false)}
                      />
                    ) : (
                      <BsHourglassTop
                        size={20}
                        onClick={() => archiveQuestionnaire(item?.Qcode, true)}
                      />
                    )}
                  </Td>
                  <Td>
                    <Link
                      to={`/dashboard/app/questionnaireList/${item?.Qcode}?reject=true`}
                    >
                      <Button color="#6980ff" small>
                        جزییات
                      </Button>
                    </Link>
                  </Td>

                  {/* {role === "mealPlanWriter" ? null : role ===
                  "educationManager" ? (
                  <Td>
                    <Link to={`/dashboard/app/questionnaireList/${item.Qcode}`}>
                      <Button small>جزییات</Button>
                    </Link>
                  </Td>
                ) : ( */}

                  {/* <Td>
                    <Link to={`/dashboard/app/editquestionnaireList/${item.Qcode}`}>
                      <Button small weight="bold">
                        جزییات
                      </Button>
                    </Link>
                  </Td> */}
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
              ))
          ) : (
            <Td>برنامه غذایی وجود ندارد</Td>
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
  /* &:nth-child(even) {
    background-color: #edeef1;
  } */

  svg {
    cursor: pointer;
  }
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
  /* &:nth-child(odd) {
    background-color: #dddddd;
  } */
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

export default RejectMealPlanList;
