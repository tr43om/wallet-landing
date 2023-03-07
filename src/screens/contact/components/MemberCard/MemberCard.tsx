import React from "react";
import styled, { useTheme } from "styled-components";
import { MemberType } from "types";
import { ReactComponent as TelegramIcon } from "assets/icons/socials/telegram.svg";
import { ReactComponent as EmailIcon } from "assets/icons/socials/email.svg";
import media from "styled-media-query";
import { useMediaQuery } from "react-responsive";

type MemberCardProps = {
  member: MemberType;
  isTitleAbove?: boolean;
};

const MemberCard = ({ member, isTitleAbove = true }: MemberCardProps) => {
  return (
    <Root $isTitleAbove={isTitleAbove}>
      <TopCard>
        <MemberPhoto $imgUrl={member.photoUrl}>
          <SocialsBadge>
            <TelegramIcon width={20} height={20} />
            <EmailIcon width={20} height={20} />
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

const BottomCard = styled.div`
  display: grid;
  grid-row-start: 1;
  grid-column-start: 1;

  align-items: end;
  justify-items: center;
  padding-block: 2rem;
  width: 250px;
  min-width: 200px;
  aspect-ratio: 1;
  background: #fff;
  border-radius: 8px;

  z-index: 1;

  box-shadow: 0px 2.21299px 6.08571px rgba(56, 57, 77, 0.1);
`;

const MemberName = styled.p`
  font: ${({ theme }) => theme.variants.title7};
  margin-bottom: 1rem;
`;

const MemberPosition = styled.span`
  color: #9b9b9b;
`;

const Root = styled.div<{ $isTitleAbove: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;

  margin-top: ${({ $isTitleAbove }) => $isTitleAbove && "130px"};

  & > ${BottomCard} {
    transform: ${({ $isTitleAbove }) =>
      $isTitleAbove ? "translate(-50px, -130px)" : "translate(50px, 130px)"};

    align-items: ${({ $isTitleAbove }) => $isTitleAbove && "start"};
  }
`;
const TopCard = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  position: relative;
  z-index: 90;
  min-width: 200px;
`;

const MemberPhoto = styled.div<{ $imgUrl: string }>`
  width: 100%;
  max-width: 250px;
  min-width: 200px;

  object-fit: cover;
  aspect-ratio: 1;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
  overflow: hidden;
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

  & > svg > g > path {
    fill: #fff;
  }

  & > svg {
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }

  ${media.greaterThan("large")`
  padding: 0.5rem 1rem;
  gap: 1rem;

    
  `}
`;

export default MemberCard;
