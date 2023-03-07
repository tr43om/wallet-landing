import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Blog } from "../Blog";
import media from "styled-media-query";
import { Pagination } from "./components";
import { blogs } from "data";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Root>
      <StyledSwiper
        slidesPerView={1.3}
        spaceBetween={32}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        {blogs.map((blog) => (
          <SwiperSlide>
            <Blog {...blog} />
          </SwiperSlide>
        ))}
        <Pagination active={activeSlide} />
      </StyledSwiper>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const StyledSwiper = styled(Swiper)`
  margin-right: -1rem;

  ${media.greaterThan("medium")`
  margin-right: -5rem;
    
  `}
`;

export default Slider;
