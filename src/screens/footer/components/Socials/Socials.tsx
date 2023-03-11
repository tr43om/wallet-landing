import styled from "styled-components";

import { ReactComponent as FacebookIcon } from "assets/icons/socials/facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/socials/instagram.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/socials/twitter.svg";
import { ReactComponent as YoutubeIcon } from "assets/icons/socials/youtube.svg";
import media from "styled-media-query";

const Socials = () => {
  return (
    <SocialsContainer>
      <Title>Follow Us</Title>
      <List>
        <SocialItem>
          <a href="#">
            <FacebookIcon />
          </a>
        </SocialItem>

        <SocialItem>
          <a href="#">
            <TwitterIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a href="#">
            <InstagramIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a href="#">
            <YoutubeIcon />
          </a>
        </SocialItem>
      </List>
    </SocialsContainer>
  );
};

const Title = styled.h3<{ $align?: "left" | "right"; $mb?: number }>`
  font: ${({ theme }) => theme.variants.body1};
  text-align: ${({ $align }) => ($align ? $align : "center")};

  margin-bottom: ${({ $mb }) => ($mb ? `${$mb}px` : "10px")};

  ${media.greaterThan("large")`
    text-align: left;
    margin-bottom: 3px;
  `}
`;

const SocialsContainer = styled.div`
  margin-bottom: 1.875rem;

  ${media.greaterThan("large")`
    margin-bottom: 2.175rem;
  `}
`;

const SocialItem = styled.li`
  all: unset;
`;

const List = styled.ul`
  all: unset;

  display: flex;
  gap: 5px;

  & > svg {
    width: 43px;
    aspect-ratio: 1;
  }

  ${media.greaterThan("large")`
    gap: 3px;
  `}
`;

export default Socials;
