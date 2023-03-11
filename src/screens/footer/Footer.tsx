import { useState } from "react";
import styled, { useTheme } from "styled-components";
import media from "styled-media-query";
import { useMediaQuery } from "react-responsive";

import { SelectOptionType } from "types";
import { languages } from "data";

import { Menu, Socials } from "./components";
import { Container, Select } from "components";

// Contact founder socials
import { ReactComponent as TelegramIcon } from "assets/icons/socials/telegram.svg";
import { ReactComponent as EmailIcon } from "assets/icons/socials/email.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/socials/facebook-alt.svg";

// Other contacts icons
import { ReactComponent as AtIcon } from "assets/icons/socials/@.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/socials/phone.svg";

// Logo
import { ReactComponent as Logo } from "assets/icons/other/logo.svg";

// Founder photo
import founder from "assets/photos/default/founder.webp";

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
          <Socials />
          <Menu />

          {isTabletOrMobile && (
            <ContactContainer>
              <Title $mb={20}>Need help?</Title>

              <ContactFounderContainer>
                <FounderWrapper>
                  <Avatar src={founder} alt="founder" width={48} height={48} />
                  <FounderInfo>
                    <FounderName>Allison Carder</FounderName>
                    <FounderSocialsContainer>
                      <FounderSocialsItem>
                        <a href="#">
                          <TelegramIcon />
                        </a>
                      </FounderSocialsItem>
                      <FounderSocialsItem>
                        <a href="#">
                          <EmailIcon />
                        </a>
                      </FounderSocialsItem>
                      <FounderSocialsItem>
                        <a href="#">
                          <FacebookIcon />
                        </a>
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
              <Title $mb={21}>24/7 Support</Title>
              <ContactContainerDesktopWrapper>
                <FounderInfo>
                  <FounderName>Write to us</FounderName>
                  <FounderSocialsContainer>
                    <FounderSocialsItem>
                      <a>
                        <TelegramIcon />
                      </a>
                    </FounderSocialsItem>
                    <FounderSocialsItem>
                      <a>
                        <EmailIcon />
                      </a>
                    </FounderSocialsItem>

                    <FounderSocialsItem>
                      <a href="#">
                        <FacebookIcon />
                      </a>
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
            <StyledSelect
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
    padding-top: 84px;
    padding-bottom: 5.8125rem;
    
  `}
`;

const Content = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 auto;

  ${media.greaterThan("large")`
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
    max-width: 1038px;
    
  `}
`;

const StyledSelect = styled(Select)`
  padding-block: 8px;
  img {
    width: 22px;
    border-radius: 0;
  }
`;

const Title = styled.h3<{ $align?: "left" | "right"; $mb?: number }>`
  font: ${({ theme }) => theme.variants.body1};
  text-align: ${({ $align }) => ($align ? $align : "center")};

  margin-bottom: ${({ $mb }) => ($mb ? `${$mb}px` : "10px")};

  ${media.greaterThan("large")`
    text-align: left;
  `}
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
  cursor: pointer;

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

const OtherContactItem = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover p {
    color: #fff;
  }

  svg {
    width: 16.67px;
    height: 16.67px;
  }

  &:hover svg > path {
    fill: #fff;
  }

  & > p {
    all: unset;
    color: ${({ theme }) => theme.colors.secondaryHoverText};
    font: ${({ theme }) => theme.variants.body5};
    text-align: center;

    ${media.greaterThan("large")`
      font: ${({ theme }) => theme.variants.body4};
    `}
  }
  & > svg > path {
    fill: #e6e6e6;
  }
`;

const LanguageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const CopyrightContainer = styled.div`
  padding-top: 2.2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondaryHoverText};

  text-align: center;
`;

const CopyrightDescription = styled.p`
  font: ${({ theme }) => theme.variants.body5};
  color: #a8a8aa;
  margin: 0 auto;
  margin-bottom: 2.25rem;
  max-width: 39rem;

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.caption1};
  `}
`;

const StyledLogo = styled(Logo)`
  min-width: 70px;
  max-width: 70px;
  margin-bottom: 0.95rem;

  ${media.greaterThan("large")`
    max-width: 119px; 
  `}
`;

const CopyrightText = styled.p`
  color: #a8a8aa;
  font: ${({ theme }) => theme.variants.caption2};
`;

const Highlight = styled.a`
  all: unset;
  cursor: pointer;
  color: #fff;
`;

export default Footer;
