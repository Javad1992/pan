import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Typography from "../../../components/Typography/Typography";
import { Container, HeaderTitle } from "../../../globalStyle";
import {
  archivedContent,
  getSingleContentFile,
} from "../../../redux/action/content";
import {
  CardContent,
  CardInfo,
  Column,
  SubTitle,
  Wrapper,
  WrapperTable,
} from "./singleManageContentStyle";

const SingleWeblogText = () => {
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();

  const contentSelector = useSelector((state) => state.content);

  const { file } = contentSelector;

  const navigate = useNavigate();

  const handleConfirm = (id) => {
    dispatch(archivedContent(id, navigate));
  };

  useEffect(() => {
    dispatch(getSingleContentFile(id));
  }, [dispatch]);

  return (
    <Container>
      <HeaderTitle>جزییات کارشناس آرمین اسکوییان</HeaderTitle>
      <CardInfo>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            نام کارشناس : <SubTitle>{file?.title}</SubTitle>{" "}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Typography weight="bold">
            {" "}
            کد کارشناس : <SubTitle>{file?.expertCode} </SubTitle>{" "}
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
            onClick={() => handleConfirm(file?.id)}
          >
            بارگذاری شد
          </Button>
        </Wrapper>
      </CardInfo>
      <CardContent>
        <Column>
          <WrapperTable>
            <Typography weight="bold">
              عنوان : <SubTitle>{file?.title}</SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              توضیحات : <SubTitle>{file?.description}</SubTitle>
            </Typography>
          </WrapperTable>

          <WrapperTable>
            <Typography weight="bold">
              دسته بندی : <SubTitle>{file?.contentCategory}</SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              کلمات کلیدی :{" "}
              <SubTitle>
                {file?.keyWords?.map((item) => item)?.join(", ")}
              </SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              توضیحات کلیدی : <SubTitle>asdasd</SubTitle>
            </Typography>
          </WrapperTable>
          <WrapperTable>
            <Typography weight="bold">
              محتوا :{" "}
              <SubTitle>
                {file?.files?.map((item) => (
                  <Fragment>
                    <a href={item?.link} target="_blank">
                      {item?.type}
                    </a>
                    <br />
                  </Fragment>
                ))}
              </SubTitle>
            </Typography>
          </WrapperTable>
        </Column>
      </CardContent>
    </Container>
  );
};

export default SingleWeblogText;
