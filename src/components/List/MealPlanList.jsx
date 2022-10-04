import React from "react";

// react redux
import {useDispatch, useSelector} from "react-redux";
import {
    archiveQuestion,
    archiveQuestionEdit,
    confirmQuestion,
    mealPlan, toWaitingQuestionnaire,
} from "../../redux/action/questionnaire";

// react router dom
import {Link} from "react-router-dom";

// components
import Button from "../Button/Button";

// styled components
import styled from "styled-components";

// icons
import {BsHourglassSplit, BsHourglassTop} from "react-icons/bs";
import {formatData} from "../../utils/date";
import InputField from "../InputField/InputField";
import Typography from "../Typography/Typography";
import Pagination from "@material-ui/lab/Pagination";
import {useState} from "react";
import {userData} from "../../help/userData";

const MealPlanList = ({
                          setPhoneNumber,
                          setFullName,
                          setProduct,
                          products,
                          items,
                          countPage,
                          setPageNumber,
                          pageNumber,
                      }) => {
    const userInfo = userData();
    const role = userInfo?.data?.result?.employee?.role;

    const dispatch = useDispatch();

    const handleConfirm = (Qcode) => {
        dispatch(confirmQuestion(Qcode, "mealplan"));
    };

    console.log('items', items)

    const [, forceUpdate] = useState(0);

    const searchSelector = useSelector((state) => state.searchTerm);

    const {searchTerm} = searchSelector;

    const choice = {
        persianName: "انتخاب کنید",
        pid: "",
    };

    const productFormat = [{...choice}, ...products];

    const waitQuestionnaire = (Qcode, flag, i) => {
        dispatch(
            toWaitingQuestionnaire(Qcode, {
                waiting: flag,
            }, i)
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
                    <Th>برنامه غذایی</Th>
                    <Th>وضعیت</Th>

                </Tr>
                </thead>
                <tbody>
                {items ? (
                    items
                        // ?.mealPlans
                        // ?.filter((items) => {
                        //     if (searchTerm === "") {
                        //         return items;
                        //     } else if (items?.product?.includes(searchTerm)) {
                        //         return items;
                        //     } else if (items?.fullName?.includes(searchTerm)) {
                        //         return items;
                        //     }
                        // })
                        .map((item, i) => (
                            <Tr key={item.Qcode}>
                                <Td>{item?.fullName}</Td>
                                <Td>{item?.productPersianName}</Td>
                                <Td>{item?.city}</Td>
                                <Td>{formatData(item?.date?.toString())}</Td>
                                <Td>
                                    <Typography>
                                        <a href={item?.files} target="_blank" rel='noreferrer'>
                                            <p>دانلود</p>
                                        </a>
                                    </Typography>
                                </Td>
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
                                {role === "sale" ? (
                                    <Td>
                                        <Link
                                            to={`/dashboard/app/questionnaireList/${item?.Qcode}`}
                                        >
                                            <Button small weight="bold">
                                                جزییات
                                            </Button>
                                        </Link>
                                    </Td>
                                ) : (
                                    <Td>
                                        <Link
                                            to={`/dashboard/app/editquestionnaireList/${item?.Qcode}`}
                                        >
                                            <Button small weight="bold">
                                                جزییات
                                            </Button>
                                        </Link>
                                    </Td>
                                )}

                                {role === "mealPlanWriter" ? null : (
                                    <Td>
                                        <Button
                                            small
                                            color="#00A300"
                                            onClick={() => handleConfirm(item?.Qcode)}
                                            weight="bold"
                                        >
                                            {role === 'educationManager' ? 'تایید برنامه' : 'ارسال'}
                                        </Button>
                                    </Td>
                                )}
                            </Tr>
                        ))
                ) : (
                    <Td>برنامه غذایی وجود ندارد</Td>
                )}
                </tbody>
            </Table>
            <Paginate>
                <Pagination
                    page={+pageNumber}
                    onChange={(event, value) => setPageNumber(value)}
                    count={countPage}
                    color="primary"
                />
            </Paginate>
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
  background-color: ${({theme}) => theme.backgroundSidebar};
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
  background-color: ${({theme}) => theme.backgroundSidebar};
  color: ${({theme}) => theme.text};
  padding: 10px 20px;
  font-size: 14px;
`;
const Td = styled.td`
  border-bottom: 1px solid ${({theme}) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: ${({theme}) => theme.text};
  /* &:nth-child(even) {
    background-color: #edeef1;
  } */

  svg {
    cursor: pointer;
  }
`;
const Tr = styled.tr`
  background-color: ${({theme}) => theme.backgroundSidebar};
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
  color: ${({theme}) => theme.text};
  outline: none;
`;

const Option = styled.option``;

const Paginate = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.backgroundSidebar};
`;

export default MealPlanList;
