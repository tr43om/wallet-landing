import { DefaultTheme } from "styled-components";

const fonts = {
  default: "Plex",
  plexBold: "PlexBold",
  plexSemiBold: "PlexSemiBold",
  plexMedium: "PlexMedium",
};

const variants = {
  // Desktop
  title1: `3rem ${fonts.plexBold}`, // font: 700 48px 'IBM Plex Sans',
  title2: `2.5rem ${fonts.plexBold}`, // font: 700 40px 'IBM Plex Sans',
  title3: `2rem ${fonts.plexBold}`, // font: 700 32px 'IBM Plex Sans',
  title4: `1.75rem ${fonts.plexSemiBold}`, // font: 600 28px 'IBM Plex Sans',
  title5: `1.25rem ${fonts.plexSemiBold}`, // font: 600 20px 'IBM Plex Sans',
  title6: `1.25rem ${fonts.plexMedium}`, // font: 500 20px 'IBM Plex Sans',
  title7: `1.25rem ${fonts.default}`, // font: 500 20px 'IBM Plex Sans',

  body1: `1.125rem ${fonts.plexMedium}`, // font: 500 18px 'IBM Plex Sans',`
  body2: `1.125rem ${fonts.default}`, // font: 400 18px 'IBM Plex Sans',`
  body3: `1rem ${fonts.plexMedium}`, // font: 500 16px 'IBM Plex Sans',`
  body4: `1rem ${fonts.default}`, // font: 400 16px 'IBM Plex Sans',`
  body5: `0.875rem ${fonts.default}`, // font: 400 14px 'IBM Plex Sans',`

  caption1: `0.75rem ${fonts.default}`, // font: 400 12px 'IBM Plex Sans',`

  // Mobile
  title8: `2.125rem ${fonts.plexBold}`, // font: 700 34px 'IBM Plex Sans',
  title9: `1.75rem ${fonts.plexBold}`, // font: 700 28px 'IBM Plex Sans',
  title10: `1.125rem ${fonts.plexBold}`, // font: 700 18px 'IBM Plex Sans',
  title11: `1.125rem ${fonts.plexSemiBold}`, // font: 600 18px 'IBM Plex Sans',

  body6: `1rem ${fonts.plexSemiBold}`, // font: 600 16px 'IBM Plex Sans',`
  body7: `0.875rem ${fonts.plexMedium}`, // font: 500 14px 'IBM Plex Sans',`

  caption2: `0.8125rem ${fonts.default}`, // font: 400 13px 'IBM Plex Sans',`
  caption3: `0.75rem ${fonts.plexBold}`, // font: 700 12px 'IBM Plex Sans',`
};

const colors = {
  primaryDark: "#25253E",
  primaryBlue: "#3139CE",
  primaryLavanda: "#D6D7F5",

  primaryWhite: "#ffffff",

  secondaryLight: "#F4F6FB",
  secondaryPressed: "#6F75E5",
  secondaryActiveText: "#535762",
  secondaryHoverText: "#9B9B9B",
  secondaryInactiveText: "#E1E1E4",

  grayExtraLight: "#f6f6f6",
  accent: "#f5332D",

  background: "#ffffff",
};

const breakpoints = {
  mobileS: "320",
  mobileM: "375",
  mobileL: "425",
  tablet: "768",
  laptop: "1170",
  desktop: "1440",
};

const devices = {
  mobile: `(min-width: ${breakpoints.mobileS}px)`,
  tabletAndBelow: `(max-width: ${breakpoints.tablet}px)`,
  laptopAndBelow: `(max-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.laptop}px)`,
};

export const theme: DefaultTheme = {
  fonts,
  colors,
  variants,
  breakpoints,
  devices,
};
