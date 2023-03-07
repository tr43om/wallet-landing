import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Hamburger } from "../Hamburger";
import { ReactComponent as Logo } from "assets/icons/other/logo.svg";
import { OutlinedButton, PrimaryButton } from "components/ui";
import media from "styled-media-query";
import { Container } from "components";

const Navigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Root $opened={isMenuOpened}>
          <Hamburger
            isOpen={isMenuOpened}
            toggle={() => setIsMenuOpened((open) => !open)}
          />

          {!isMenuOpened && <StyledLogo />}
          <Menu $opened={isMenuOpened}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem $isHidden>About</MenuItem>
          </Menu>
          {!isMenuOpened && (
            <Buttons>
              <OutlinedLogIn title="Log in" />
              <PrimaryLogIn title="Log in" />
              <PrimarySignUp title="Sign up" />
            </Buttons>
          )}
        </Root>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-bottom: 5.125rem;

  ${media.greaterThan("medium")`
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
  gap: 1.25rem;
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

const StyledLogo = styled(Logo)`
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
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

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

  ${media.greaterThan("large")`
    display: ${(props) => {
      // @ts-ignore
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
