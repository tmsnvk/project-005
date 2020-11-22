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
  padding: 2rem 0 2rem 0;
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.primaryDark};
	width: 100%;
	position: fixed;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: 0.5s;
  }

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
  padding: 1rem 1rem 1rem 1rem;
  font-weight: bold;
  letter-spacing: 0.15rem;

  &:hover {
    color: ${({ theme }) => theme.color.alternate};
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