import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ContactTab } from "components/section/contact";
import { Title } from "components/shared";

const SectionContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 9;
  grid-row-end: 10;
  width: 90%;
  margin: 0 auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

type TQuery = {
  dataJson: {
    contact: {
      statement: string
      title: string
    }
  }
}

const Contact = () => {
  const data = useStaticQuery<TQuery>(graphql`
    {
      dataJson {
        contact {
          statement, title
        }
      }
    }
  `);

  return (
    <SectionContainer>
      <Title render={data.dataJson.contact.title} />
      <ContactTab render={data.dataJson.contact.statement} />
    </SectionContainer>
  );
};

export default Contact;