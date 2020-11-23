import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { SubTitle, Title } from "components/common/header";

const ComponentContainer = styled.header`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin: 15rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 60%;
  }
`;

type TQuery = {
  dataJson: {
    header: {
      subtitle: string;
      title: string;
    };
  };
}

const Header = () => {
  const data = useStaticQuery<TQuery>(graphql`
    {
      dataJson {
        header {
          subtitle
          title
        }
      }
    }
  `);

  return (
    <ComponentContainer>
      <Title data={data.dataJson.header.title} />
      <SubTitle data={data.dataJson.header.subtitle} />
    </ComponentContainer>
  );
};

export default Header;