import styled from "styled-components";

interface InputProps {
  checked: boolean;
  toggle: () => void;
  id: string;
}

const Checkbox = ({ checked, toggle, id }: InputProps) => {
  return (
    <CheckboxContainer onClick={toggle}>
      <HiddenCheckbox
        checked={checked}
        type="checkbox"
        id={id}
        onChange={toggle}
      />
      <StyledCheckbox $checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primaryBlue};
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div<{ $checked: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #f6f6f6;
  border: 1px solid
    ${({ theme, $checked }) =>
      $checked ? theme.colors.primaryBlue : "#e1e1e4"};
  border-radius: 4px;
  transition: all 150ms;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryBlue};
  }

  ${Icon} {
    visibility: ${(props) => (props.$checked ? "visible" : "hidden")};
  }
`;

export default Checkbox;
