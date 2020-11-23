import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { SubTitle } from "components/common/header";
import { Title } from "components/shared";

const ComponentContainer = styled.header`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin: 15rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

type TQuery = {
  dataJson: {
    header: {
      introtext: string;
      title: string;
    };
  };
}

const Header = () => {
  const data = useStaticQuery<TQuery>(graphql`
    {
      dataJson {
        header {
          introtext
          title
        }
      }
    }
  `);

  return (
    <ComponentContainer>
      <Title data={data.dataJson.header.title} />
      <SubTitle data={data.dataJson.header.introtext} />
    </ComponentContainer>
  );
};

export default Header;