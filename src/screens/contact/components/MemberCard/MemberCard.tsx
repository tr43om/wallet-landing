import React from "react";
import styled from "styled-components";
import { MemberType } from "types";
import telegramIcon from "assets/icons/socials/telegram.svg";
import emailIcon from "assets/icons/socials/email.svg";
import facebookIcon from "assets/icons/socials/facebook-alt.svg";
import media from "styled-media-query";
import { nanoid } from "nanoid";

type MemberCardProps = {
  member: MemberType;
  isTitleAbove?: boolean;
};

const MemberCard = ({ member, isTitleAbove = true }: MemberCardProps) => {
  return (
    <Root $isTitleAbove={isTitleAbove}>
      <TopCard>
        <MemberPhoto
          $imgUrl={member.photoUrl.webp}
          $retina={member.photoUrl.retina2x}
        >
          <SocialsBadge>
            <a href="#">
              <TelegramIcon />
            </a>
            <a href="#">
              <EmailIcon />
            </a>
          </SocialsBadge>
        </MemberPhoto>
      </TopCard>
      <BottomCard>
        <div>
          <MemberName>{member.name}</MemberName>
          <MemberPosition>{member.position}</MemberPosition>
        </div>
      </BottomCard>
    </Root>
  );
};

const TelegramIcon = styled.img.attrs({
  src: telegramIcon,
  alt: "telegram icon",
})`
  filter: brightness(100);

  &:hover {
    opacity: 0.4;
  }
`;

const EmailIcon = styled.img.attrs({
  src: emailIcon,
  alt: "email icon",
})`
  filter: brightness(100);

  &:hover {
    opacity: 0.4;
  }
`;

const BottomCard = styled.div`
  display: grid;
  grid-row-start: 1;
  grid-column-start: 1;
  text-align: center;
  overflow: hidden;
  overflow-y: auto;

  align-items: end;
  justify-items: center;
  padding-bottom: 40px;
  padding-top: 30px;
  min-width: 200px;
  aspect-ratio: 1 / 1;
  background: #fff;
  border-radius: 8px;

  z-index: 1;

  box-shadow: 0px 2.21299px 6.08571px rgba(56, 57, 77, 0.1);

  ${media.greaterThan("large")`
    text-align: left;
    padding-top: 36px;
    padding-bottom: 36px;

  `}
`;

const MemberName = styled.p`
  font: ${({ theme }) => theme.variants.title7};
  margin-bottom: 1rem;

  ${media.greaterThan("large")`
    margin-bottom: 0;
  `}
`;

const MemberPosition = styled.span`
  color: #9b9b9b;
`;

const SocialsBadge = styled.div`
  display: flex;
  gap: 3.5rem;
  background: rgba(72, 72, 72, 0.5);
  backdrop-filter: blur(2px);
  padding: 0.6875rem 1.6875rem;
  border-radius: 8px;

  justify-self: flex-start;
  align-self: end;
  margin: 1rem;

  a {
    position: relative;

    width: 24px;
    height: 24px;

    &:not(:last-child):after {
      content: "";
      border-left: 0.4px solid rgba(0, 0, 0, 0.1);
      position: absolute;
      height: 31px;
      top: -3px;
      margin-left: 28px;
    }

    ${media.greaterThan("large")`
        width: 20px;
        height: 20px;
        &:after {
          display: none;
        }
    `}

    img {
      width: 100%;
      max-width: 100%;
    }
  }

  ${media.greaterThan("large")`
    padding: 0.5rem 1rem;
    gap: 0.7rem;
  `}
`;

const Root = styled.li<{ $isTitleAbove: boolean }>`
  all: unset;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;

  margin-top: ${({ $isTitleAbove }) => $isTitleAbove && "110px"};

  margin-left: ${({ $isTitleAbove }) => $isTitleAbove && "auto"};

  &:not(:last-child) {
    margin-bottom: 1.4rem;
  }

  & > * {
    max-width: 244px;
    min-width: 244px;

    ${media.greaterThan("large")`
        max-width: 216px;
        min-width: 215px;
        
    `}
  }

  ${SocialsBadge} {
    justify-self: ${({ $isTitleAbove }) => $isTitleAbove && "end"};
  }

  ${BottomCard} {
    position: relative;
    ${({ $isTitleAbove }) => `
      top: ${$isTitleAbove ? "-130px" : "130px"};
      right: ${$isTitleAbove ? "50px" : "-50px"};
      
    `}
    align-items: ${({ $isTitleAbove }) => $isTitleAbove && "start"};

    ${media.greaterThan<{ $isTitleAbove: boolean }>("large")`
        ${({ $isTitleAbove }) => {
          return `
            top: ${$isTitleAbove ? "-109px" : "109px"};
            right: ${$isTitleAbove ? "66px" : "-66px"};
        `;
        }}
      `}
  }
`;

const TopCard = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  position: relative;
  z-index: 90;
`;

const MemberPhoto = styled.div<{ $imgUrl: string; $retina?: string }>`
  width: 100%;

  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: ${({ $retina, $imgUrl }) =>
      $retina ? `url(${$retina})` : `url(${$imgUrl})`};
  }
  overflow: hidden;
`;

export default MemberCard;
