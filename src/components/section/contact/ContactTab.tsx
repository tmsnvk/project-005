import React from "react";
import styled from "styled-components";
import { StyledIcon } from "components/shared";
import { TComponent } from "utilities/sharedTypes/sharedTypes";
import analyticsStore from "utilities/store/analyticsStore";
import { trackClick } from "utilities/helpers/analytics";
import iconList from "utilities/iconList/iconList";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    text-align: left;
    margin: 2rem auto 0;
    width: 60%;
  }
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const ContactLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContactLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 5rem;
  height: 5rem;
  font-weight: 600;
  border: 0.2rem solid ${({ theme }) => theme.color.secondary};
  margin: 3rem 2.5rem 0 2.5rem;
  padding: 0 0.5rem 0 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.color.primaryLight};
    background-color: ${({ theme }) => theme.color.secondary};
    transition: 0.5s;
  }

  &:hover ${StyledIcon} {
    color: ${({ theme }) => theme.color.primaryLight};
    transition: 0.5s;
  }
`;

const ContactTab = ({ data }: TComponent) => {
  const source = analyticsStore((state) => state.source);

  const trackEmailClick = (): void => trackClick(`contact/email ${source}`, `contact/email click ${source}`);
  const trackLinkedInClick = (): void => trackClick(`contact/linkedin ${source}`, `contact/linkedIn click ${source}`);

  return (
    <ComponentContainer>
      <Text>{data}</Text>
      <ContactLinkContainer>
        <ContactLink href="mailto:contact@tamasnovak.net" onClick={trackEmailClick}>
          <StyledIcon icon={iconList.email} dimensions="large"></StyledIcon>
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/tamasnvk/" target="_blank" rel="noopener noreferrer" onClick={trackLinkedInClick}>
          <StyledIcon icon={iconList.linkedIn} dimensions="large"></StyledIcon>
        </ContactLink>
      </ContactLinkContainer>
    </ComponentContainer>
  );
};

export default ContactTab;