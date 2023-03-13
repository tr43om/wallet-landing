import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Hamburger } from "../Hamburger";
import logo from "assets/icons/other/logo.svg";
import { OutlinedButton, PrimaryButton } from "components/ui";
import media from "styled-media-query";
import { Container } from "components";

const Navigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const closeMenu = () => setIsMenuOpened(false);

  return (
    <Wrapper>
      <Container>
        <Root $opened={isMenuOpened}>
          <Hamburger
            isOpen={isMenuOpened}
            toggle={() => setIsMenuOpened((open) => !open)}
          />

          {!isMenuOpened && <Logo src={logo} alt="logo" />}
          <Menu $opened={isMenuOpened}>
            <MenuItem onClick={closeMenu}>
              <a href="#">Home</a>
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <a href="#blog">Blog</a>
            </MenuItem>
            <MenuItem onClick={closeMenu}>
              <a href="#faqs">FAQ</a>
            </MenuItem>
            <MenuItem $isHidden onClick={closeMenu}>
              <a href="#about">About</a>
            </MenuItem>
          </Menu>
          {!isMenuOpened && (
            <Buttons>
              <OutlinedLogIn title="Log In" />
              <PrimaryLogIn title="Log In" />
              <PrimarySignUp title="Sign Up" />
            </Buttons>
          )}
        </Root>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-bottom: 57px;

  ${media.greaterThan("medium")`
     margin-bottom: 7.425rem;
     border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  `};
`;

const Root = styled.nav<{ $opened: boolean }>`
  position: relative;
  padding-left: ${({ $opened }) => ($opened ? 0 : "40px")};
  min-height: ${({ $opened }) => ($opened ? "100vh" : 0)};
  padding-bottom: 1.5rem;

  display: flex;
  align-items: center;
  ${media.greaterThan("large")`
    padding-left: 0px;
  `};
`;

const Buttons = styled.div`
  display: flex;
  margin-left: auto;
  gap: 23px;
`;

const OutlinedLogIn = styled(OutlinedButton)`
  display: none;
  ${media.greaterThan("large")`
    display: flex;
  `}
`;
const PrimaryLogIn = styled(PrimaryButton)`
  ${media.greaterThan("large")`
    display: none;
  `}
`;
const PrimarySignUp = styled(PrimaryButton)`
  display: none;
  ${media.greaterThan("large")`
    display: flex;
  `}
`;

const Logo = styled.img`
  width: 82px;
  height: 28px;

  ${media.greaterThan("large")`
    width: 117px;
    height: 40px;
  `}
`;

const Menu = styled.ul<{ $opened: boolean }>`
  padding: 0;
  display: ${({ $opened }) => ($opened ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  list-style: none;
  z-index: 10;
  background: ${({ theme }) => theme.colors.primaryDark};
  overflow: hidden;
  height: 100dvh;
  overflow-y: hidden;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  ${media.greaterThan("large")`
    position: relative;
    display: flex;
    height: fit-content;
    width: fit-content;
    flex-direction: row;
    margin-left: 10.4rem;
  `}
`;

const MenuItem = styled.li<{ $isHidden?: boolean }>`
  text-align: center;
  font-size: 1.625rem;
  cursor: pointer;

  a {
    all: unset;
  }

  ${media.greaterThan<{ $isHidden: boolean }>("large")`
    display: ${(props) => {
      return props.$isHidden && "none";
    }};

    font: ${({ theme }) => theme.variants.body4};
    color: ${({ theme }) => theme.colors.secondaryHoverText};
    
    &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primaryWhite};
    transition: color .3s;
  }

  
  `}
`;

export default Navigation;
