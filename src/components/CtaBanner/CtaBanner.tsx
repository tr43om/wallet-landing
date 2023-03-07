import React, { ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import media from "styled-media-query";
import kitten from "assets/illustrations/kitten.svg";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as ETHThread } from "assets/illustrations/eth-thread.svg";
import { ReactComponent as XLMThread } from "assets/illustrations/xlm-thread.svg";
import { SecondaryButton } from "components/ui";
import { Container } from "components/layout";

const ConditionalWrap = ({
  condition,
  wrap,
  children,
}: {
  condition: boolean;
  wrap: (children: ReactNode) => JSX.Element;
  children: JSX.Element;
}) => (condition ? wrap(children) : children);

const CtaBanner = () => {
  const { devices } = useTheme();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  return (
    <ConditionalWrap
      condition={isDesktop}
      wrap={(children) => <Container>{children}</Container>}
      children={
        <Root>
          <Content>
            <Title>Buy cryptocurrency now!</Title>
            <Description>
              Phasellus nam lacinia rhoncus id eget purus nulla er ultrices.
              Sapien dignissim dui, dignissim convalli nam lacinia er purus.
            </Description>
            {isDesktop && <SecondaryButton title="Buy cryptocurrency" />}
          </Content>
          <Illustration>
            <KittenImg src={kitten} alt="cute little kitty" />
            {isDesktop && (
              <>
                <StyledETHThread />
                <StyledXLMThread />
              </>
            )}
          </Illustration>
          {!isDesktop && <SecondaryButton title="Buy cryptocurrency" />}
        </Root>
      }
    />
  );
};

const Root = styled.section`
  overflow: hidden;
  position: relative;
  display: grid;
  justify-content: center;

  padding: 1.5rem;
  ${({ theme: { colors } }) => {
    return `
            color: ${colors.primaryWhite};
            background-color: ${colors.primaryDark};
        `;
  }}
  margin-bottom: 3.75rem;

  ${media.greaterThan("large")`
        justify-content: space-between;
        padding-inline: 3.5rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 4.5rem;
        margin-bottom: 6.4375rem;

  `}
`;

const Content = styled.div`
  max-width: 438px;
  padding-top: 3rem;
  flex-basis: 45%;
  z-index: 99;
  ${media.greaterThan("large")`
        padding-bottom: 3rem;
    `}
`;

const Title = styled.h3`
  font: ${({ theme }) => theme.variants.title9};
  margin-bottom: 1rem;

  ${media.greaterThan("large")`
  font: ${({ theme }) => theme.variants.title2};
  margin-bottom: 1.25rem;
        
    `}
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
`;

const Illustration = styled.div`
  flex-basis: 55%;
  position: relative;
  top: -3rem;
  width: 130%;

  ${media.greaterThan("medium")`
     right: 0;
     top: 0;
    
  `}
`;

const KittenImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;

const StyledETHThread = styled(ETHThread)`
  position: absolute;
  bottom: -2rem;
  right: 0.5rem;
`;
const StyledXLMThread = styled(XLMThread)`
  position: absolute;
  right: 27rem;
  top: 4rem;
  z-index: 1;
`;

export default CtaBanner;
