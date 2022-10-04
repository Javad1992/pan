import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RejectMealPlanList from "../components/List/RejectMealPlanList";
import Typography from "../components/Typography/Typography";
import { Container } from "../globalStyle";
import { rejectMealPlan } from "../redux/action/questionnaire";

const RejectMealPlanPage = () => {
  const dispatch = useDispatch();

  const questionnaireSelector = useSelector((state) => state.questionnaire);

  const { allRejectMealPlan } = questionnaireSelector;

  console.log(allRejectMealPlan)
  
  useEffect(() => {
    dispatch(rejectMealPlan());
  }, [dispatch]);

  return (
    <Container>
      <Typography size="18px" weight="bold">
        لیست برنامه غذایی های برگشت داده شده
      </Typography>
      <RejectMealPlanList items={allRejectMealPlan?.mealPlans} />
    </Container>
  );
};

export default RejectMealPlanPage;
