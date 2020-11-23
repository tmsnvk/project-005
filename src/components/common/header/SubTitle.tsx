import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  margin: 2rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.large};
    text-align: left;
    margin: 2rem auto 0;
    width: 60%;
  }
`;

type TComponent = {
  data: string
}

const SubTitle = ({ data }: TComponent) => {  
  return (
    <ComponentContainer>
      {data}
    </ComponentContainer>
  );
};

export default SubTitle;