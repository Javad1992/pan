import React from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";
import {
  archiveQuestion,
  confirmQuestion,
  mealPlan,
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

const SaleMealPlanList = ({
  items,
  role,
  setPhoneNumber,
  setPageNumber,
  setFullName,
  setProduct,
  products,
}) => {
  // declare dispatch
  const dispatch = useDispatch();

  const handleConfirm = (Qcode) => {
    dispatch(confirmQuestion(Qcode));
    dispatch(mealPlan(1, "", "", ""));
  };

  const searchSelector = useSelector((state) => state.searchTerm);

  const { searchTerm } = searchSelector;

  const choice = {
    persianName: "انتخاب کنید",
    pid: "",
  };
  const productFormat = [{ ...choice }, ...products];
  console.log(productFormat);

  const archiveQuestionnaire = (Qcode, flag) => {
    dispatch(
      archiveQuestion(2, Qcode, {
        waiting: flag,
      })
    );
  };

  console.log(items);

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
          {productFormat?.map((product) => (
            <Option
              value={product?.pid}
              selected={product?.persianName === "انتخاب کنید"}
            >
              {product.persianName}
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
            <Th>دانلود فایل</Th>
          </Tr>
        </thead>
        <tbody>
          {items ? (
            items?.mealPlans.map((item) => (
              <Tr key={item.Qcode}>
                <Td>{item?.fullName}</Td>
                <Td>{item?.productPersianName}</Td>
                <Td>{item?.city}</Td>
                <Td>{formatData(item?.date?.toString())}</Td>
                <Td>
                  <Typography>
                    <a href={item?.files} target="blank">
                      {item?.files}
                    </a>
                  </Typography>
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

const Select = styled.select`
  font-size: 12px;
  font-family: "IRANSans";
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  border: 1px solid #c8cccf;
  color: ${({ theme }) => theme.text};
  outline: none;
`;

const Option = styled.option``;

export default SaleMealPlanList;
