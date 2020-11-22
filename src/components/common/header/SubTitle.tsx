import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`

`;

type ComponentType = {
  data: string
}

const SubTitle: FunctionComponent<ComponentType> = ({ data }) => {  
  return (
    <ComponentContainer>
      <h1>{data}</h1>
    </ComponentContainer>
  );
};

export default SubTitle;