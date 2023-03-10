import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { BlogType } from "types";

interface FullWidthBlogProps extends BlogType {}

const FullWidthBlog = ({
  date,
  description,
  imageUrl,
  title,

  author,
}: FullWidthBlogProps) => {
  return (
    <Root>
      <BlogImage src={imageUrl} alt={author.name} />
      <Content>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Author>
          <Avatar src={author.avatarUrl} alt={author.name} />
          <AuthorAbout>
            <AuthorName>{author.name}</AuthorName>
            <AuthorPosition>{author.position}</AuthorPosition>
          </AuthorAbout>
        </Author>
      </Content>
    </Root>
  );
};

const Root = styled.article`
  display: flex;
  gap: 2.5rem;

  ${media.greaterThan("large")`
  gap: 5.525rem;
    
  `}
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondaryHoverText};
  margin-bottom: 2.5rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Content = styled.div`
  flex-basis: 70%;

  ${media.greaterThan("large")`
  flex-basis: 50%; 
  max-width: 454px;
  `}
`;

const BlogImage = styled.img`
  max-height: 20rem;
  width: 15rem;
  flex-basis: 30%;
  max-inline-size: 100%;
  block-size: auto;
  object-fit: cover;
  align-self: flex-start;
  border-radius: 8px;

  ${media.greaterThan("large")`
    flex-basis: 51%;
    max-height: 417px;
  `}
`;

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

const Title = styled.h3`
  margin-bottom: 1.125rem;
  margin-top: 15px;
  font: ${({ theme }) => theme.variants.title3};
`;

const Date = styled.span`
  font: ${({ theme }) => theme.variants.title6};
  color: ${({ theme }) => theme.colors.secondaryHoverText};
`;

export default FullWidthBlog;
