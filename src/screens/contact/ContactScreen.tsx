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
      <Root id="contact-us">
        <Content>
          {!isDesktop && <Title>Contact us</Title>}
          <MembersList />

          <Wrapper>
            <Header>
              {isDesktop && <Title>Contact us</Title>}
              <Subtitle>Use this form to reach out to us</Subtitle>
            </Header>
            <ContactForm />
          </Wrapper>
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

const Wrapper = styled.div`
  display: grid;

  flex-grow: 1;
  max-width: 480px;
`;

const Header = styled.header`
  justify-self: center;

  ${media.greaterThan("large")`
    margin-bottom: 20px;
    justify-self: start;
  `}
`;

const Content = styled.div`
  display: grid;

  ${media.greaterThan("large")`
    gap: 6.5rem;
    display: flex;
    
  `}
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title9};
  margin-bottom: 2rem;
  order: -2;

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title2};
    margin-bottom: 20px;
    order: 1;
  `}
`;

const Subtitle = styled.p`
  font: ${({ theme }) => theme.variants.body5};
  color: #9b9b9b;
  margin-bottom: 20px;
  margin-top: 25px;

  ${media.greaterThan("large")`
    margin: 0;
    font: ${({ theme }) => theme.variants.body4};
  `}
`;

export default ContactScreen;
