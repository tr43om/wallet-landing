import React, { ChangeEvent, useState } from "react";
import styled, { useTheme } from "styled-components";
import { ReactComponent as FacebookIcon } from "assets/icons/socials/facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/socials/instagram.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/socials/twitter.svg";
import { ReactComponent as YoutubeIcon } from "assets/icons/socials/youtube.svg";

import { ReactComponent as TelegramIcon } from "assets/icons/socials/telegram.svg";
import { ReactComponent as EmailIcon } from "assets/icons/socials/email.svg";

import { ReactComponent as AtIcon } from "assets/icons/socials/@.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/socials/phone.svg";

import { ReactComponent as Logo } from "assets/icons/other/logo.svg";

import founder from "assets/photos/founder.webp";
import { Container, Select } from "components";
import { languages } from "data";

import media from "styled-media-query";

import { SelectOptionType } from "types";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const [language, setLanguage] = useState(languages[0]);

  const { devices } = useTheme();
  const isTabletOrMobile = useMediaQuery({
    query: devices.tabletAndBelow,
  });

  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });

  const changeLanguage = (option: SelectOptionType) => setLanguage(option);
  return (
    <Root>
      <Container>
        <Content>
          <SocialsContainer>
            <Title>Follow Us</Title>
            <Socials>
              <FacebookIcon width={38} height={38} />
              <TwitterIcon width={38} height={38} />
              <InstagramIcon width={38} height={38} />
              <YoutubeIcon width={38} height={38} />
            </Socials>
          </SocialsContainer>

          <MenuContainer>
            <Title>Menu</Title>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Wallets</MenuItem>
              <MenuItem>Merchants</MenuItem>
              <MenuItem>All transactions</MenuItem>
              <MenuItem>Contact Us</MenuItem>
            </MenuList>
          </MenuContainer>

          {isTabletOrMobile && (
            <ContactContainer>
              <Title>Need help?</Title>

              <ContactFounderContainer>
                <FounderWrapper>
                  <Avatar src={founder} alt="founder" width={48} height={48} />
                  <FounderInfo>
                    <FounderName>Allison Carder</FounderName>
                    <FounderSocialsContainer>
                      <FounderSocialsItem>
                        <TelegramIcon />
                      </FounderSocialsItem>
                      <FounderSocialsItem>
                        <EmailIcon />
                      </FounderSocialsItem>
                    </FounderSocialsContainer>
                  </FounderInfo>
                </FounderWrapper>

                <OtherContactsContainer>
                  <OtherContactItem>
                    <AtIcon />
                    <p>Allison_Carder_@mail.com</p>
                  </OtherContactItem>
                  <OtherContactItem>
                    <PhoneIcon />
                    <p>+ 7 (900) 000 0000</p>
                  </OtherContactItem>
                </OtherContactsContainer>
              </ContactFounderContainer>
            </ContactContainer>
          )}
          {isDesktop && (
            <ContactContainerDesktop>
              <Title>24/7 Support</Title>
              <ContactContainerDesktopWrapper>
                <FounderInfo>
                  <FounderName>Write to us</FounderName>
                  <FounderSocialsContainer>
                    <FounderSocialsItem>
                      <TelegramIcon />
                    </FounderSocialsItem>
                    <FounderSocialsItem>
                      <EmailIcon />
                    </FounderSocialsItem>
                  </FounderSocialsContainer>
                </FounderInfo>

                <OtherContactsContainer>
                  <OtherContactItem>
                    <AtIcon />
                    <p>Allison_Carder_@mail.com</p>
                  </OtherContactItem>
                  <OtherContactItem>
                    <PhoneIcon />
                    <p>+ 7 (900) 000 0000</p>
                  </OtherContactItem>
                </OtherContactsContainer>
              </ContactContainerDesktopWrapper>
            </ContactContainerDesktop>
          )}
          <LanguageContainer>
            <Title $align="left">Language</Title>
            <Select
              options={languages}
              chooseOption={changeLanguage}
              selected={language}
            />
          </LanguageContainer>
        </Content>
        <CopyrightContainer>
          <CopyrightDescription>
            Laborum exercitation non non nostrud non aliqua labore sit. Elit
            quis eu magna ex aliqua qui officia consectetur. Consectetur laboris
            fugiat dolore reprehenderit eiusmod officia. Sunt officia et nostrud
            cillum aliquip nostrud aliquip eiusmod est.
          </CopyrightDescription>
          <StyledLogo />
          <CopyrightText>
            © 2021 <Highlight>8 Wallet</Highlight> - Premium WordPress news &
            magazine theme by <Highlight>8 Wallet</Highlight>
          </CopyrightText>
        </CopyrightContainer>
      </Container>
    </Root>
  );
};

const Root = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryWhite};
  padding-top: 2.375rem;
  padding-bottom: 1rem;

  ${media.greaterThan("large")`
    padding-top: 5rem;
    padding-bottom: 5.8125rem;
    
  `}
`;

const Content = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto;
  max-width: 13rem;

  ${media.greaterThan("large")`
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
    max-width: 100%;
  `}
`;

const Title = styled.h3<{ $align?: "left" | "right" }>`
  font: ${({ theme }) => theme.variants.body1};
  text-align: ${({ $align }) => ($align ? $align : "center")};

  margin-bottom: 0.8rem;

  ${media.greaterThan("large")`
    text-align: left;
  `}
`;

const SocialsContainer = styled.div`
  margin-bottom: 2.375rem;
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
`;

const MenuContainer = styled.div`
  margin-bottom: 2rem;
`;

const MenuList = styled.ul`
  all: unset;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const MenuItem = styled.li`
  all: unset;
  font: ${({ theme }) => theme.variants.body5};
  color: ${({ theme }) => theme.colors.secondaryHoverText};
`;

const ContactContainer = styled.div`
  margin-bottom: 2.5rem;
`;

const ContactContainerDesktop = styled.div`
  display: grid;
  justify-items: start;
  order: 1;
  flex-basis: 100%;
`;

const ContactContainerDesktopWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
`;

const ContactFounderContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 1.3rem;

  ${media.greaterThan("large")`
    justify-items: start; 
  `}
`;

const Avatar = styled.img``;

const FounderInfo = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const FounderWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FounderName = styled.p`
  font: ${({ theme }) => theme.variants.body3};
`;

const FounderSocialsContainer = styled.ul`
  all: unset;
  display: flex;
  gap: 11px;
  font: ${({ theme }) => theme.variants.body3};
`;

const FounderSocialsItem = styled.li`
  all: unset;

  & > svg > g > path {
    fill: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const OtherContactsContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  justify-items: center;

  ${media.greaterThan("large")`
     justify-items: start;
  `}
`;

const OtherContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > p {
    color: ${({ theme }) => theme.colors.secondaryHoverText};
    font: ${({ theme }) => theme.variants.body5};
    text-align: center;
  }
  & > svg > path {
    fill: #b6b6b6;
  }
`;

const LanguageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const CopyrightContainer = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryHoverText};

  text-align: center;
`;

const CopyrightDescription = styled.p`
  color: #a8a8aa;
  margin: 0 auto;
  margin-bottom: 1.25rem;
  max-width: 39rem;
`;

const StyledLogo = styled(Logo)`
  min-width: 70px;
  max-width: 119px;
  margin-bottom: 1.25rem;
`;

const CopyrightText = styled.p`
  color: #a8a8aa;
`;

const Highlight = styled.span`
  color: #fff;
`;

export default Footer;
