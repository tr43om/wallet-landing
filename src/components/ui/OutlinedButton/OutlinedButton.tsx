import React, { ReactNode } from "react";
import styled from "styled-components";
import media from "styled-media-query";

interface OutlinedButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
}

const OutlinedButton = ({ title, ...props }: OutlinedButtonProps) => {
  return <Button {...props}>{title}</Button>;
};

const Button = styled.button`
  all: unset;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  justify-content: center;

  font: ${({ theme }) => theme.variants.body3};
  border-radius: 4px;
  padding: 0.75rem 1.75rem;
  color: ${({ theme }) => theme.colors.primaryWhite};
  outline: 1px solid ${({ theme }) => theme.colors.primaryLavanda};
  ${media.greaterThan("medium")`
  font: ${({ theme }) => theme.variants.body4};

    padding-inline: 2.2rem;
  `};

  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryLavanda};
    color: ${({ theme }) => theme.colors.primaryBlue};
    outline: none;
  }
`;

export default OutlinedButton;
