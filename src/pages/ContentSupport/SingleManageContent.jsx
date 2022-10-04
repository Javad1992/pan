import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";
import Typography from "../../components/Typography/Typography";
import { Container, HeaderTitle } from "../../globalStyle";
import {
  CardContent,
  CardInfo,
  Column,
  SubTitle,
  Wrapper,
} from "./ManageWeblog/singleManageContentStyle";

import { useEffect } from "react";
import {
  confirmCarrierStatus,
  getSingleCarrier,
  rejectedCarrier,
} from "../../redux/action/content";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CarouselImage from "../../core/Carousel";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const SingleManageContent = () => {
  const { sid } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const contentSelector = useSelector((state) => state.content);
  const { carrier, loadingCarrierConfirm } = contentSelector;

  console.log("carrier", carrier);

  const handleConfirm = (sid) => {
    console.log("sid", sid);
    dispatch(confirmCarrierStatus(sid, navigate));
  };

  const handleReject = (sid) => {
    dispatch(rejectedCarrier(sid));
  };

  useEffect(() => {
    dispatch(getSingleCarrier(sid));
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>جزییات کارشناس </HeaderTitle>
      <CardInfo>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            نام کارشناس : <SubTitle>{carrier[0]?.title} </SubTitle>{" "}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            کد کارشناس : <SubTitle>{carrier[0]?.expertCode}</SubTitle>{" "}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            تاریخ بارگذاری : <SubTitle> 1401/2/2 </SubTitle>{" "}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Button
            noSpace
            small
            size="14px "
            weight="bold"
            onClick={() => handleConfirm(carrier[0]?.sid)}
          >
            {loadingCarrierConfirm ? <Loading /> : "بارگذاری شد"}
          </Button>
          <div className="mx-1">
            <Button
              noSpace
              small
              size="14px "
              weight="bold"
              onClick={() => handleReject(carrier[0]?.sid)}
            >
              {loadingCarrierConfirm ? <Loading /> : "رد کردن"}
            </Button>
          </div>
        </Wrapper>
      </CardInfo>
      <CardContent>
        <Wrapper>
          <CarouselImage images={carrier[0]?.images} />
          {/* <img src={profileImg} alt="image-profile" /> */}
        </Wrapper>
        <Column>
          <Typography weight="bold" size="16px">
            {carrier[0]?.title}
          </Typography>
          <Typography size="14px">{carrier[0]?.content}</Typography>
        </Column>
      </CardContent>
    </Container>
  );
};

export default SingleManageContent;
