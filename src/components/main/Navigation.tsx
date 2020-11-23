import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ComponentContainer = styled.nav`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
	width: 100%;
	position: fixed;
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
  border-bottom: 0.3rem solid ${({ theme }) => theme.color.alternate};
`;

const SectionLinkContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const NavLink = styled(Link)`
  padding: 1rem 0.5rem 1rem 0.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;

  &:hover {
    color: ${({ theme }) => theme.color.alternate};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 1rem 1rem 1rem 1rem;
  }
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