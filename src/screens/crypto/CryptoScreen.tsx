import { Container } from "components";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { useTheme } from "styled-components";
import media from "styled-media-query";
import { CryptoList, ExpandButton } from "./components";

const CryptoScreen = () => {
  const { devices } = useTheme();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [expanded, setExpanded] = useState(isDesktop);

  const expandList = () => setExpanded((open) => !open);
  return (
    <Container>
      <Root>
        <Title>Cryptocurrencies that we operate</Title>
        <Description>
          Our team is increasing the number of cryptocurrency pairs
          on-a-regular-basis. Discover cryptocurrencies that we currently
          support, as well as which new cryptocurrencies will appear in our
          exchange module and trading terminal in the near future.
        </Description>

        <CryptoList expanded={expanded} />
        <ExpandButton toggle={expandList} expanded={expanded} />
      </Root>
    </Container>
  );
};

const Root = styled.section`
  margin-top: 4.375rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;

  ${media.greaterThan("large")`
  margin-top: 11.25rem;
  margin-bottom: 8.125rem;


    
  `}
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title9};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 1.5rem;

  ${media.greaterThan("large")`
  font: ${({ theme }) => theme.variants.title2};
  margin-bottom: 1.25rem;

    
  `}
`;

const Description = styled.p`
  font: ${({ theme }) => theme.variants.body5};
  color: ${({ theme }) => theme.colors.secondaryHoverText};
  margin-bottom: 2.5rem;
  max-width: 70rem;

  ${media.greaterThan("large")`
  margin-bottom: 3.75rem;

    
  `}
`;

export default CryptoScreen;
