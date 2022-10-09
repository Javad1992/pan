import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MealPlanList from "../components/List/MealPlanList";
import Typography from "../components/Typography/Typography";
import { Container } from "../globalStyle";
import { allProducts } from "../redux/action/general";
import { mealPlan } from "../redux/action/questionnaire";

const EditQuestionnairePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [product, setProduct] = useState("");
  let pageQuestionnaireList = [];
  const dispatch = useDispatch();

  const questionnaireSelector = useSelector((state) => state?.questionnaire);
  const { allEditQuestionnaire } = questionnaireSelector;
  console.log("AllQues", allEditQuestionnaire)
  pageQuestionnaireList = (allEditQuestionnaire?.slice( ( (10 * pageNumber) - 10 ) , ( (10 * pageNumber)) ));
  console.log("PageQues", pageQuestionnaireList)
  const countPage = Math.ceil(
      questionnaireSelector?.count / 10
  );

  const generalSelector = useSelector((state) => state.general);
  const { products } = generalSelector;

  useEffect(() => {
    if(allEditQuestionnaire?.length > (pageNumber * 10)) {
      pageQuestionnaireList.push((allEditQuestionnaire?.slice( ( (10 * pageNumber) - 10 ) , ( (10 * pageNumber) - 1 ) )));
    } else {
      dispatch(mealPlan(pageNumber, phoneNumber, fullName, product));
    }
  }, [dispatch, pageNumber, phoneNumber, fullName, product]);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="18px" weight="bold">
        لیست برنامه غذایی های نگارش شده
      </Typography>
      <MealPlanList
        setPhoneNumber={setPhoneNumber}
        setFullName={setFullName}
        setProduct={setProduct}
        products={products}
        items={pageQuestionnaireList}
        countPage={countPage}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </Container>
  );
};

export default EditQuestionnairePage;
