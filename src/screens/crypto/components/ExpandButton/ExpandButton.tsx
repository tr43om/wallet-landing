import { SecondaryButton } from "components";
import React, { useState } from "react";
import { ReactComponent as ChevronIcon } from "assets/icons/other/chevron-top.svg";
import styled from "styled-components";
import media from "styled-media-query";

type ExpandButtonProps = {
  expanded: boolean;
  toggle: () => void;
};

const ExpandButton = ({ toggle, expanded }: ExpandButtonProps) => {
  return (
    <StyledSecondaryButton
      onClick={toggle}
      title="See all"
      iconEnd={<StyledChevronIcon $expanded={expanded} />}
    />
  );
};

const StyledSecondaryButton = styled(SecondaryButton)`
  ${media.greaterThan("medium")`
    align-self: flex-start;
  `}
  ${media.greaterThan("large")`
    display: none;
  `}
`;

const StyledChevronIcon = styled(ChevronIcon)<{ $expanded: boolean }>`
  transform: rotate(180deg);
  transition: all 0.3s;
  transform: ${({ $expanded }) => $expanded && "rotate(0deg)"};
`;

export default ExpandButton;
