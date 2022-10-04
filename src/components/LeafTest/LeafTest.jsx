import React, { useState } from "react";
import { Content } from "../BasicQuestions/basicQuestionStyle";
import InputField from "../InputField/InputField";
import ToggleText from "../ToggleText/ToggleText";

// styled components
import styled from "styled-components";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { AddQuestionForm } from "../../redux/action/questionnaire";

const LeafTest = ({ leafTest, role }) => {
  const [form, setForm] = useState(leafTest);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    // console.log(e.target.value, e.target.name);
    const { value, name } = e.target;

    setForm(
      form?.map((item) => {
        if (name === item.questionCode) {
          return { ...item, answer: value };
        }
        return item;
      })
    );
  };

  const handleClick = () => {
    dispatch(AddQuestionForm({ leafTest: form }));
  };

  return (
    <Content>
      <ToggleText title="تست برگ">
        <div>
          {leafTest?.map((item) => (
            <Wrapper key={item?.questionCode}>
              {role === "Qsupport" ? (
                <>
                  <Typography>{item?.text?.replace("n", "")}</Typography>
                  <InputField
                    type="text"
                    name={item?.questionCode}
                    onChange={handleOnChange}
                  />
                </>
              ) : (
                <>
                  <Typography>
                    {item?.text?.replace("n", "")} : <span>{item?.answer}</span>{" "}
                  </Typography>
                </>
              )}
            </Wrapper>
          ))}
          {role === "Qsupport" ? (
            <Button color="#00D25B" small onClick={handleClick} weight="bold">
              تایید
            </Button>
          ) : null}
        </div>
      </ToggleText>
    </Content>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.border};
  }
`;

export default LeafTest;
