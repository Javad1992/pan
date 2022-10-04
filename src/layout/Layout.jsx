import React from "react";
// components
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import DarkMode from "../components/DarkMode/DarkMode";
// custome hooks
import { useDarkMode } from "../hooks/useDarkmode";
// styled components module
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme/theme";
import { GlobalStyles } from "../theme/GlobalStyle";

const Layout = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <LayoutStyle>
        <Sidebar />
        <DarkMode theme={theme} themeToggler={themeToggler} />
        <Container>
          <Header />
          <Main>{children}</Main>
        </Container>
      </LayoutStyle>
    </ThemeProvider>
  );
};

const LayoutStyle = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: 0.4s all ease-in-out;
`;

const Main = styled.div`
  /* width: 100%; */
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

export default Layout;
