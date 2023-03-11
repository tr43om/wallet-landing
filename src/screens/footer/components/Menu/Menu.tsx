import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Menu = () => {
  return (
    <MenuContainer>
      <Title>Menu</Title>
      <MenuList>
        <MenuItem>
          <a href="#">Home</a>
        </MenuItem>
        <MenuItem>
          <a href="#wallets">Wallets</a>
        </MenuItem>
        <MenuItem>
          <a href="#merchants">Merchants</a>
        </MenuItem>
        <MenuItem>
          <a href="#transactions">All transactions</a>
        </MenuItem>
        <MenuItem>
          <a href="#contact-us">Contact Us</a>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

const Title = styled.h3`
  font: ${({ theme }) => theme.variants.body1};
  margin-bottom: 15px;
  text-align: center;

  ${media.greaterThan("large")`
    text-align: left;
    margin-bottom: 20px;
    
  `}
`;

const MenuContainer = styled.div`
  margin-bottom: 2rem;
`;

const MenuList = styled.ul`
  all: unset;
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  row-gap: 1.1rem;
  font-size: 13px;

  max-width: 200px;

  ${media.greaterThan("large")`
    max-width: none;
  `}
`;

const MenuItem = styled.li`
  &,
  a {
    all: unset;
    cursor: pointer;
    font: ${({ theme }) => theme.variants.body5};
    color: ${({ theme }) => theme.colors.secondaryHoverText};
  }

  &:hover {
    opacity: 0.7;
  }
`;

export default Menu;
