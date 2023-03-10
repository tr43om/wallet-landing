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
      <span>{title}</span>
      {iconEnd}
    </Button>
  );
};

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  font: ${({ theme }) => theme.variants.body3};
  border-radius: 4px;
  width: 100%;
  max-width: 276px;
  padding-block: 12.5px;
  background-color: ${({ theme }) => theme.colors.primaryLavanda};
  color: ${({ theme }) => theme.colors.primaryBlue};
  transition: all 0.3s;
  gap: 16px;
  margin: 0 auto;

  &:disabled {
    color: ${({ theme }) => theme.colors.secondaryPressed};
  }

  ${media.greaterThan("medium")`
    font: ${({ theme }) => theme.variants.body4};
    padding-block: 10px;
    font-size: 18px;
    font-weight: 400;
    margin: 0;
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
