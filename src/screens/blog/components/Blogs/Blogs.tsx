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
        <div key={i}>
          {i === 0 ? <FullWidthBlog {...blog} /> : <Blog {...blog} />}
        </div>
      ))}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  row-gap: 3.5rem;
  margin-bottom: 4rem;

  & > *:first-child {
    justify-content: start;
    flex-basis: 100%;
    column-gap: 5.5rem;
  }

  & > * {
    flex-basis: calc(50% - 2.5rem);
    flex-grow: 1;

    ${media.greaterThan("large")`
      column-gap: 0;
      justify-content: space-between;
      flex-basis: 31.2%;

    `};
  }
`;

export default Blogs;
