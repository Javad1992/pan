import React, { useEffect, useState } from "react";
import { AddQuestionForm } from "../../redux/action/questionnaire";
import { Content } from "../BasicQuestions/basicQuestionStyle";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import Typography from "../Typography/Typography";

// styled components
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ToggleText from "../ToggleText/ToggleText";

const SoilTest = ({ soilTest, role }) => {
  const [form, setForm] = useState(soilTest);
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
    dispatch(AddQuestionForm({ soilTest: form }));
  };

  useEffect(() => {
    if (soilTest) {
      setForm(soilTest);
    }
  }, [soilTest]);

  return (
    <Content>
      <ToggleText title="تست خاک">
        <div className="wrapper">
          {soilTest?.map((item) => (
            <Wrapper key={item?.questionCode}>
              {role === "Qsupport" ? (
                <>
                  <Typography>{item?.text?.replace("n", "")}</Typography>
                  <InputField
                    type={
                      item.type === 1
                        ? "number"
                        : item.type === 1
                        ? "text"
                        : "text"
                    }
                    name={item?.questionCode}
                    onChange={handleOnChange}
                    // value={form?.answer}
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

export default SoilTest;
