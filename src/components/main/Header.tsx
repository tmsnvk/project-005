import React, { FunctionComponent } from "react";
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import { SubTitle, Title } from "components/common/header";

const ComponentContainer = styled.header`
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin: 10rem 0 0 0;
`;

type DataType = {
  dataJson: {
    header: {
      title: string
      subtitle: string
    }
  }
}

const Header: FunctionComponent = () => {
  const data = useStaticQuery<DataType>(graphql`
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