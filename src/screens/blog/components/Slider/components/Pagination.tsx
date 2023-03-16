import React from "react";
import { useSwiper } from "swiper/react";
import styled from "styled-components";

type PaginationProps = {
  active: number;
  slides: number;
};

const Pagination = ({ active, slides }: PaginationProps) => {
  const swiper = useSwiper();

  return (
    <Root>
      {Array.from({ length: slides }, (_, i) => i).map((_, i) => (
        <Bullet $isActive={i === active}></Bullet>
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 49px;
`;

const Bullet = styled.div<{ $isActive: boolean }>`
  border-radius: 1000px;
  height: 8px;
  aspect-ratio: 1 / 1;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primaryBlue : "#e6e6e6"};
`;

export default Pagination;
