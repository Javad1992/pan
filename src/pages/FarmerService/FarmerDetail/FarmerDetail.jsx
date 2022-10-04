import { Link, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Typography from "../../../components/Typography/Typography";
import { Container, HeaderTitle, Row } from "../../../globalStyle";
import { farmerDetailData } from "../_mock/farmerDetailData";
import Card from "./Card/Card";
import { Badge, Conttent, Wrapper, WrapperCard } from "./farmerDetailStyle";

const FarmerDetail = () => {
  const { querstionnaire, mealPlan, visit } = farmerDetailData;

  const { farmerCode } = useParams();
  console.log("farmerCode", farmerCode);

  return (
    <Container>
      <HeaderTitle>مشاهده جزییات کشاورز</HeaderTitle>
      <Conttent>
        <Wrapper>
          <Row>
            <Typography size="14px" weight="bold">
              پرسشنامه ها
            </Typography>
            <Badge bgColor="#6980ff">
              <Typography color="#fff" size="12px">
                <Link to={`/dashboard/app/farmerallList?mode=questionnaire`}>
                  مشاهده بیشتر
                </Link>
              </Typography>
            </Badge>
          </Row>
          <WrapperCard>
            {querstionnaire.map((questionnaire) => (
              <Card {...questionnaire} />
            ))}
          </WrapperCard>
        </Wrapper>
        <Wrapper>
          <Row>
            <Typography size="14px" weight="bold">
              برنامه غذایی ها
            </Typography>
            <Badge bgColor="#6980ff">
              <Typography color="#fff" size="12px">
                <Link to={`/dashboard/app/farmerallList?mode=mealPlan`}>
                  مشاهده بیشتر
                </Link>
              </Typography>
            </Badge>
          </Row>
          <WrapperCard>
            {mealPlan.map((questionnaire) => (
              <Card {...questionnaire} />
            ))}
          </WrapperCard>
        </Wrapper>
        <Wrapper>
          <Row>
            <Typography size="14px" weight="bold">
              برنامه غذایی ها
            </Typography>
            <Badge bgColor="#6980ff">
              <Typography color="#fff" size="12px">
                <Link to={`/dashboard/app/farmerallList?mode=visit`}>
                  مشاهده بیشتر
                </Link>
              </Typography>
            </Badge>
          </Row>
          <WrapperCard>
            {visit.map((questionnaire) => (
              <Card {...questionnaire} />
            ))}
          </WrapperCard>
        </Wrapper>
      </Conttent>
    </Container>
  );
};

export default FarmerDetail;
