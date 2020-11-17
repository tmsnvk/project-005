import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ComponentContainer = styled.section`
  grid-row-start: 5;
  grid-row-end: 6;
`;

type ComponentType = {
  id: string
}

const Contact: FunctionComponent<ComponentType> = ({ id }) => {
  return (
    <ComponentContainer id={id}>
      
    </ComponentContainer>
  );
};

export default Contact;