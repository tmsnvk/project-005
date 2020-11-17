import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-row-start: 4;
  grid-row-end: 5;
`;

type ComponentType = {
  id: string
}

const Portfolio: FunctionComponent<ComponentType> = ({ id }) => {
  return (
    <ComponentContainer id={id}>
      
    </ComponentContainer>
  );
};

export default Portfolio;