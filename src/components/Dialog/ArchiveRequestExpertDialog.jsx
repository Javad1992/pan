import { useState } from "react";
import { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  addedToArchive,
  removeFromArchive,
} from "../../redux/action/expertService";
import { closeArchiveQuestionModal } from "../../redux/action/modal";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Loading from "../Loading/Loading";

const ArchiveRequestExpertDialog = ({ phoneNumber, removeArchive, title }) => {
  const [archiveDescription, setArchiveDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const expertServiceSelector = useSelector((state) => state.expertService);
  const { addArchiveLoading, removeLoading } = expertServiceSelector;

  const handleSubmit = () => {
    if (removeArchive) {
      dispatch(
        removeFromArchive(phoneNumber, { archiveDescription: "" }, navigate)
      );
    } else {
      dispatch(addedToArchive(phoneNumber, { archiveDescription }, navigate));
    }
  };

  return (
    <Fragment>
      <Modal>
        <ModalContent>
          <ModalHeader>
            <AiOutlineClose
              size={20}
              onClick={() => dispatch(closeArchiveQuestionModal())}
            />
            <Title>{title ? title : "اضافه کردن کامنت"}</Title>
          </ModalHeader>
          {/* <FormGroup>
            <Label>نوع بایگانی</Label>
            <Select onChange={(e) => setStatus(e.target.value)}>
              {archiveData.map((item, index) => (
                <Option key={index} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </FormGroup> */}

          <InputField
            type="text"
            label="توضیحات"
            name="archiveDescription"
            value={archiveDescription}
            onChange={(e) => setArchiveDescription(e.target.value)}
          />

          <Wrapper>
            {removeArchive ? (
              <Button small onClick={handleSubmit} weight="bold">
                {removeLoading ? <Loading /> : "تایید"}
              </Button>
            ) : (
              <Button small onClick={handleSubmit} weight="bold">
                {addArchiveLoading ? <Loading /> : "تایید"}
              </Button>
            )}
            <Button
              small
              space={true}
              onClick={() => dispatch(closeArchiveQuestionModal())}
              weight="bold"
            >
              منصرف شدم
            </Button>
          </Wrapper>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

const Modal = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.backgroundSidebar};
  /* overflow-y: scroll; */
  border-radius: 5px;
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 40%; /* Could be more or less, depending on screen size */

  @media (max-width: 850px) {
    width: 60%;
  }
  @media (max-width: 599px) {
    width: 80%;
  }
  @media (max-width: 499px) {
    width: 90%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    color: #6980ff;
    cursor: pointer;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.h4`
  text-align: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: #565c63;
`;

const Select = styled.select`
  padding: 0.4rem 0.3rem;
  color: #565c63;
  font-size: 14px;
  border: 1px solid #c8cccf;
  border-radius: 5px;
  outline: none;
  font-family: "IRAN";
`;

const Option = styled.option``;

export default ArchiveRequestExpertDialog;
