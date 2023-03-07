import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ChevronTopIcon } from "assets/icons/other/chevron-top.svg";

import { ReactComponent as CheckIcon } from "assets/icons/other/check.svg";
import { SelectOptionType } from "types";
import { useFormContext } from "react-hook-form";

type SelectProps<T> = {
  selected: T;
  isLight?: boolean;
  options: T[];
  chooseOption: (option: T) => void;
};

const Select = <T extends SelectOptionType>({
  selected,
  options,
  chooseOption,
  isLight = false,
}: SelectProps<T>) => {
  const [opened, setOpened] = useState(false);

  const toggle = () => setOpened((op) => !op);

  return (
    <Root>
      <StyledSelect
        tabIndex={0}
        onClick={toggle}
        onBlur={() => setOpened(false)}
        $isLight={isLight}
      >
        <Box>
          <Icon src={selected.iconUrl || ""} />
          <Label>{selected.label || ""}</Label>
          <StyledChevronIcon $opened={opened} />
        </Box>

        {opened && (
          <Options>
            {options.map((option) => (
              <Option
                value={option.value}
                onClick={() => {
                  chooseOption(option);
                }}
              >
                <Icon src={option.iconUrl} />
                <Label>{option.label}</Label>
                {selected.value === option.value && <StyledCheckIcon />}
              </Option>
            ))}
          </Options>
        )}
      </StyledSelect>
    </Root>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;

  border-radius: 4px;
  background: #515165;
  padding: 12px 14px;

  &:hover {
    outline: 1px solid #e1e1e4;
  }
`;

const Options = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  margin-top: 4px;

  border-radius: 4px;
  background: #515165;
  overflow-x: hidden;
  max-height: 200px;
`;

const Option = styled.li`
  all: unset;
  display: flex;
  align-items: center;
  padding: 12px 14px;

  &:hover {
    background: #6c6c7a;
  }
`;

const StyledSelect = styled.div<{ $isLight: boolean }>`
  min-width: 11.875rem;
  &:focus > ${Box} {
    outline: 1px solid #e1e1e4;
  }

  ${({ $isLight, theme }) =>
    $isLight &&
    `
        color: ${theme.colors.primaryDark};

        & > ${Box}, & > ${Options} {
            background: #f7f7f7;
        }

         & > ${Box} > svg > path {
            fill: ${theme.colors.primaryDark};
         }

         & > ${Options} > ${Option} {
            &:hover, &:hover > svg > path {
                background-color: transparent;
                color: ${theme.colors.primaryBlue};
                stroke: ${theme.colors.primaryBlue};
            }

            
         }

         & > ${Options} > ${Option} > svg > path {
            stroke: ${theme.colors.primaryDark};
         }
  `}
`;

const Label = styled.p``;

const Icon = styled.img`
  margin-right: 6px;
  width: 14px;
  aspect-ratio: 1;

  border-radius: 50%;
`;

const Root = styled.label`
  position: relative;
  cursor: pointer;
`;

const StyledChevronIcon = styled(ChevronTopIcon)<{ $opened: boolean }>`
  transform: rotate(180deg);
  transition: all 0.3s;
  transform: ${({ $opened }) => $opened && "rotate(0deg)"};
  margin-left: auto;

  & > path {
    fill: #fff;
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  margin-left: auto;
`;

export default Select;
