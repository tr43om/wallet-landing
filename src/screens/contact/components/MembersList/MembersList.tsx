import React from "react";
import styled from "styled-components";
import { members } from "data";
import { MemberCard } from "../MemberCard";
import media from "styled-media-query";

const MembersList = () => {
  return (
    <List>
      {members.map((member, i) => (
        <MemberCard member={member} isTitleAbove={i % 2 !== 0} />
      ))}
    </List>
  );
};

const List = styled.ul`
  all: unset;
  margin: 0 auto;
  display: grid;
  gap: 10.5rem;

  ${media.greaterThan("large")`
    display: flex;
    margin: 0;
  `}
`;

export default MembersList;
