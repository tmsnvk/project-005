import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ComponentContainer = styled.nav`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  padding: 1rem 5rem 1rem 5rem;
`;

const NameContainer = styled.div`

`;

const SectionLinkContainer = styled.div`

`;

const NavLink = styled(Link)`
  padding: 1rem;
`;

const Navigation = () => {
  return (
    <ComponentContainer>
      <NameContainer>
        tamas novak
      </NameContainer>
      <SectionLinkContainer>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="/#portfolio">Portfolio</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
      </SectionLinkContainer>
    </ComponentContainer>
  );
};

export default Navigation;