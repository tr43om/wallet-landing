import { Container } from "components";
import { faqs } from "data";
import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Question } from "./components";

const FaqsScreen = () => {
  return (
    <Container>
      <Root id="faqs">
        <Title>Popular questions</Title>
        <Questions>
          {faqs.map((faq, i) => (
            <Question {...faq} key={`question-${faq.question}-${i}`} />
          ))}
        </Questions>
      </Root>
    </Container>
  );
};

const Root = styled.div`
  margin-bottom: 3.75rem;

  ${media.greaterThan("large")`
    margin-bottom: 7.5rem;
  `}
`;
const Questions = styled.ul`
  all: unset;

  display: grid;
  gap: 2.2rem;
  margin-inline: 12px;

  ${media.greaterThan("large")`
    gap: 22px;
    margin-inline: 0px;
  `}
`;
const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title9};
  margin-bottom: 1.5rem;
  order: -2;

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title2};
    margin-bottom: 2.35rem;
    
  `}
`;

export default FaqsScreen;
