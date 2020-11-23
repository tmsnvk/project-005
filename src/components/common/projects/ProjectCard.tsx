import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const CardContainer = styled.div`
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.primaryDark};
  margin: 1rem 2rem 1rem 2rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    max-width: 45%;
  }
`;

const ImageContainer = styled.div`
  object-fit: cover;
`;

const Image = styled.img`
  width: 90%;
  display: block;
  margin: 2rem auto 1rem;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;
  padding: 0 0 0 2.5rem;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0 0 0 2.5rem;
`;

const TagContainer = styled.div`
  padding: 1rem 0 0 2.5rem;
`;

const Tags = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.small};
  display: inline-block;
  padding: 0.5rem 0 0 1.5rem;

  &:first-child {
    padding: 0.5rem 0 0 0;
  }
`;

const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.default};
  padding: 1rem 2.5rem 0 2.5rem;
`;


type TComponent = {
  data: Array<TList>;
}

type TList = {
  demolink: string;
  description: string;
  githublink: string;
  id: number;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
}

const ProjectCard = ({ data }: TComponent) => {
  const renderProjectCard = data.map((element) => {
    return (
      <CardContainer key={element.id}>
        <ImageContainer>
          <Image src={element.image} />
        </ImageContainer>
        <TitleContainer>
          <Title>
            {element.title}
          </Title>
          <SubTitle>
            {element.subtitle}
          </SubTitle>
        </TitleContainer>
        <TagContainer>
          {element.tags[0] ? <Tags>{element.tags[0]}</Tags> : null}
          {element.tags[1] ? <Tags>{element.tags[1]}</Tags> : null}
          {element.tags[2] ? <Tags>{element.tags[2]}</Tags> : null}
          {element.tags[3] ? <Tags>{element.tags[3]}</Tags> : null}
        </TagContainer>
          <Description>
            {element.description}
          </Description>
      </CardContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderProjectCard}
    </ComponentContainer>
  );
};

export default ProjectCard;