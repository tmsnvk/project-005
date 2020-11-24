import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ProjectCard } from "components/common/projects";
import { Title } from "components/shared";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 90%;
  margin: 5rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

type TComponent = {
  id: string;
}

const Portfolio = ({ id }: TComponent) => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        projects {
          list {
            demoLink
            description
            githubLink
            id
            image
            title
            subtitle
            tags
          }
          title
        }
      }
    }
  `);

  return (
    <ComponentContainer id={id}>
      <Title data={data.dataJson.projects.title} />
      <ProjectCard data={data.dataJson.projects.list} />
    </ComponentContainer>
  );
};

export default Portfolio;