import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ProjectCard } from "components/section/portfolio";
import { Title } from "components/shared";
import { TList } from "utilities/sharedTypes/sharedTypes";

const SectionContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  width: 90%;
  margin: 0 auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

type TQuery = {
  dataJson: {
    projects: {
      list: Array<TList>;
      title: string;
    };
  };
}

const Portfolio = () => {
  const data = useStaticQuery<TQuery>(graphql`
    {
      dataJson {
        projects {
          list {
            description {
              id, paragraph
            }
            tags {
              id, name
            }
            demoLink, githubLink, id, image, title, subtitle
          }
          title
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <Title data={data.dataJson.projects.title} />
      <ProjectCard data={data.dataJson.projects.list} />
    </SectionContainer>
  );
};

export default Portfolio;