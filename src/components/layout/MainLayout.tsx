import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "utilities/theme/theme";
import GlobalStyle from "utilities/theme/GlobalStyle";

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 1em;
  row-gap: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

type TComponent = {
  children: ReactNode
}

const MainLayout = ({ children }: TComponent) => {
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