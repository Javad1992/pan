import { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import ArchiveRequestExpertDialog from "../../../components/Dialog/ArchiveRequestExpertDialog";
import RejectExpertToLevelBack from "../../../components/Dialog/RejectExpertToLevelBack";
import Loading from "../../../components/Loading/Loading";
import ToggleText from "../../../components/ToggleText/ToggleText";
import Typography from "../../../components/Typography/Typography";
import TableList from "../../../core/Table";
import { HeaderTitle } from "../../../globalStyle";
import { userData } from "../../../help/userData";
import {
  confirmExpert,
  detailRequestExpert,
  rejectExpert,
} from "../../../redux/action/expertService";

import { editExpert } from "../../../redux/action/expert";
import {
  openArchiveQuestionModal,
  openExpertLevelBackModal,
  openUpdateRequestExpert,
} from "../../../redux/action/modal";
import UpdateDetailRequestExpert from "../../ExpertService/Dialog/UpdateDetailRequestExpert";

// icons
import { GiConfirmed } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

// editor man
import { EditorContainer } from "editorman";
import "editorman/dist/index.css";
import { detailExpertEducation } from "../../../redux/action/education";

const ExpertEducationManagementDetail = () => {
  const [edited, setEdited] = useState(null);
  const [modal, setModal] = useState(null);
  const [staticData, setStaticData] = useState(null);

  // console.log("edited", edited);

  const handleClick = (object) =>
    // console.log("editorman")
    setModal(
      <>
        {console.log("editorman")}
        {staticData && (
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
    "?????? ?????? ??????????????",
    "id, ?????????? ???? ????????",
    "?????????? ????????????",
  ];
  const userInformation = userData();
  const role = userInformation?.data?.result?.employee?.role;

  const { uid } = useParams();
  //   declare dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalSelector = useSelector((state) => state.modal);
  const {
    isOpenArchiveQuestionModal,
    isOpenDetailRequestExpert,
    isOpenExpertLevelBack,
  } = modalSelector;

  const expertSelector = useSelector((state) => state.education);

  const { expert } = expertSelector;

  useEffect(() => {
    if (edited !== null) {
      console.log(edited);
      let idOrPhoneNumber = edited instanceof FormData ? expert.uid : expert?.phoneNumber;
      dispatch(editExpert(edited, idOrPhoneNumber));
    }
  }, [edited]);

  const checkAnswer = (answer) => {
    if (answer === true) {
      return "??????";
    } else {
      return "??????";
    }
  };
  const filterParent = expert?.expertise?.map((item) => item?.parentName);
  const parent = [...new Set(filterParent)];

  const renderChild = (parent) => {
    const filterChild = expert?.expertise
      ?.filter((item) => item.parentName === parent)
      .map((item) => item?.name)
      ?.join("?? ");
    return filterChild;
  };

  const filteredProfession = expert?.profession?.map((item) => item.parentName);
  const parentProfession = [...new Set(filteredProfession)];

  console.log("parentProfession", parentProfession);

  const renderProfession = (profession) => {
    const filterChild = expert?.profession
      ?.filter((item) => item.parentName === profession)
      .map((item) => item?.name)
      ?.join("?? ");
    return filterChild;
  };

  const returnKey = (title) => {
    switch (title) {
      case "officialPhoneNumber":
        return "?????????? ???????? ????????";
      case "landingNumber":
        return "???????? ????????";
      default:
        return title;
    }
  };

  useEffect(() => {
    dispatch(detailExpertEducation(uid));
  }, [dispatch, uid]);

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
        <HeaderTitle>???????????? ?????????????? ?????????? ??????</HeaderTitle>
      </Wrapper>
      <Content>
        <ToggleText title="????????????????">
          <Space>
            <Typography size="14px" weight="bold">
              ?????????????? ????????
            </Typography>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ fullName: expert?.fullName })}
              >
                ?????? ?? ?????? ????????????????
              </SubTitle>{" "}
              : {expert?.fullName}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ eName: expert?.eName })}>
                ?????? ???? ??????????
              </SubTitle>{" "}
              : {`${expert?.eName}`}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({ eFamilyName: expert?.eFamilyName })
                }
              >
                ?????? ???????????????? ???? ??????????
              </SubTitle>{" "}
              : {expert?.eFamilyName}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ fatherName: expert?.fatherName })}
              >
                ?????? ??????
              </SubTitle>{" "}
              : {expert?.fatherName}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({ nationalCode: expert?.nationalCode })
                }
              >
                ???? ??????
              </SubTitle>{" "}
              : {expert?.nationalCode}
            </Typography>
          </Space>
          <Space>
            <Typography size="14px" weight="bold">
              ?????????? ????????????
            </Typography>
            <Typography>
              ???????????? ?????????? ????????{" "}
              <SubTitle
                onClick={() =>
                  handleClick({ expectedPage: expert?.expectedPage })
                }
              >
                {expert?.expectedPage}
              </SubTitle>{" "}
              ???? ??????????.
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ degree: expert?.degree })}>
                ???????? ????????????
              </SubTitle>{" "}
              : {expert?.degree}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ university: expert?.university })}
              >
                ??????????????
              </SubTitle>{" "}
              : {expert?.university}
            </Typography>
            <Typography>
              <SubTitle onClick={() => handleClick({ major: expert?.major })}>
                ????????
              </SubTitle>{" "}
              : {expert?.major}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({
                    educationOrientation: expert?.educationOrientation,
                  })
                }
              >
                ?????????? ????????????
              </SubTitle>{" "}
              : {expert?.educationOrientation}
            </Typography>
          </Space>
          <Space>
            <Typography size="14px" weight="bold">
              ?????????? ???????????? ????????
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({
                    workOrganizationType: expert?.workOrganizationType,
                  })
                }
              >
                ?????? ???????????? ?????? ??????
              </SubTitle>{" "}
              : {expert?.workOrganizationType}
            </Typography>
            <Typography>
              <SubTitle>??????</SubTitle> : {expert?.workOrganizationName}
            </Typography>
            <Typography>
              <SubTitle>??????</SubTitle> : {expert?.position}
            </Typography>
          </Space>
          <Space>
            <Typography size="14px" weight="bold">
              ???????????? ??????????????
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({ googleScholar: expert?.googleScholar })
                }
              >
                ???????? Google scholar
              </SubTitle>{" "}
              : {/* {expert?.workOrganizationType} */}
              <span>
                {expert?.googleScholar && (
                  <a href={expert?.googleScholar} target="_blank">
                    ?????? ???????? ????????
                  </a>
                )}
              </span>
            </Typography>
            <Typography>
              <SubTitle>???????? ResearchGate</SubTitle> :{" "}
              <span>
                {expert?.researchGate && (
                  <a href={expert?.researchGate} target="_blank">
                    ?????? ???????? ????????
                  </a>
                )}
              </span>
            </Typography>
            <Typography>
              <SubTitle>???????? ????????????</SubTitle> :{" "}
              <span>
                {expert?.otherLink && (
                  <a href={expert?.otherLink} target="_blank">
                    ?????? ???????? ????????
                  </a>
                )}
              </span>
            </Typography>
            <Typography>
              <SubTitle>?????????????? </SubTitle> : {expert?.aboutMe}
            </Typography>
          </Space>
        </ToggleText>
      </Content>
      <Content>
        <ToggleText title="?????? ?????? ??????????????">
          <Space
            onClick={() =>
              handleClick({ communicationWays: expert?.communicationWays })
            }
          >
            <TableList items={items} headerTitle={headerTitle} noPaginate />
          </Space>
        </ToggleText>
      </Content>
      <Content>
        <ToggleText title="?????????????? ??????????">
          <Space>
            <Typography
              size="14px"
              weight="bold"
              onClick={() => handleClick({ jobFiled: expert?.jobFiled })}
            >
              ???????? ???????????? :
            </Typography>
            <Typography>
              {expert?.jobFiled?.map((item) => `${item}`)?.join("?? ")}
            </Typography>
          </Space>
          <Space>
            <div style={{ marginTop: "1rem" }}>
              <Typography
                size="14px"
                weight="bold"
                onClick={() => handleClick({ expertise: expert?.expertise })}
              >
                ???????? ?????? ???????? :
              </Typography>
              {parent?.map((item, index) => (
                <Typography key={index}>
                  <SubTitle>{item}</SubTitle> : {renderChild(item)}
                  {/* {renderChild(item?.name)} */}
                </Typography>
              ))}
              {expert?.otherExpertises && (
                <Typography>
                  <SubTitle>???????? ???????? ???? : </SubTitle>
                  {expert?.otherProfessions}
                </Typography>
              )}
            </div>
          </Space>
          {/* <Space>
            <div style={{ marginTop: "1rem" }}>
              <Typography size="14px" weight="bold">
                ???????? ???????? ???? :
              </Typography>
              <Typography>{expert?.otherProfessions}</Typography>
            </div>
          </Space> */}
          <Space>
            <Typography
              size="14px"
              weight="bold"
              onClick={() => handleClick({ profession: expert?.profession })}
            >
              ???????? ???? :
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
                <SubTitle>???????? ???????? ???? : </SubTitle>
                {expert?.otherProfessions}
              </Typography>
            )}
          </Space>
          <Space>
            <Typography
              size="14px"
              weight="bold"
              onClick={() =>
                handleClick({ consultingField: expert?.consultingField })
              }
            >
              ?????????? ???????????? :
            </Typography>
            <div style={{ margin: ".2rem 0" }}>
              <Typography>
                {expert?.consultingField?.map((item) => `${item}`)?.join("?? ")}
              </Typography>
              <br />
              <Typography>
                <SubTitle
                  onClick={() =>
                    handleClick({ farmingStatus: expert?.farmingStatus })
                  }
                >
                  ?????? ?????????? ???? ?????????????? ???? ???????????? ?????????????? ?????? ?????????? ????????????{" "}
                </SubTitle>
                {checkAnswer(expert?.farmingStatus)}
              </Typography>
              <Typography>
                <SubTitle
                  onClick={() =>
                    handleClick({ doesCollaborate: expert?.doesCollaborate })
                  }
                >
                  ?????? ?????????? ???? ?????????? ???????????? ?????????? ???????? ???????????????? ????????????{" "}
                </SubTitle>
                {checkAnswer(expert?.doesCollaborate)}
              </Typography>
              <Typography>
                <SubTitle
                  onClick={() =>
                    handleClick({ hasVehicle: expert?.hasVehicle })
                  }
                >
                  ???????? ?????????? ???????????? ?????????? ?????????? ?????????? ??{" "}
                </SubTitle>
                {checkAnswer(expert?.hasVehicle)}
              </Typography>
              <Typography>
                <SubTitle
                  onClick={() =>
                    handleClick({
                      isMemberOfAgriculturalOrganization:
                        expert?.isMemberOfAgriculturalOrganization,
                    })
                  }
                >
                  ?????? ?????? ???????????? ???????? ???????????? ?????????????? ????????????{" "}
                </SubTitle>
                {checkAnswer(expert?.isMemberOfAgriculturalOrganization)}
              </Typography>
              <Typography>
                <SubTitle
                  onClick={() =>
                    handleClick({
                      engineeringSystemNumber: expert?.engineeringSystemNumber,
                    })
                  }
                >
                  ?????????? ???????? ???????????? :{" "}
                </SubTitle>
                {expert?.engineeringSystemNumber}
              </Typography>
              <Typography>
                <SubTitle
                  onClick={() =>
                    handleClick({
                      engineeringDetails: expert?.engineeringDetails,
                    })
                  }
                >
                  ???????? ?? ?????????? ???? ???????? ???????????? :{" "}
                </SubTitle>
                {expert?.engineeringDetails}
              </Typography>
            </div>
          </Space>
        </ToggleText>
      </Content>

      <Content>
        <ToggleText title="?????????????? ??????????">
          <Space>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ bankName: expert?.bankName })}
              >
                ?????? ????????
              </SubTitle>{" "}
              : {expert?.bankName}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({ accountHolderName: expert?.accountHolderName })
                }
              >
                ?????? ???????? ????????
              </SubTitle>{" "}
              : {expert?.accountHolderName}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({ accountNumber: expert?.accountNumber })
                }
              >
                ?????????? ????????
              </SubTitle>{" "}
              : {expert?.accountNumber}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ IbanNumber: expert?.IbanNumber })}
              >
                ?????????? ??????
              </SubTitle>{" "}
              : {expert?.IbanNumber}
            </Typography>
          </Space>
        </ToggleText>
      </Content>
      <Content>
        <ToggleText title="?????????????? ????????????">
          <Space>
            <Typography
              onClick={() => handleClick({ avatarUrl: expert?.avatarUrl })}
            >
              <img
                src={expert?.avatarUrl}
                alt="user-image"
                width="200px"
                height="200px"
              />
            </Typography>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ username: expert?.username })}
              >
                ?????? ????????????
              </SubTitle>{" "}
              : {expert?.username}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ pageUrl: expert?.pageUrl })}
              >
                ???????? ???????? ????????
              </SubTitle>{" "}
              :{" "}
              <a href={expert?.pageUrl} target="_blank">
                {expert?.pageUrl ? "???????????? ????????" : "?????????? ????????"}
              </a>
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({ wordpressAuthorId: expert?.wordpressAuthorId })
                }
              >
                ID ???????????????? ????????????
              </SubTitle>{" "}
              : {expert?.wordpressAuthorId}
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({ lastDegreeUrl: expert?.lastDegreeUrl })
                }
              >
                ?????????? ???????? ????????????
              </SubTitle>{" "}
              :{" "}
              <a href={expert?.lastDegreeUrl} target="_blank">
                {expert?.lastDegreeUrl ? "???????????? ????????" : "???????????????? ????????"}
              </a>
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({ studentCardUrl: expert?.studentCardUrl })
                }
              >
                ???????? ????????????????
              </SubTitle>{" "}
              :{" "}
              <a href={expert?.studentCardUrl} target="_blank">
                {expert?.studentCardUrl ? "???????????? ????????" : "???????????????? ????????"}
              </a>
            </Typography>
            <Typography>
              <SubTitle
                onClick={() =>
                  handleClick({
                    engineeringSystemCardUrl: expert?.engineeringSystemCardUrl,
                  })
                }
              >
                ???????? ???????? ????????????
              </SubTitle>{" "}
              :{" "}
              <a href={expert?.engineeringSystemCardUrl} target="_blank">
                {expert?.engineeringSystemCardUrl
                  ? "???????????? ????????"
                  : "???????????????? ????????"}
              </a>
            </Typography>
            <Typography>
              <SubTitle
                onClick={() => handleClick({ resumeUrl: expert?.resumeUrl })}
              >
                ??????????
              </SubTitle>{" "}
              :{" "}
              <a href={expert?.resumeUrl} target="_blank">
                {expert?.resumeUrl ? "???????????? ????????" : "???????????????? ????????"}
              </a>
            </Typography>
          </Space>
          <Space>
            <Typography>
              <span style={{ color: "red" }}>*</span> ?????????????? ?????????????? ??????
              ?????????????? ?????? ???? ???????????? ???????????? ???????????????? ?? ?????????????????? ???? ???????????? ???????? ??
              ???? ???????????? ?? ???????????? ???? ?????????? ????????.
            </Typography>
          </Space>
        </ToggleText>
      </Content>
      {/* {isOpenArchiveQuestionModal && (
        <ArchiveRequestExpertDialog phoneNumber={phoneNumber} />
      )} */}

      {isOpenDetailRequestExpert && (
        <UpdateDetailRequestExpert expertInfo={expertInfo} />
      )}
      {/* {isOpenExpertLevelBack && (
        <RejectExpertToLevelBack phoneNumber={expert?.phoneNumber} />
      )} */}
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

export default ExpertEducationManagementDetail;
