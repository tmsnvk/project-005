import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Description } from "components/common/about";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  width: 90%;
  margin: 5rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 60%;
  }
`;

type TComponent = {
  id: string;
}

type TQuery = {
  dataJson: {
    header: {
      subtitle: string;
      title: string;
      about: {
        description: Array<TDescription>;
        title: string;
        techlist: Array<TTechList>;
      };
    };
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

const About = ({ id }: TComponent) => {
  const data = useStaticQuery<TQuery>(graphql`
    {
      dataJson {
        header {
          subtitle
          title
          about {
            description {
              id
              paragraph
            }
            title
            techlist {
              id
              name
            }
          }
        }
      }
    }
  `);

  return (
    <ComponentContainer id={id}>
      <Description data={data.dataJson.header.about} />
    </ComponentContainer>
  );
};

export default About;