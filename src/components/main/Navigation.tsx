import React, { MouseEvent } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const ComponentContainer = styled.nav`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
	width: 100%;
	position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primaryLight};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.primaryDark};
  padding: 2rem 0 2rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    padding: 2rem 5rem 2rem 5rem;
  }
`;

const NameContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  border-bottom: 0.3rem solid ${({ theme }) => theme.color.secondary};
`;

const NameLink = styled(Link)`
  letter-spacing: 0.1rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
`;

const SectionLinkContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const SectionLink = styled(Link)`
  font-weight: 600;
  letter-spacing: 0.1rem;
  padding: 1rem 0.5rem 1rem 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 1rem 2rem 1rem 2rem;
  }
`;

type TComponent = {
  onClick?(): MouseEvent<JSX.Element>;
}

const Navigation = ({}: TComponent) => {
  const trackClick = (): void => {
    trackCustomEvent({
      category: "navigation link", 
      action: "click"
    });
  };

  return (
    <ComponentContainer>
      <NameContainer>
        <NameLink to="/">tamas novak</NameLink>
      </NameContainer>
      <SectionLinkContainer>
        <SectionLink to="/#about" onClick={trackClick}>About</SectionLink>
        <SectionLink to="/#portfolio" onClick={trackClick}>Portfolio</SectionLink>
        <SectionLink to="/#contact" onClick={trackClick}>Contact</SectionLink>
      </SectionLinkContainer>
    </ComponentContainer>
  );
};

export default Navigation;