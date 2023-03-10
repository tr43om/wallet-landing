import React from "react";
import styled from "styled-components";
import { members } from "data";
import { MemberCard } from "../MemberCard";
import media from "styled-media-query";

const MembersList = () => {
  return (
    <List>
      {members.map((member, i) => (
        <MemberCard
          member={member}
          isTitleAbove={i % 2 !== 0}
          key={`member-${member.name}-${i}`}
        />
      ))}
    </List>
  );
};

const List = styled.ul`
  all: unset;
  display: grid;
  gap: 10.5rem;
  margin-inline: 11px;

  ${media.greaterThan("large")`
    display: flex;
    margin: 0;
    margin-top: 85px;
    gap: 12.7rem;

  `}
`;

export default MembersList;
