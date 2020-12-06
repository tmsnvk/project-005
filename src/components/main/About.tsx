import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Description } from "components/section/about";
import { Title } from "components/shared";
import { TDescription, TTechList } from "utilities/sharedTypes/sharedTypes";

const SectionContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 90%;
  margin: 0 auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

type TQuery = {
  dataJson: {
    about: {
      description: Array<TDescription>;
      techlist: Array<TTechList>;
      title: string;
    };
  };
}

const About = () => {
  const data = useStaticQuery<TQuery>(graphql`
    {
      dataJson {
        about {
          description {
            id, paragraph
          }
          techlist {
            id, name
          }
          title
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <Title data={data.dataJson.about.title} />
      <Description data={data.dataJson.about} />
    </SectionContainer>
  );
};

export default About;