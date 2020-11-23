import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge};
    text-align: left;
    margin: 0 0 0 10rem;
  }
`;

const DescriptionContainer = styled.div`

`;

const DescriptionParagraph = styled.div`
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
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
  margin: 0 0 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 12rem);

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin: 0 0 0 5rem;
    grid-template-columns: repeat(2, 20rem);
  }
`;

const TechListItem = styled.li`
  list-style: square;
`;

type TComponent = {
  data: {
    title: string;
    description: Array<TDescription>;
    techlist: Array<TTechList>;
  };
}

type TDescription = {
  id: number;
  paragraph: string;
}

type TTechList = {
  id: number;
  name: string;
}

const Description = ({ data }: TComponent) => {
  const renderDescription = data.description.map((element) => {
    return (
      <DescriptionParagraph key={element.id}>
        {element.paragraph}
      </DescriptionParagraph>
    );
  });

  const renderTechList = data.techlist.map((element) => {
    return (
      <TechListItem key={element.id}>
        {element.name}
      </TechListItem>
    );
  });

  return (
    <ComponentContainer>
      <Title>
        {data.title}
      </Title>
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