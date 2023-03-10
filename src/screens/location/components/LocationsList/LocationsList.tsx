import React from "react";
import { locations } from "data";
import styled from "styled-components";
import media from "styled-media-query";

import { ReactComponent as PinIcon } from "assets/icons/other/pin.svg";

const LocationsList = () => {
  return (
    <List>
      {locations.map((location, i) => (
        <Location key={i}>
          <TitleContainer>
            <StyledPinIcon />
            <Title>{location.city}</Title>
          </TitleContainer>

          <Address>{location.address}</Address>
        </Location>
      ))}
    </List>
  );
};

const List = styled.ul`
  all: unset;
  display: grid;
  gap: 2.4rem;
  margin-left: 15px;

  ${media.greaterThan("medium")`
    gap: 1.2rem;
    margin-left: 0;
    
  `}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  ${media.greaterThan("large")`
    gap: 0.3rem;
  `}
`;

const Location = styled.li`
  all: unset;
  cursor: pointer;

  & > ${TitleContainer} > svg > path {
    transition: all 0.3s;

    fill: ${({ theme }) => theme.colors.secondaryHoverText};
  }

  &:hover {
    & > ${TitleContainer} > svg > path {
      fill: ${({ theme }) => theme.colors.primaryBlue};
    }
  }
`;

const StyledPinIcon = styled(PinIcon)`
  height: 17px;
  width: 13px;
`;

const Title = styled.h3`
  font: ${({ theme }) => theme.variants.body6};
  margin-bottom: 0.5rem;

  ${media.greaterThan("large")`
  font: ${({ theme }) => theme.variants.title6};
    
  `}
`;

const Address = styled.p`
  font: ${({ theme }) => theme.variants.caption3};
  color: ${({ theme }) => theme.colors.secondaryHoverText};

  ${media.greaterThan("large")`
  font: ${({ theme }) => theme.variants.body4};
    
  `}
`;

export default LocationsList;
