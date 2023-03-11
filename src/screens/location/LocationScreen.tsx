import React from "react";
import styled from "styled-components";
import { Container, ResponsiveImage } from "components";
import media from "styled-media-query";
import { LocationsList, Map } from "./components";

const LocationScreen = () => {
  return (
    <Container>
      <Root>
        <Content>
          <Title>Where we are</Title>
          <LocationsList />
        </Content>

        <Map />
      </Root>
    </Container>
  );
};

const Root = styled.div`
  position: relative;
  display: grid;
  gap: 2.2rem;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2.2rem;
  position: relative;

  ${media.greaterThan("large")`
    gap: 3rem;
    margin: 0;
    display: flex;
    margin-bottom: 6.2rem;
    justify-content: space-between;
  `}
`;

const Content = styled.div`
  flex-basis: 70%;

  ${media.greaterThan("large")`
    flex-basis: 40%;
  `}
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
