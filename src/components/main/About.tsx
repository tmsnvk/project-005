import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Description } from "components/common/about";
import { Title } from "components/shared";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 5rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

type TComponent = {
  id: string;
}

const About = ({ id }: TComponent) => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        about {
          description {
            id
            paragraph
          }
          techlist {
            id
            name
          }
          title
        }
      }
    }
  `);

  return (
    <ComponentContainer id={id}>
      <Title data={data.dataJson.about.title} />
      <Description data={data.dataJson.about} />
    </ComponentContainer>
  );
};

export default About;