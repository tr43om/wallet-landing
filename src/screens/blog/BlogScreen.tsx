import { Container, SecondaryButton } from "components";
import styled from "styled-components";
import React from "react";
import media from "styled-media-query";
import { Slider, Blogs } from "./components";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";

const BlogScreen = () => {
  const { devices } = useTheme();
  const isTabletOrMobile = useMediaQuery({
    query: devices.tabletAndBelow,
  });

  return (
    <Container>
      <Root id="blog">
        <Title>Blog</Title>
        {isTabletOrMobile && <Slider />}
        {!isTabletOrMobile && <Blogs />}

        <StyledSecondaryButton title="See all news" />
      </Root>
    </Container>
  );
};

const Root = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 2.7rem;
  margin-right: -8px;

  ${media.greaterThan("large")`
    margin-bottom: 7.55rem;
    margin-right: 0px;
    
  `}
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title9};
  margin-bottom: 2rem;
  order: -2;

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title2};
    margin-bottom: 3.75rem;
    
  `}
`;

const StyledSecondaryButton = styled(SecondaryButton)`
  align-self: start;
  margin: 0 auto;

  ${media.greaterThan("large")`
    order: -1;    
    margin: 0;

  `}

  ${media.lessThan("medium")`
     max-width: 244px; 
  `}
`;

export default BlogScreen;
