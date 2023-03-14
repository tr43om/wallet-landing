import React from "react";
import styled from "styled-components";

import { ReactComponent as GetItOnGooglePlayIcon } from "assets/icons/other/get-google-play.svg";
import { ReactComponent as GetItOnAppStoreIcon } from "assets/icons/other/get-app-store.svg";

import { ReactComponent as StarIcon } from "assets/icons/other/star.svg";
import appMobileIllustration from "assets/illustrations/app-mobile.webp";
import appDesktopIllustration from "assets/illustrations/app-desktop.webp";
import appDesktopFallback from "assets/photos/fallback/app-desktop@fallback.png";
import appDesktopRetina from "assets/photos/@2x/app-desktop@2x.png";

import media from "styled-media-query";
import { ResponsiveImage } from "components";

const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>
          All operations <br /> in a Single Wallet
        </Title>
        <Description>
          The PayPay Wallet is a safe place for the trader’s portfolio: store
          your crypto & fiat funds to track profits and other activities.
        </Description>
        <CTAContainer>
          <ButtonContainer>
            <a href="#">
              <StyledGetItOnGooglePlayIcon />
            </a>
            <Stat>
              <RatingStat>
                <p>4.6</p>
                <StarIcon />
              </RatingStat>
              <ReviewStat>78 reviews</ReviewStat>
            </Stat>
          </ButtonContainer>

          <ButtonContainer>
            <a href="#">
              <StyledGetItOnAppStoreIcon />
            </a>
            <Stat>
              <RatingStat>
                <p>4.6</p>
                <StarIcon />
              </RatingStat>
              <ReviewStat>80 reviews</ReviewStat>
            </Stat>
          </ButtonContainer>
        </CTAContainer>
      </Content>

      <StyledResponsiveImage
        fallback={appDesktopFallback}
        mobile={appMobileIllustration}
        desktop={[appDesktopIllustration, appDesktopRetina]}
        alt="hero illustration"
      />
    </HeroContainer>
  );
};

const StyledResponsiveImage = styled(ResponsiveImage)`
  max-width: 235px;
  margin-bottom: -5px;

  ${media.greaterThan("large")`
    max-width: 100%;
    margin-bottom: 0px;
    padding-left: 62px;
    padding-top: 22px;
  `}
`;

const HeroContainer = styled.div`
  display: grid;
  text-align: center;

  ${media.greaterThan("large")`
    text-align: left;
    display: flex;
    gap: 8px;
    align-items: center;
    padding-bottom: 7.75rem;
  `}
`;
const Title = styled.h1`
  font: ${({ theme }) => theme.variants.title8};
  margin-bottom: 1.5rem;

  ${media.greaterThan("large")`
      font: ${({ theme }) => theme.variants.title1};

  `}
`;

const Content = styled.div`
  margin: 0 auto;

  max-width: 21rem;

  ${media.greaterThan("large")`
    margin: 0;
    text-align: left;
    min-width: 25rem;
    max-width: 30rem;

  `}
`;

const Description = styled.p`
  margin-bottom: 2rem;

  ${media.greaterThan("large")`
    margin-bottom: 3.75rem;


  `}
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 85px;

  ${media.greaterThan("large")`
    gap: 2rem;
    padding-bottom: 0px;
  justify-content: start;


  `}
`;

const StyledGetItOnGooglePlayIcon = styled(GetItOnGooglePlayIcon)`
  cursor: pointer;
`;

const StyledGetItOnAppStoreIcon = styled(GetItOnAppStoreIcon)`
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: grid;
`;

const Stat = styled.div`
  display: none;
  ${media.greaterThan("large")`
    display: flex;
  align-items: center;

    justify-content: space-between;
      


  `}
`;
const RatingStat = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font: ${({ theme }) => theme.variants.title7};
`;
const ReviewStat = styled.div`
  font: ${({ theme }) => theme.variants.body5};
`;

const MobileIllustration = styled.img`
  margin: 0 auto;
  padding-top: 90px;
  ${media.greaterThan("large")`
    display: none;

  `}
`;
const DesktopIllustration = styled.img`
  display: none;

  ${media.greaterThan("large")`
    display: flex;
    max-width: 100%;
    height: auto;
    width: auto;

  `}
`;

const IllustrationContainer = styled.div<{ $maxWidth: number }>`
  max-width: ${({ $maxWidth }) => `${$maxWidth}rem`};

  ${media.greaterThan("large")`
    margin-right: -28px;
    
  `}
`;

export default Hero;
