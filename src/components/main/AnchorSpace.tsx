import React from "react";
import styled from "styled-components";

type TStyled = {
  rowstart: number;
  rowend: number;
}

const ComponentContainer = styled.div<TStyled>`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: ${props => props.rowstart};
  grid-row-end: ${props => props.rowend};
  height: 5rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

type TComponent = {
  id: string;
  rowstart: number;
  rowend: number;
}

const AnchorSpace = ({ id, rowstart, rowend }: TComponent)=> {  
  return (
    <ComponentContainer id={id} rowstart={rowstart} rowend={rowend}></ComponentContainer>
  );
};

export default AnchorSpace;