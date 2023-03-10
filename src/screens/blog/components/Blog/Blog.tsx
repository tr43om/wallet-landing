import React from "react";
import styled, { useTheme } from "styled-components";
import media from "styled-media-query";
import { BlogType } from "types";
import { ReactComponent as ChevronRight } from "assets/icons/other/chevron-top.svg";
import { useMediaQuery } from "react-responsive";

interface BlogProps extends BlogType {
  fullwidth?: boolean;
}

const Blog = ({ date, imageUrl, title, author }: BlogProps) => {
  const { devices } = useTheme();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
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
      {!isDesktop && (
        <LinkContainer>
          <Link>Read full article</Link>
          <StyledChevronRight />
        </LinkContainer>
      )}
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
  max-width: 38px;

  ${media.greaterThan("large")`
    max-width: none;
  `}
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

const LinkContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  transition: all 0.3s;
  margin-top: 10px;

  &:hover,
  &:focus {
    gap: 0.7rem;
  }

  & > svg > path {
    fill: ${({ theme }) => theme.colors.primaryBlue};
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.colors.secondaryPressed};
  }
`;

const Link = styled.a`
  all: unset;

  color: ${({ theme }) => theme.colors.primaryBlue};
  font: ${({ theme }) => theme.variants.body6};
  transition: all 0.3s;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondaryPressed};
  }
`;

const StyledChevronRight = styled(ChevronRight)`
  transform: rotate(90deg);
`;

export default Blog;
