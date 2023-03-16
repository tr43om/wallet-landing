import React from "react";
import styled from "styled-components";

import mapDesktop2x from "assets/photos/@2x/map@2x.webp";
import mapDesktopDefault from "assets/photos/default/map@default.webp";

import mapMobileFallback from "assets/photos/fallback/map-mobile@fallback.png";
import mapMobile2x from "assets/photos/@2x/map-mobile@2x.webp";
import mapMobileDefault from "assets/photos/default/map-mobile@default.webp";

import { ResponsiveImage } from "components";
import media from "styled-media-query";

const Map = () => {
  return (
    <Root>
      <StyledResponsiveImage
        fallback={mapMobileFallback}
        mobile={[mapMobileDefault, mapMobile2x]}
        desktop={[mapDesktopDefault, mapDesktop2x]}
        alt="where we are map"
      />
    </Root>
  );
};

const StyledResponsiveImage = styled(ResponsiveImage)``;
const Root = styled.div`
  display: flex;

  img {
    max-width: calc(100% + 48px);
    margin-left: -24px;
  }
  picture {
    position: relative;
    &::before {
      content: "";
      z-index: 10;

      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      aspect-ratio: 1/1;
      background: linear-gradient(
          90deg,
          #ffffff 0%,
          rgba(255, 255, 255, 0.26) 14%,
          rgba(255, 255, 255, 0) 49.42%,
          rgba(255, 255, 255, 0.25) 86.92%,
          #ffffff 100%
        ),
        linear-gradient(
          180deg,
          #ffffff 0%,
          rgba(255, 255, 255, 0.4) 16.08%,
          rgba(255, 255, 255, 0) 50.98%,
          rgba(255, 255, 255, 0.4) 84.31%,
          #ffffff 98.9%
        );
    }
    ${media.greaterThan("large")`
        margin-top: -65px;
        max-width: 100%;
    `}
  }
`;

export default Map;
