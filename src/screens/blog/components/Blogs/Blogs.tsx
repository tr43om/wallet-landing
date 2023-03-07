import React from "react";
import { blogs } from "data";
import styled from "styled-components";
import { Blog } from "../Blog";
import media from "styled-media-query";
import { FullWidthBlog } from "../FullWidthBlog";

const Blogs = () => {
  return (
    <Root>
      {blogs.map((blog, i) => (
        <>{i === 0 ? <FullWidthBlog {...blog} /> : <Blog {...blog} />}</>
      ))}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  row-gap: 3.75rem;
  margin-bottom: 4rem;

  & > *:first-child {
    flex-basis: 100%;
  }

  & > * {
    flex-basis: calc(50% - 2.5rem);
    ${media.greaterThan("large")`
    flex-basis: calc(33% - 2.5rem);

    `};
  }
`;

export default Blogs;
