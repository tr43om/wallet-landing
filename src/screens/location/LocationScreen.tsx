import React from "react";
import styled from "styled-components";
import { Container } from "components";
import media from "styled-media-query";
import { LocationsList } from "./components";
import mapIllustration from "assets/illustrations/map.webp";

const LocationScreen = () => {
  return (
    <Container>
      <Root>
        <Content>
          <Title>Where we are</Title>
          <LocationsList />
        </Content>

        <IllustrationContainer>
          <Illustration src={mapIllustration} />
        </IllustrationContainer>
      </Root>
    </Container>
  );
};

const Root = styled.div`
  display: grid;
  gap: 3rem;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;

  ${media.greaterThan("medium")`
    margin: 0;
    display: flex;
    margin-bottom: 6.5rem;

  `}
`;

const Content = styled.div`
  flex-basis: 70%;

  ${media.greaterThan("large")`
    flex-basis: auto;
  `}
`;

const IllustrationContainer = styled.div``;

const Illustration = styled.img`
  max-width: 100%;
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title9};
  margin-bottom: 1.5rem;
  order: -2;

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title2};
    margin-bottom: 2.5rem;
    
  `}
`;

export default LocationScreen;
