import React from "react";
import styled from "styled-components";
import { TDescription, TTechList } from "utilities/sharedTypes/sharedTypes";

const ComponentContainer = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 60%;
    margin: 2rem auto 0;
  }
`;

const DescriptionContainer = styled.div`
  margin: 2rem 0 0 0;
`;

const DescriptionParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 1rem 0 1rem 0;

  &:last-child {
    font-weight: 600;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const TechListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 12rem);
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
  margin: 0 0 0 2rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    grid-template-columns: repeat(2, 20rem);
    font-size: ${({ theme }) => theme.fontSize.small};
    margin: 0 0 0 5rem;
  }
`;

const TechListItem = styled.li`
  list-style: square;
`;

type TComponent = {
  data: {
    description: Array<TDescription>;
    techlist: Array<TTechList>;
  };
}

const Description = ({ data }: TComponent) => {
  const renderDescription = data.description.map(({ id, paragraph }) => {
    return (
      <DescriptionParagraph key={id}>
        {paragraph}
      </DescriptionParagraph>
    );
  });

  const renderTechList = data.techlist.map(({ id, name }) => {
    return (
      <TechListItem key={id}>
        {name}
      </TechListItem>
    );
  });

  return (
    <ComponentContainer>
      <DescriptionContainer>
        {renderDescription}
      </DescriptionContainer>
      <TechListContainer>
        {renderTechList}
      </TechListContainer>
    </ComponentContainer>
  );
};

export default Description;