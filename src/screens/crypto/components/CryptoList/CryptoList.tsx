import React from "react";
import styled from "styled-components";

import { cryptos } from "data";
import media from "styled-media-query";

const CryptoList = ({ expanded }: { expanded: boolean }) => {
  return (
    <Root>
      {cryptos
        .slice(0, expanded ? cryptos.length : 10)
        .map(({ icon, name, shortname }, i) => (
          <Crypto key={shortname}>
            <CryptoIcon src={icon} alt={name} />
            <CryptoNameContainer>
              <CryptoShortName>{shortname}</CryptoShortName>
              <CryptoFullName>{name}</CryptoFullName>
            </CryptoNameContainer>
          </Crypto>
        ))}
      {expanded && <CryptoPlaceholder>And many others</CryptoPlaceholder>}
    </Root>
  );
};

const Root = styled.ul`
  all: unset;
  display: grid;
  column-gap: 20px;
  row-gap: 21px;
  margin-bottom: 2.5rem;

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%/2, max(9rem, 100%/5)), 1fr)
  );

  ${media.greaterThan("large")`
    row-gap: 16px;
    column-gap: 5px;
    margin-left: -15px;
    margin-top: -15.5px;
  `}
`;

const Crypto = styled.li`
  all: unset;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  max-width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayExtraLight};
  }

  ${media.greaterThan("large")`
    padding: 15.5px 15px;
  `}
`;

const CryptoIcon = styled.img`
  height: 40px;
  aspect-ratio: 1 / 1;

  ${media.greaterThan("large")`
     height: 30px;
    
  `}
`;

const CryptoNameContainer = styled.div`
  ${media.greaterThan("large")`
     display: flex;
     gap: 0.5rem;
    
  `}
`;

const CryptoShortName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const CryptoFullName = styled.span`
  font: ${({ theme }) => theme.variants.body5};
  color: ${({ theme }) => theme.colors.secondaryHoverText};

  ${media.greaterThan("large")`
       font: ${({ theme }) => theme.variants.body4};

    
  `}
`;

const CryptoPlaceholder = styled.li`
  all: unset;
  max-height: 2.8rem;
  display: flex;
  justify-self: start;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.variants.secondaryActiveText};
  border: 1px dashed #9b9b9b;
  border-radius: 8px;
  padding: 6px 17px;

  font: ${({ theme }) => theme.variants.body7};

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.body3};
    margin: 15.5px;

    
    
  `}
`;

export default CryptoList;
