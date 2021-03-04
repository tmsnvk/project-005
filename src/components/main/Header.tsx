import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Statement } from "components/section/header";
import { Title } from "components/shared";

const SectionContainer = styled.header`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin: 10rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

type TQuery = {
  dataJson: {
    header: {
      statement: string
      title: string
    }
  }
}

const Header = () => {
  const data = useStaticQuery<TQuery>(graphql`
    {
      dataJson {
        header {
          statement, title
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <Title render={data.dataJson.header.title} />
      <Statement render={data.dataJson.header.statement} />
    </SectionContainer>
  );
};

export default Header;