import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { MainLayout } from "components/layout";
import { Footer, Navigation } from "components/main";
import { Seo } from "components/shared";

const NotFoundTextContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  text-align: center;
  margin: 20rem auto 0;
  
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
`;

const ReturnLink = styled(Link)`
  color: ${({ theme }) => theme.color.secondary};

  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`;

const NotFound = () => {
  return (
    <MainLayout>
      <Seo title={"Page not found"} />
      <Navigation />
      <NotFoundTextContainer>
        <NotFoundText>
          The requested page does not exist.
        </NotFoundText>
        <NotFoundText>
          <ReturnLink to={"/"}>Return</ReturnLink> to the main page.
        </NotFoundText>
      </NotFoundTextContainer>
      <Footer />
    </MainLayout>
  );
};

export default NotFound;