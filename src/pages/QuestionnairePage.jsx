import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allQuestionnaire } from "../redux/action/questionnaire";
import Typography from "../components/Typography/Typography";
import QuestionnaireList from "../components/List/QuestionnaireList";
import { userData } from "../help/userData";
import { Container } from "../globalStyle";
import { allProducts } from "../redux/action/general";

const QuestionnairePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [product, setProduct] = useState("");
  let pageQuestionnaireList = [];
  const { role } = userData()?.data?.result?.employee;
  const dispatch = useDispatch();

  const questionnaireSelector = useSelector((state) => state?.questionnaire);
  const questionnaireList = questionnaireSelector?.questionnaires;
  pageQuestionnaireList = (questionnaireList?.slice( ( (10 * pageNumber) - 10 ) , ( (10 * pageNumber)) ));
  const countPage = Math.ceil(
    questionnaireSelector?.count / 10
  );

  const generalSelector = useSelector((state) => state?.general);
  const { products } = generalSelector;

  const choice = {
    persianName: "انتخاب کنید",
    pid: "",
  };

  const productFormat = [{ ...choice }, ...products];

  useEffect(() => {
    if(questionnaireList?.length > (pageNumber * 10)) {
      pageQuestionnaireList.push((questionnaireList?.slice( ( (10 * pageNumber) - 10 ) , ( (10 * pageNumber) - 1 ) )));
    } else {
      dispatch(allQuestionnaire(pageNumber, fullName, phoneNumber, product));
    }
    // eslint-disable-next-line
  }, [dispatch, pageNumber, fullName, phoneNumber, product]);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="18px" weight="bold">
        لیست پرسشنامه ها
      </Typography>
      <QuestionnaireList
        setPhoneNumber={setPhoneNumber}
        setPageNumber={setPageNumber}
        phoneNumber={phoneNumber}
        setFullName={setFullName}
        setProduct={setProduct}
        products={productFormat ? productFormat : []}
        items={pageQuestionnaireList}
        role={role}
        countPage={countPage}
        pageNumber={pageNumber}
      />
    </Container>
  );
};

export default QuestionnairePage;
