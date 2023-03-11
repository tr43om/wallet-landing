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
      <ResponsiveImage
        fallback={mapMobileFallback}
        mobile={[mapMobileDefault, mapMobile2x]}
        desktop={[mapDesktopDefault, mapDesktop2x]}
        alt="where we are map"
      />
    </Root>
  );
};

const Root = styled.div`
  display: flex;

  img {
    max-width: calc(100% + 48px);
    margin-left: -24px;
  }
  picture {
    ${media.greaterThan("large")`
        margin-top: -65px;
        max-width: 100%;
    `}
  }
`;

export default Map;
