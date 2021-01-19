import React from "react";
import styled from "styled-components";
import { StyledIcon } from "components/shared";
import { TList } from "utilities/sharedTypes/sharedTypes";
import analyticsStore from "utilities/store/analyticsStore";
import { trackClick } from "utilities/helpers/analytics";
import iconList from "utilities/iconList/iconList";

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
  margin: 3rem 2rem 0 2rem;
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.primaryDark};
  border-radius: 0.5rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    max-width: 45%;
  }
`;

const Image = styled.img`
  width: 90%;
  display: block;
  margin: 2rem auto 1rem;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;
  padding: 1rem 0 0 2.5rem;
`;

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
  padding: 0 0 0 2.5rem;
`;

const ProjectLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  text-transform: uppercase;
  border: 0.2rem solid ${({ theme }) => theme.color.secondary};
  margin: 2.5rem 0 2.5rem 2.5rem;
  padding: 0.5rem 1.5rem 0.5rem 0;
  border-radius: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.color.primaryLight};
    background-color: ${({ theme }) => theme.color.secondary};
    transition: 0.5s;
  }

  &:hover ${StyledIcon} {
    color: ${({ theme }) => theme.color.primaryLight};
    transition: 0.5s;
  }
`;

const TagContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 0 0 0 2.5rem;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 1rem 1.5rem 5rem 1.5rem;

  &:first-of-type {
    padding: 1rem 1.5rem 0 1.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 1rem 2.5rem 5rem 5rem;

    &:first-of-type {
      padding: 1rem 2.5rem 0 5rem;
    }
  }
`;

type TComponent = {
  render: Array<TList>;
}

const ProjectCard = ({ render }: TComponent) => {
  const source = analyticsStore((state) => state.source);

  const renderProjectCard = render.map(({ demoLink, description, githubLink, id, image, subtitle, tags, title }) => {
    const trackGitClick = (): void => trackClick(`${githubLink} ${source}`, `github click ${source}`);
    const trackDemoClick = (): void => trackClick(`${demoLink} ${source}`, `live click ${source}`);

    return (
      <CardContainer key={id}>
        {image !== "" ? <Image src={image} alt="sample project image" /> : null}
        <Title>
          {title}
        </Title>
        <SubTitle>
          {subtitle}
        </SubTitle>
        <ProjectLinkContainer>
          {githubLink !== "" ? <ProjectLink href={githubLink} target="_blank" rel="noopener noreferrer" onClick={trackGitClick}><StyledIcon icon={iconList.github} dimensions="normal"></StyledIcon>Github</ProjectLink> : null}
          {demoLink !== "" ? <ProjectLink href={demoLink} target="_blank" rel="noopener noreferrer" onClick={trackDemoClick}><StyledIcon icon={iconList.live} dimensions="normal"></StyledIcon>Live</ProjectLink> : null}
        </ProjectLinkContainer>
        <TagContainer>
          {tags[0]?.name ? <Tag key={tags[0].id}>{tags[0].name}</Tag> : null}
          {tags[1]?.name ? <Tag key={tags[1].id}>{tags[1].name}</Tag> : null}
          {tags[2]?.name ? <Tag key={tags[2].id}>{tags[2].name}</Tag> : null}
          {tags[3]?.name ? <Tag key={tags[3].id}>{tags[3].name}</Tag> : null}
        </TagContainer>
        <Description key={description[0].id}>
          {description[0].paragraph}
        </Description>
        <Description key={description[1].id}>
          {description[1].paragraph}
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