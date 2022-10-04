import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import { singInUser } from "../redux/action/auth";
import styled from "styled-components";
import bg from "../assets/images/log-in.png";
import Typography from "../components/Typography/Typography";
import Loading from "../components/Loading/Loading";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authSelector = useSelector((state) => state.auth);
  const { loading } = authSelector;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber,
      password,
    };
    dispatch(singInUser(data, navigate));
  };

  return (
    <LoginStyle>
      <Container>
        <Right>
          <Content>
            <Wrapper>
              <Typography size="24px" weight="bold" textAlign="center">
                وارد حساب خود شوید
              </Typography>
            </Wrapper>
            <Form autocomplete="off" onSubmit={handleSubmit}>
              <FormGroup>
                <InputField
                  type="text"
                  label="شماره تماس"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <InputField
                  type="password"
                  name="password"
                  label="رمز عبور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button type="submit">
                {loading ? <Loading /> : "ورود به داشبورد"}
              </Button>
            </Form>
          </Content>
        </Right>
        <Left>
          <img src={bg} alt="background" />
        </Left>
      </Container>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #DADADA;
  width: 100%;

  @media screen and (max-width : 400px) {
    width: 100%;
  }

  @media screen and (min-width : 401px) and (max-width : 576px) {
    width: 100%;
  }

  @media screen and (min-width : 577px) and (max-width : 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 80vh;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 500px;
  background-color: #dde6f8;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
  @media (max-width: 799px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media screen and (max-width : 400px) {
    width: 150%;
    border-radius: 10px;
  }
  @media screen and (min-width : 401px) and (max-width : 576px) {
    width: 100%;
    border-radius: 10px;
  }
  @media screen and (min-width : 577px) and (max-width : 768px) {
    width: 100%;
    border-radius: 10px;
  }

`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  @media screen and (max-width : 400px) {
    width: 100%;
  }
  @media screen and (min-width : 401px) and (max-width : 576px) {
    width: 100%;
  }
  @media screen and (min-width : 577px) and (max-width : 768px) {
    width: 100%;
  }
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #545e62;
    margin: 5px 0;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  padding: 2rem 0;

  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

export default LoginPage;
