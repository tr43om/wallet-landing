import React, { ReactNode } from "react";
import styled from "styled-components";
import media from "styled-media-query";

interface PrimaryButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
}

const PrimaryButton = ({ title, ...props }: PrimaryButtonProps) => {
  return <Button {...props}>{title}</Button>;
};

const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  cursor: pointer;
  white-space: nowrap;
  font: ${({ theme }) => theme.variants.body3};
  border-radius: 4px;
  padding: 12px 26px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.primaryWhite};
  transition: all 0.3s;

  ${media.greaterThan("medium")`
  font: ${({ theme }) => theme.variants.body4};


    padding-inline: 35px;
  `}

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryPressed};
    border: none;
  }
`;

export default PrimaryButton;
