import { Container } from "components";
import React from "react";
import styled, { useTheme } from "styled-components";
import media from "styled-media-query";
import { MembersList } from "./components";
import { ContactForm } from "components/ContactForm";
import { useMediaQuery } from "react-responsive";

const ContactScreen = () => {
  const { devices } = useTheme();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  return (
    <Container>
      <Root>
        {!isDesktop && <Title>Contact us</Title>}
        <Content>
          <MembersList />
          <ContactForm />
        </Content>
      </Root>
    </Container>
  );
};

const Root = styled.div`
  margin-bottom: 3rem;

  ${media.greaterThan("large")`
    margin-bottom: 6.6875rem;
  `}
`;

const Content = styled.div`
  display: grid;
  gap: 3rem;
  ${media.greaterThan("large")`
    display: flex;
    justify-content: space-between;
  `}
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title9};
  margin-bottom: 2rem;
  order: -2;

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title2};
    margin-bottom: 1.25rem;
    
  `}
`;

export default ContactScreen;
