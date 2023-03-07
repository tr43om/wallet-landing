import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { BlogType } from "types";

interface BlogProps extends BlogType {
  fullwidth?: boolean;
}

const Blog = ({
  date,
  description,
  imageUrl,
  title,
  fullwidth,
  author,
}: BlogProps) => {
  return (
    <Root>
      <BlogInfo $imgUrl={imageUrl}>
        <Date>{date}</Date>
        <Title>{title}</Title>
      </BlogInfo>
      <Author>
        <Avatar src={author.avatarUrl} alt={author.name} />
        <AuthorAbout>
          <AuthorName>{author.name}</AuthorName>
          <AuthorPosition>{author.position}</AuthorPosition>
        </AuthorAbout>
      </Author>
    </Root>
  );
};

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.greaterThan("large")`
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #e6e6e6;
  `}
`;
const AuthorAbout = styled.div``;
const Avatar = styled.img`
  border-radius: 50%;
`;
const AuthorName = styled.p`
  font: ${({ theme }) => theme.variants.body7};

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title6};  
  `}
`;
const AuthorPosition = styled.span`
  font: ${({ theme }) => theme.variants.caption1};
  color: ${({ theme: { colors } }) => colors.secondaryHoverText};

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.body4};  

  `}
`;

const Root = styled.article`
  display: grid;
  gap: 1rem;

  ${media.greaterThan("large")`
    gap: 1.25rem;
  `}
`;

const BlogInfo = styled.section<{ $imgUrl: string }>`
  height: 100%;
  min-height: 200px;
  max-height: 280px;
  max-width: 600px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
  overflow: hidden;

  ${media.greaterThan("medium")`
    max-height: 360px;
    max-width: 600px;
    min-height: 280px;

  `}

  ${media.greaterThan("large")`
    max-width: 400px;
     max-height: 280px;


  `}
`;

const Title = styled.h3`
  color: #fff;
  align-self: end;
  background: rgba(72, 72, 72, 0.28);
  backdrop-filter: blur(2px);
  padding: 0.75rem;

  font: ${({ theme }) => theme.variants.body5};

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title7};

    `}
`;

const Date = styled.span`
  margin: 1.25rem;
  padding: 0.5rem 1rem;
  background: rgba(72, 72, 72, 0.28);
  backdrop-filter: blur(2px);
  color: #fff;
  justify-self: end;
  align-self: flex-start;
  border-radius: 4px;

  font: ${({ theme }) => theme.variants.caption1};

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.body5};
    
  `}
`;

export default Blog;
