import React, { ReactNode } from "react";
import styled from "styled-components";
import media from "styled-media-query";

interface SecondaryButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

const SecondaryButton = ({
  title,
  iconEnd,
  iconStart,
  ...props
}: SecondaryButtonProps) => {
  return (
    <Button {...props}>
      {iconStart}
      {title}
      {iconEnd}
    </Button>
  );
};

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  font: ${({ theme }) => theme.variants.body3};
  border-radius: 4px;
  padding: 0.75rem 1.75rem;
  background-color: ${({ theme }) => theme.colors.primaryLavanda};
  color: ${({ theme }) => theme.colors.primaryBlue};
  transition: all 0.3s;

  &:disabled {
    color: ${({ theme }) => theme.colors.secondaryPressed};

    background: red;
  }

  ${media.greaterThan("medium")`
  font: ${({ theme }) => theme.variants.body4};

    padding-inline: 2.2rem;
  `}

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryPressed};
    color: ${({ theme }) => theme.colors.primaryWhite};

    border: none;

    & > svg > path {
      fill: ${({ theme }) => theme.colors.primaryWhite};
    }
  }
`;

export default SecondaryButton;
