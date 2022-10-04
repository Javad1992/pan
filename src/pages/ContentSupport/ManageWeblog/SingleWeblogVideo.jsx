import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Typography from "../../../components/Typography/Typography";
import { Container, HeaderTitle } from "../../../globalStyle";
import { archivedContent, getSingleVideo } from "../../../redux/action/content";
import {
  CardContent,
  CardInfo,
  Column,
  SubTitle,
  Wrapper,
  WrapperTable,
} from "./singleManageContentStyle";

const SingleWeblogVideo = () => {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();

  const contentSelector = useSelector((state) => state.content);

  const { video } = contentSelector;

  const navigate = useNavigate();

  const handleConfirm = (id) => {
    dispatch(archivedContent(id, navigate));
  };

  useEffect(() => {
    dispatch(getSingleVideo(id));
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>جزییات کارشناس آرمین اسکوییان</HeaderTitle>
      <CardInfo>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            نام کارشناس : <SubTitle>{video?.title} </SubTitle>{" "}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            کد کارشناس : <SubTitle>{video?.expertCode} </SubTitle>{" "}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            آی دی نویسندگی : <SubTitle>asdasdasd </SubTitle>{" "}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            آدرس صفحه : <SubTitle>asdasdasd </SubTitle>{" "}
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
            onClick={() => handleConfirm(video?.id)}
          >
            بارگذاری شد
          </Button>
        </Wrapper>
      </CardInfo>
      <CardContent>
        <Column>
          <WrapperTable>
            <Typography weight="bold">
              عنوان : <SubTitle>{video?.title}</SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              توضیحات : <SubTitle>{video?.description}</SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              نوع : <SubTitle>{video?.type}</SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              دسته بندی : <SubTitle>{video?.category}</SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              کلمات کلیدی :{" "}
              <SubTitle>
                {video?.keyWords?.map((item) => item)?.join(", ")}
              </SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              ویدیو :{" "}
              <SubTitle>
                <a href={video?.videoUrl}>دریافت ویدیو</a>
              </SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              دریافت کاور :{" "}
              <SubTitle>
                <a href={video?.coverUrl}>دریافت کاور ویدیو</a>
              </SubTitle>
            </Typography>
          </WrapperTable>
        </Column>
      </CardContent>
    </Container>
  );
};

export default SingleWeblogVideo;
