import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import { Navigation } from "./components";
import { Hero } from "./components";
import media from "styled-media-query";

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
  padding-top: 16px;

  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryWhite};

  ${media.greaterThan("large")`
    padding-top: 25px;
  `}
`;

export default WelcomeScreen;
