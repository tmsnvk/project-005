import React from "react";
import styled from "styled-components";

const SectionContainer = styled.footer`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 10;
  grid-row-end: 11;
  margin: 10rem auto 2rem;
  font-size: ${({ theme }) => theme.fontSize.default};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const Footer = () => {
  return (
    <SectionContainer>
      tamas novak with &#x2764;, 2020
    </SectionContainer>
  );
};

export default Footer;