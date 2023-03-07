import React from "react";
import styled from "styled-components";

import { ReactComponent as GetItOnGooglePlayIcon } from "assets/icons/other/get-google-play.svg";
import { ReactComponent as GetItOnAppStoreIcon } from "assets/icons/other/get-app-store.svg";

import { ReactComponent as StarIcon } from "assets/icons/other/star.svg";
import appMobileIllustration from "assets/illustrations/app-mobile.webp";
import appDesktopIllustration from "assets/illustrations/app-desktop.webp";

import media from "styled-media-query";

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

      <MobileIllustration
        alt="mobile app illustration"
        src={appMobileIllustration}
        width={235}
      />

      <IllustrationContainer $maxWidth={51.25}>
        <DesktopIllustration
          alt="desktop app illustration"
          src={appDesktopIllustration}
        />
      </IllustrationContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: grid;
  text-align: center;

  ${media.greaterThan("large")`
    text-align: left;
    display: flex;
  align-items: end;
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

  max-width: 19rem;

  ${media.greaterThan("large")`
    text-align: left;
    min-width: 25rem;
  max-width: 28rem;

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
  gap: 1.5rem;
  margin-bottom: 5.75rem;

  ${media.greaterThan("large")`
    gap: 2rem;

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
  gap: 1rem;
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
`;

export default Hero;
