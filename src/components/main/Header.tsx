import React, { FunctionComponent } from "react";
import { graphql, StaticQuery } from 'gatsby'
import styled from "styled-components";
import Title from "../common/header/Title";

const ComponentContainer = styled.header`
  grid-row-start: 2;
  grid-row-end: 3;
`;

type ComponentType = {
  data : {
    title: string
    subtitle: string
  }
}

const Header: FunctionComponent<ComponentType> = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          dataheaderJson {
            subtitle
            title
          }
        }
      `}
      render={data => (
        <ComponentContainer>
          <Title data={data} />
        </ComponentContainer>
      )}
    />
  );
};

export default Header;