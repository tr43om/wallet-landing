import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

type HamProps = {
  isOpen: boolean;
  toggle: () => void;
};
const Hamburger = ({ isOpen, toggle }: HamProps) => {
  return (
    <StyledBurger $open={isOpen} onClick={toggle}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

const StyledBurger = styled.button<{ $open: boolean }>`
  ${media.greaterThan("large")`
  display: none;
`}
  position: absolute;
  z-index: 999;
  top: 1rem;
  left: 0;
  width: 1.25rem;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    transform-origin: 2px;

    width: 1.25rem;
    height: 2px;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    margin-top: 4px;

    :first-child {
      margin-top: 0;

      transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ $open }) => ($open ? "0" : "1")};
      transform: ${({ $open }) =>
        $open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Hamburger;
