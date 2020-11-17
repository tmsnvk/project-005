import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-row-start: 3;
  grid-row-end: 4;
`;

type ComponentType = {
  id: string
}

const About: FunctionComponent<ComponentType> = ({ id }) => {
  return (
    <ComponentContainer id={id}>
      
    </ComponentContainer>
  );
};

export default About;