import React from "react";
import styled from "styled-components";
import { Container, ResponsiveImage } from "components";
import media from "styled-media-query";
import { LocationsList } from "./components";
import desktopMap from "assets/illustrations/desktop-map.webp";
import mobileMap from "assets/illustrations/mobile-map.webp";

const LocationScreen = () => {
  return (
    <Container>
      <Root>
        <Content>
          <Title>Where we are</Title>
          <LocationsList />
        </Content>

        <StyledResponsiveImage
          fallback={desktopMap}
          mobile={mobileMap}
          desktop={desktopMap}
          alt="where we are map"
        />
      </Root>
    </Container>
  );
};

const StyledResponsiveImage = styled(ResponsiveImage)`
  ${media.greaterThan("large")`
    flex-basis: 50%;
     margin-top: -65px;
  `}
`;

const Root = styled.div`
  display: grid;
  gap: 3rem;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  position: relative;
  margin-bottom: 3.4rem;

  & > picture {
    flex-basis: 50%;
  }

  ${media.greaterThan("medium")`
    margin: 0;
    display: flex;
    margin-bottom: 10rem;
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
