import React from "react";
import styled from "styled-components";
import { StyledIcon } from "components/shared";
import iconList from "utilities/iconList";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const CardContainer = styled.div`
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.primaryDark};
  margin: 3rem 2rem 0 2rem;
  border-radius: 0.5rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
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
  padding: 1rem 0 0 2.5rem;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
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
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 1rem 2.5rem 1rem 2.5rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  text-transform: uppercase;
  border: 0.2rem solid ${({ theme }) => theme.color.secondary};
  margin: 1rem 0 2rem 2.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.5rem;


  &:hover {
    color: ${({ theme }) => theme.color.primaryLight};
    background-color: ${({ theme }) => theme.color.secondary};
  }

  &:hover ${StyledIcon} {
    color: ${({ theme }) => theme.color.primaryLight};
  }
`;

type TComponent = {
  data: Array<TList>;
}

type TList = {
  demoLink: string;
  description: string;
  githubLink: string;
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
        {element.image !== "" ? <ImageContainer><Image src={element.image} /></ImageContainer> : null}
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
        <LinkContainer>
          <ProjectLink href={element.githubLink}><StyledIcon icon={iconList.github}></StyledIcon>Github</ProjectLink>
          {element.demoLink !== "" ? <ProjectLink href={element.demoLink}><StyledIcon icon={iconList.live}></StyledIcon>View Live</ProjectLink> : null}
        </LinkContainer>
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