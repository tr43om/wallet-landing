import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import { Navigation } from "./components";
import { Hero } from "./components";

const WelcomeScreen = () => {
  return (
    <Root>
      <Navigation />
      <Container>
        <Hero />
      </Container>
    </Root>
  );
};

const Root = styled.section`
  padding-top: 1.75rem;

  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export default WelcomeScreen;
