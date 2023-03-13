import React from "react";
import styled from "styled-components";

type ErrorProps = {
  $mt?: number;
  $mb?: number;
  text: string;
};

const Error = ({ text, $mb = 0, $mt = 0 }: ErrorProps) => {
  return (
    <Root $mb={$mb} $mt={$mt}>
      {text}
    </Root>
  );
};

const Root = styled.span<{ $mt?: number; $mb?: number }>`
  ${({ theme: { colors, variants }, $mb, $mt }) => {
    return `
        font: ${variants.body5};
        color: ${colors.accent};
        margin-bottom: ${$mb ? $mb : 0}px;
        margin-top: ${$mt ? $mt : 0}px;
    `;
  }}
`;

export default Error;
