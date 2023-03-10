import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  key?: string;
  disabled?: boolean;
}

const RadioButton = ({
  id,
  disabled,
  label,
  defaultChecked,
  key,
  checked,
  ...rest
}: RadioButtonProps) => {
  return (
    <Root>
      <Radio
        {...rest}
        type="radio"
        id={id}
        disabled={disabled}
        defaultChecked={defaultChecked}
        key={key}
      />
      <Label htmlFor={id}>{label}</Label>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.label`
  user-select: none;
  cursor: pointer;
`;

const Radio = styled.input`
  -webkit-appearance: none;
  cursor: pointer;

  appearance: none;
  margin: 0;
  width: 1.5em;
  height: 1.5em;
  outline: 1px solid ${({ theme }) => theme.colors.primaryBlue};
  outline-offset: 1px;

  border-radius: 50%;
  ::after {
    content: "";
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryLavanda};

    ::after {
    }
  }

  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.primaryBlue};
    background-color: ${({ theme }) => theme.colors.primaryBlue};

    outline-offset: 1px;
  }

  :checked {
    ::after {
      background-color: ${({ theme }) => theme.colors.primaryBlue};
    }
    :hover {
      background-color: ${({ theme }) => theme.colors.primaryBlue};
      border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
      ::after {
        background-color: ${({ theme }) => theme.colors.primaryBlue};
      }
    }
  }
`;

export default RadioButton;
