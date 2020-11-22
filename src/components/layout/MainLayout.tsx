import React, { FunctionComponent } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../../../utilities/theme/theme";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-family: ${({ theme }) => theme.fontFamily.main};
    color: ${({ theme }) => theme.color.primaryDark};
    background-color: ${({ theme }) => theme.color.primaryLight};
    font-size: 62.5%;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 2em;
  row-gap: 2rem;
   
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MainLayout: FunctionComponent= ({ children }) => {
  return (
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <GlobalStyle />
          {children}
        </LayoutContainer>
      </ThemeProvider>
  );
};

export default MainLayout;