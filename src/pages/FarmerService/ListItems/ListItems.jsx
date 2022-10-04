import { useLocation } from "react-router-dom";
import { Container, HeaderTitle } from "../../../globalStyle";

const FarmerAllListItem = () => {
  const location = useLocation();

  const searchParam = location.search.split("=");
  const mode = searchParam[1];

  const specifeidMode = () => {
    switch (mode) {
      case "questionnaire":
        return "لیست پرسشنامه ها";
      case "mealPlan":
        return "لیست برنامه غذایی ها";
      case "visit":
        return "لیست بازدیدها";
      default:
        return mode;
    }
  };

  return (
    <Container>
      <HeaderTitle>{specifeidMode()}</HeaderTitle>
    </Container>
  );
};

export default FarmerAllListItem;
