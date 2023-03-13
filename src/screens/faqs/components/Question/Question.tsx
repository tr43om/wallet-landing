import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { ReactComponent as ExtendIcon } from "assets/icons/other/extend.svg";
import { ReactComponent as ShrinkIcon } from "assets/icons/other/shrink.svg";

type QuestionProps = {
  question: string;
  iconUrl: string;
  answer: string;
};

const Question = ({ question, answer, iconUrl }: QuestionProps) => {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened((open) => !open);
  return (
    <Root onClick={toggle}>
      <Icon src={iconUrl} alt={question} />
      <QuestionText>{question}</QuestionText>
      {!opened ? (
        <ExtendIcon style={{ marginLeft: "auto" }} />
      ) : (
        <ShrinkIcon style={{ marginLeft: "auto" }} />
      )}

      {opened && <Answer>{answer}</Answer>}
    </Root>
  );
};

const Root = styled.li`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  list-style: none;
  width: 100%;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 0px 4px 11px rgba(56, 57, 77, 0.1);
  padding-block: 16px;
  padding-right: 19px;
  padding-left: 15px;
  font-size: 14px;

  ${media.greaterThan("large")`
    padding-block: 40px;
    padding-right: 47px;
    padding-left: 41px;

    font-size: 16px;
  `}
`;

const Icon = styled.img`
  margin-right: 0.75rem;
  aspect-ratio: 1 / 1;
  width: 38px;

  ${media.greaterThan("large")`
    width: 48px;
    margin-right: 1.45rem;
  `}
`;

const Answer = styled.p`
  flex-basis: 100%;
  padding-top: 1rem;
  color: #9b9b9b;

  ${media.greaterThan("large")`
    padding-top: 33px;
  `}
`;

const QuestionText = styled.h3`
  font: ${({ theme }) => theme.variants.title11};
  ${media.greaterThan("large")`
  font: ${({ theme }) => theme.variants.title4};
  margin-right: auto;
    
  `};
`;

export default Question;
