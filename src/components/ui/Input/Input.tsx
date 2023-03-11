import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { Error } from "../Error";
import ReactInputMask from "react-input-mask";
import media from "styled-media-query";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  name: string;
  mask?: string | (string | RegExp)[];
}

const Input = ({ label, name, mask = "", ...props }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const isError = Boolean(errors[name]?.message);
  const errorMessage = errors[name]?.message;
  return (
    <Root>
      <Label>{label}</Label>
      {mask ? (
        <MaskedInput
          $error={isError}
          mask={mask as string}
          {...register(name)}
        />
      ) : (
        <StyledInput {...props} $error={isError} {...register(name)} />
      )}

      {isError && <Error $mt={10} text={errorMessage as string} />}
    </Root>
  );
};

const Root = styled.label`
  display: grid;
`;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.secondaryActiveText};
  margin-bottom: 10px;
`;

const MaskedInput = styled(ReactInputMask)<{
  $error: boolean;
}>`
  width: 100%;
  background: #f7f7f7;
  outline: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 13px 16px;
  border-radius: 4px;
  transition: all 0.3s;
  caret-color: ${({ theme }) => theme.colors.primaryBlue};
  border: 1px solid
    ${({ $error, theme }) => {
      if ($error) {
        return theme.colors.accent;
      } else {
        return "#E1E1E4";
      }
    }};
  &::placeholder {
    color: #9b9b9b;
  }

  &:focus,
  &:hover {
    border-color: ${({ theme, $error }) =>
      !$error ? theme.colors.primaryBlue : theme.colors.accent};
  }
`;

const StyledInput = styled.input<{
  $error: boolean;
}>`
  width: 100%;
  background: #f7f7f7;
  outline: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 13px 16px;
  border-radius: 4px;
  transition: all 0.3s;
  caret-color: ${({ theme }) => theme.colors.primaryBlue};
  border: 1px solid
    ${({ $error, theme }) => {
      if ($error) {
        return theme.colors.accent;
      } else {
        return "#E1E1E4";
      }
    }};

  &::placeholder {
    color: #9b9b9b;
  }

  &:focus,
  &:hover {
    border-color: ${({ theme, $error }) =>
      !$error ? theme.colors.primaryBlue : theme.colors.accent};
  }

  ${media.lessThan("medium")`
    font: ${({ theme }) => theme.variants.caption2}
  `}
`;

export default Input;
