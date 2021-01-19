import React from "react";
import styled from "styled-components";
import { TComponent } from "utilities/sharedTypes/sharedTypes";

const ComponentContainer = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  margin: 2rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    text-align: left;
    margin: 2rem auto 0;
    width: 60%;
  }
`;

const Statement = ({ render }: TComponent) => {  
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default Statement;