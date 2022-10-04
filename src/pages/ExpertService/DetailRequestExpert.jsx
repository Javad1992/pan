import { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import ArchiveRequestExpertDialog from "../../components/Dialog/ArchiveRequestExpertDialog";
import RejectExpertToLevelBack from "../../components/Dialog/RejectExpertToLevelBack";
import Loading from "../../components/Loading/Loading";
import ToggleText from "../../components/ToggleText/ToggleText";
import Typography from "../../components/Typography/Typography";
import TableList from "../../core/Table";
import { HeaderTitle } from "../../globalStyle";
import { userData } from "../../help/userData";
import {
  confirmExpert,
  detailRequestExpert,
  rejectExpert
} from "../../redux/action/expertService";

import { editExpert } from "../../redux/action/expert";
import {
  openArchiveQuestionModal,
  openExpertLevelBackModal,
  openUpdateRequestExpert,
} from "../../redux/action/modal";
import UpdateDetailRequestExpert from "./Dialog/UpdateDetailRequestExpert";

// icons
import { GiConfirmed } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

// editor man
import { EditorContainer } from "editorman"
import "editorman/dist/index.css";

const DetailRequestExpert = () => {
  const [edited, setEdited] = useState(null);
  const [modal, setModal] = useState(null);
  const [staticData, setStaticData] = useState(null);

  // console.log("edited", edited);

  const handleClick = (object) =>
  // console.log("editorman")
    setModal(
      <>
        {console.log("editorman")}
      {  staticData && (
        <EditorContainer
          toEdit={object}
          setEdited={setEdited}
          setModal={setModal}
          staticData={staticData}
        />
      )}
      </>
        // console.log("editorman")
    );
  const [expertInfo, setExpertInfo] = useState({});
  const headerTitle = [
    "#",
    "راه های ارتباطی",
    "id, شماره یا لینک",
    "وضعیت انتشار",
  ];
  const userInformation = userData();
  const role = userInformation?.data?.result?.employee?.role;

  const { phoneNumber } = useParams();
  //   declare dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalSelector = useSelector((state) => state.modal);
  const {
    isOpenArchiveQuestionModal,
    isOpenDetailRequestExpert,
    isOpenExpertLevelBack,
  } = modalSelector;

  const expertSelector = useSelector((state) => state.expertService);

  const { expert, confirmLoading, rejectLoading } = expertSelector;

  useEffect(() => {
    if(edited !== null) {
      let idOrPhoneNumber = edited instanceof FormData ? expert.uid : phoneNumber
      dispatch(editExpert(edited, idOrPhoneNumber))
    }

  },[edited])

  const checkAnswer = (answer) => {
    if (answer === true) {
      return "بله";
    } else {
      return "خیر";
    }
  };
  const filterParent = expert?.expertise?.map((item) => item?.parentName);
  const parent = [...new Set(filterParent)];

  const renderChild = (parent) => {
    const filterChild = expert?.expertise
      ?.filter((item) => item.parentName === parent)
      .map((item) => item?.name)
      ?.join("، ");
    return filterChild;
  };

  const filteredProfession = expert?.profession?.map((item) => item.parentName);
  const parentProfession = [...new Set(filteredProfession)];

  console.log("parentProfession", parentProfession);

  const renderProfession = (profession) => {
    const filterChild = expert?.profession
      ?.filter((item) => item.parentName === profession)
      .map((item) => item?.name)
      ?.join("، ");
    return filterChild;
  };

  const returnKey = (title) => {
    switch (title) {
      case "officialPhoneNumber":
        return "شماره تماس کاری";
      case "landingNumber":
        return "تلفن ثابت";
      default:
        return title;
    }
  };

  useEffect(() => {
    dispatch(detailRequestExpert(phoneNumber));
  }, [dispatch, phoneNumber]);

  const items = expert?.communicationWays?.map((item, index) => (
    <Tr key={index}>
      <Td>{index + 1}</Td>
      <Td>{returnKey(item?.title)}</Td>
      <Td>{item?.value}</Td>
      <Td>
        {item?.publicationStatus === true ? (
          <GiConfirmed color="green" />
        ) : (
          <AiOutlineCloseCircle color="red" />
        )}
      </Td>
    </Tr>
  ));

  useEffect(() => {
    fetch("https://agroiranexpert.com/api/static/fields/expert")
      .then((response) => response.json())
      .then((data) => {
        setStaticData(data.data.result);
      });
  }, []);

  return (
    <div>
      <div>{modal}</div>
      <Wrapper>
        <HeaderTitle>جزییات درخواست ثبت نام کارشناس</HeaderTitle>
        <div style={{ display: "flex" }}>
          {role === "educationManager" ? (
            <Fragment>
              <Button
                small
                // dispatch(rejectExpert(phoneNumber, navigate))
                onClick={() => dispatch(openExpertLevelBackModal())}
              >
                {confirmLoading ? <Loading /> : "برگشت به مرحله قبل"}
              </Button>
              <SpaceX x=".3rem">
                <Button
                  small
                  onClick={() => dispatch(confirmExpert(phoneNumber, navigate))}
                >
                  تایید نهایی
                </Button>
              </SpaceX>
            </Fragment>
          ) : (
            <>
              <SpaceX x=".3rem">
                <Button
                  weight="bold"
                  small
                  onClick={() => dispatch(confirmExpert(phoneNumber, navigate))}
                >
                  {confirmLoading ? <Loading /> : "ارجاع به بخش بعد"}
                </Button>
              </SpaceX>
              <Button
                weight="bold"
                small
                onClick={() => dispatch(openArchiveQuestionModal())}
              >
                بایگانی
              </Button>
            </>
          )}
        </div>
      </Wrapper>
      <Content>
        <ToggleText title="بیوگرافی">
          <Space>
            <Typography size="14px" weight="bold">
              اطلاعات شخصی
            </Typography>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ fullName: expert?.fullName })}
              >
                نام و نام خانوادگی
              </SubTitle>{" "}
              : {expert?.fullName}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ eName: expert?.eName })}>نام به لاتین</SubTitle> : {`${expert?.eName}`}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ eFamilyName: expert?.eFamilyName })}>نام خانوادگی به لاتین</SubTitle> : {expert?.eFamilyName}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ fatherName: expert?.fatherName })}>نام پدر</SubTitle> : {expert?.fatherName}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ nationalCode: expert?.nationalCode })}>کد ملی</SubTitle> : {expert?.nationalCode}
            </Typography>
          </Space>
          <Space>
            <Typography size="14px" weight="bold">
              سوابق تحصیلی
            </Typography>
            <Typography>
              تقاضای ایجاد صفحه <SubTitle onClick={() => handleClick({ expectedPage: expert?.expectedPage })}>{expert?.expectedPage}</SubTitle> را
              دارند.
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ degree: expert?.degree })}>مدرک تحصیلی</SubTitle> : {expert?.degree}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ university: expert?.university })}>دانشگاه</SubTitle> : {expert?.university}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ major: expert?.major })}>رشته</SubTitle> : {expert?.major}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ educationOrientation: expert?.educationOrientation })}>گرایش تحصیلی</SubTitle> : {expert?.educationOrientation}
            </Typography>
          </Space>
          <Space>
            <Typography size="14px" weight="bold">
              وضعیت اشتغال فعلی
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ workOrganizationType: expert?.workOrganizationType })}>نوع سازمان محل کار</SubTitle> :{" "}
              {expert?.workOrganizationType}
            </Typography>
            <Typography>
              <SubTitle>نام</SubTitle> : {expert?.workOrganizationName}
            </Typography>
            <Typography>
              <SubTitle>سمت</SubTitle> : {expert?.position}
            </Typography>
          </Space>
          <Space>
            <Typography size="14px" weight="bold">
              درباره کارشناس
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ googleScholar: expert?.googleScholar })}>لینک Google scholar</SubTitle> :{" "}
              {/* {expert?.workOrganizationType} */}
              <span>
                {expert?.googleScholar && (
                  <a href={expert?.googleScholar} target="_blank">
                    باز کردن لینک
                  </a>
                )}
              </span>
            </Typography>
            <Typography>
              <SubTitle>لینک ResearchGate</SubTitle> :{" "}
              <span>
                {expert?.researchGate && (
                  <a href={expert?.researchGate} target="_blank">
                    باز کردن لینک
                  </a>
                )}
              </span>
            </Typography>
            <Typography>
              <SubTitle>لینک دلخواه</SubTitle> :{" "}
              <span>
                {expert?.otherLink && (
                  <a href={expert?.otherLink} target="_blank">
                    باز کردن لینک
                  </a>
                )}
              </span>
            </Typography>
            <Typography>
              <SubTitle>توضیحات </SubTitle> : {expert?.aboutMe}
            </Typography>
          </Space>
        </ToggleText>
      </Content>
      <Content>
        <ToggleText title="راه های ارتباطی">
          <Space onClick={() => handleClick({ communicationWays: expert?.communicationWays })}>
            <TableList items={items} headerTitle={headerTitle} noPaginate />
          </Space>
        </ToggleText>
      </Content>
      <Content>
        <ToggleText title="اطلاعات تخصصی">
          <Space>
            <Typography size="14px"
             weight="bold"
             onClick={() => handleClick({ jobFiled: expert?.jobFiled })}
>
              حوزه فعالیت :
            </Typography>
            <Typography>
              {expert?.jobFiled?.map((item) => `${item}`)?.join("، ")}
            </Typography>
          </Space>
          <Space>
            <div style={{ marginTop: "1rem" }}>
              <Typography
                size="14px"
                weight="bold"
                onClick={() => handleClick({ expertise: expert?.expertise })}
              >
                تخصص های ویژه :
              </Typography>
              {parent?.map((item, index) => (
                <Typography key={index}>
                  <SubTitle>{item}</SubTitle> : {renderChild(item)}
                  {/* {renderChild(item?.name)} */}
                </Typography>
              ))}
              {expert?.otherExpertises && (
                <Typography>
                  <SubTitle>سایر تخصص ها : </SubTitle>
                  {expert?.otherProfessions}
                </Typography>
              )}
            </div>
          </Space>
          {/* <Space>
            <div style={{ marginTop: "1rem" }}>
              <Typography size="14px" weight="bold">
                سایر تخصص ها :
              </Typography>
              <Typography>{expert?.otherProfessions}</Typography>
            </div>
          </Space> */}
          <Space>
            <Typography size="14px" weight="bold"  onClick={() => handleClick({ profession: expert?.profession })}>
              حرفه ها :
            </Typography>
            {parentProfession?.map((item, index) => (
              <div key={index}>
                <Typography>
                  <SubTitle>{item}</SubTitle> : {renderProfession(item)}
                </Typography>
              </div>
            ))}
            {expert?.otherProfessions && (
              <Typography>
                <SubTitle>سایر تخصص ها : </SubTitle>
                {expert?.otherProfessions}
              </Typography>
            )}
          </Space>
          <Space>
            <Typography size="14px" weight="bold"  onClick={() => handleClick({ consultingField: expert?.consultingField })}>
              زمینه مشاوره :
            </Typography>
            <div style={{ margin: ".2rem 0" }}>
              <Typography>
                {expert?.consultingField?.map((item) => `${item}`)?.join("، ")}
              </Typography>
              <br />
              <Typography>
                <SubTitle onClick={() => handleClick({ farmingStatus: expert?.farmingStatus })}>
                  آیا علاوه بر کشاورزی به فعالیت کشاورزی نیز مشغول هستید؟{" "}
                </SubTitle>
                {checkAnswer(expert?.farmingStatus)}
              </Typography>
              <Typography>
                <SubTitle onClick={() => handleClick({ doesCollaborate: expert?.doesCollaborate })}>
                  آیا تمایل به انجام بازدید حضوری برای کشاورزان دارید؟{" "}
                </SubTitle>
                {checkAnswer(expert?.doesCollaborate)}
              </Typography>
              <Typography>
                <SubTitle onClick={() => handleClick({ hasVehicle: expert?.hasVehicle })}>برای انجام بازدید وسیله نقیله دارید ؟ </SubTitle>
                {checkAnswer(expert?.hasVehicle)}
              </Typography>
              <Typography>
                <SubTitle onClick={() => handleClick({ isMemberOfAgriculturalOrganization: expert?.isMemberOfAgriculturalOrganization })}>آیا عضو سازمان نظام مهندسی کشاورزی هستید؟ </SubTitle>
                {checkAnswer(expert?.isMemberOfAgriculturalOrganization)}
              </Typography>
              <Typography>
                <SubTitle onClick={() => handleClick({ engineeringSystemNumber: expert?.engineeringSystemNumber })}>شماره نظام مهندسی : </SubTitle>
                {expert?.engineeringSystemNumber}
              </Typography>
              <Typography>
                <SubTitle onClick={() => handleClick({ engineeringDetails: expert?.engineeringDetails })}>رتبه و گرایش در نظام مهندسی : </SubTitle>
                {expert?.engineeringDetails}
              </Typography>
            </div>
          </Space>
        </ToggleText>
      </Content>

      <Content>
        <ToggleText title="اطلاعات بانکی">
          <Space>
            <Typography>
              <SubTitle onClick={() => handleClick({ bankName: expert?.bankName })}>نام بانک</SubTitle> : {expert?.bankName}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ accountHolderName: expert?.accountHolderName })}>نام صاحب حساب</SubTitle> : {expert?.accountHolderName}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ accountNumber: expert?.accountNumber })}>شماره حساب</SubTitle> : {expert?.accountNumber}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ IbanNumber: expert?.IbanNumber })}>شماره شبا</SubTitle> : {expert?.IbanNumber}
            </Typography>
          </Space>
        </ToggleText>
      </Content>
      <Content>
        <ToggleText title="اطلاعات تکمیلی">
          <Space>
            <Typography onClick={() => handleClick({ avatarUrl: expert?.avatarUrl })}>
              <img
                src={expert?.avatarUrl}
                alt="user-image"
                width="200px"
                height="200px"
              />
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ username: expert?.username })}>نام کاربری</SubTitle> : {expert?.username}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ pageUrl: expert?.pageUrl })}>آدرس صفحه شخصی</SubTitle> :{" "}
              <a href={expert?.pageUrl} target="_blank">
                {expert?.pageUrl ? "مشاهده صفحه" : "موجود نیست"}
              </a>
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ wordpressAuthorId: expert?.wordpressAuthorId })}>ID نویسندگی وردپرس</SubTitle> :{" "}
              {expert?.wordpressAuthorId}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ lastDegreeUrl: expert?.lastDegreeUrl })}>اخرین مدرک تحصیلی</SubTitle> :{" "}
              <a href={expert?.lastDegreeUrl} target="_blank">
                {expert?.lastDegreeUrl ? "مشاهده فایل" : "بارگذاری نشده"}
              </a>
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ studentCardUrl: expert?.studentCardUrl })}>کارت دانشجویی</SubTitle> :{" "}
              <a href={expert?.studentCardUrl} target="_blank">
                {expert?.studentCardUrl ? "مشاهده فایل" : "بارگذاری نشده"}
              </a>
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ engineeringSystemCardUrl: expert?.engineeringSystemCardUrl })}>کارت نظان مهندسی</SubTitle> :{" "}
              <a href={expert?.engineeringSystemCardUrl} target="_blank">
                {expert?.engineeringSystemCardUrl
                  ? "مشاهده فایل"
                  : "بارگذاری نشده"}
              </a>
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ resumeUrl: expert?.resumeUrl })}>رزومه</SubTitle> :{" "}
              <a href={expert?.resumeUrl} target="_blank">
                {expert?.resumeUrl ? "مشاهده فایل" : "بازگذاری نشده"}
              </a>
            </Typography>
          </Space>
        </ToggleText>
      </Content>
      {isOpenArchiveQuestionModal && (
        <ArchiveRequestExpertDialog phoneNumber={phoneNumber} />
      )}

      {isOpenDetailRequestExpert && (
        <UpdateDetailRequestExpert expertInfo={expertInfo} />
      )}
      {isOpenExpertLevelBack && (
        <RejectExpertToLevelBack phoneNumber={expert?.phoneNumber} />
      )}
    </div>
  );
};

const Space = styled.div`
  margin: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpaceX = styled.div`
  margin: ${({ x }) => `0 ${x}`};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

const SubTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: gray;
`;

const Td = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 10px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
const Tr = styled.tr`
  background-color: ${({ theme }) => theme.backgroundSidebar};
`;

export default DetailRequestExpert;
