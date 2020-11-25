import React from "react";
import styled from "styled-components";
import { TComponent } from "utilities/sharedTypes/sharedTypes";

const ComponentContainer = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    text-align: left;
    width: 40%;
    margin: 0 auto;
  }
`;

const Title = ({ data }: TComponent) => {  
  return (
    <ComponentContainer>
      {data}
    </ComponentContainer>
  );
};

export default Title;