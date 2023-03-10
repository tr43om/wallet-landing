import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { Error } from "../Error";
import media from "styled-media-query";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}
const TextArea = ({
  label,
  value,
  name,
  maxLength,
  ...props
}: TextAreaProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const isError = Boolean(errors[name]?.message);
  const errorMessage = errors[name]?.message;
  const message: string = watch(name) || "";

  return (
    <Root>
      <Header>
        <Label>{label}</Label>

        <Counter>
          {message.length || 0} / {maxLength}
        </Counter>
      </Header>

      <StyledTextArea
        $error={isError}
        {...props}
        {...register("message", { maxLength })}
      />
      <Error text={errorMessage as string} $mt={10} />
    </Root>
  );
};

const Root = styled.label`
  display: grid;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Counter = styled.p`
  color: ${({ theme }) => theme.colors.secondaryActiveText};
`;

const StyledTextArea = styled.textarea<{
  $error: boolean;
}>`
  min-height: 6rem;
  font: inherit;
  resize: none;
  outline: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 12px 16px;
  border-radius: 4px;
  background: #f7f7f7;
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

const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondaryActiveText};
  margin-bottom: 10px;
`;

export default TextArea;
