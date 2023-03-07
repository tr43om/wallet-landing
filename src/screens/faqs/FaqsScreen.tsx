import { Container } from "components";
import { faqs } from "data";
import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Question } from "./components";

const FaqsScreen = () => {
  return (
    <Container>
      <Root>
        <Title>Popular questions</Title>
        <Questions>
          {faqs.map((faq) => (
            <Question {...faq} />
          ))}
        </Questions>
      </Root>
    </Container>
  );
};

const Root = styled.div`
  margin-bottom: 3.75rem;

  ${media.greaterThan("large")`
    margin-bottom: 6.5rem;
  `}
`;
const Questions = styled.ul`
  all: unset;

  display: grid;
  gap: 1.75rem;

  ${media.greaterThan("large")`
    gap: 4.125rem;
  `}
`;
const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title9};
  margin-bottom: 2rem;
  order: -2;

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title2};
    margin-bottom: 1.25rem;
    
  `}
`;

export default FaqsScreen;
