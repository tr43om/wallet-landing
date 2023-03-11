// Types
import { CryptoType, BlogType, LocationType, MemberType, FAQType } from "types";

// Crypto icons
import ACTIcon from "assets/icons/crypto/ACTIcon.svg";
import BCHIcon from "assets/icons/crypto/BCHIcon.svg";
import BNTIcon from "assets/icons/crypto/BNTIcon.svg";
import BTCIcon from "assets/icons/crypto/BTCIcon.svg";
import COMPIcon from "assets/icons/crypto/COMPIcon.svg";
import EMCIcon from "assets/icons/crypto/EMCIcon.svg";
import ETHIcon from "assets/icons/crypto/ETHIcon.svg";
import FTMIcon from "assets/icons/crypto/FTMIcon.svg";
import GINIcon from "assets/icons/crypto/GINIcon.svg";
import INCIcon from "assets/icons/crypto/INCIcon.svg";
import LTCIcon from "assets/icons/crypto/LTCIcon.svg";
import MANAIcon from "assets/icons/crypto/MANAIcon.svg";
import NGCIcon from "assets/icons/crypto/NGCIcon.svg";
import REPIcon from "assets/icons/crypto/REPIcon.svg";
import SNTIcon from "assets/icons/crypto/SNTIcon.svg";
import SOLIcon from "assets/icons/crypto/SOLIcon.svg";
import TRXIcon from "assets/icons/crypto/TRXIcon.svg";
import USDTIcon from "assets/icons/crypto/USDT.svg";
import XLMIcon from "assets/icons/crypto/XLMIcon.svg";

// Flags icons
import russianFlagIcon from "assets/icons/flags/russia.svg";
import englandFlagIconfrom from "assets/icons/flags/england.svg";

// Questions icons
import LiquidityIcon from "assets/icons/faq/liquidity.svg";
import LegalIcon from "assets/icons/faq/legal.svg";
import RoadmapIcon from "assets/icons/faq/roadmap.svg";
import SecurityIcon from "assets/icons/faq/security.svg";
import StatusMigrationIcon from "assets/icons/faq/status-migration.svg";
import TeamIcon from "assets/icons/faq/team.svg";

// Blog images
import blogImage1 from "assets/photos/default/blog-1.webp";
import blogImage1Fallback from "assets/photos/fallback/blog-1@fallback.png";
import blogImage1retina from "assets/photos/@2x/blog-1@2x.webp";

import blogImage2 from "assets/photos/default/blog-2.webp";
import blogImage2Fallback from "assets/photos/fallback/blog-2@fallback.png";
import blogImage2retina from "assets/photos/@2x/blog-2@2x.webp";

import blogImage3 from "assets/photos/default/blog-3.webp";
import blogImage3Fallback from "assets/photos/fallback/blog-2@fallback.png";
import blogImage3retina from "assets/photos/@2x/blog-3@2x.webp";

// Authors photos
import authorAvatar1 from "assets/photos/default/avatar-1.webp";
import authorAvatar1Fallback from "assets/photos/fallback/avatar@fallback.png";
import authorAvatar1retina from "assets/photos/@2x/avatar@2x.webp";

import authorAvatar2 from "assets/photos/default/avatar-2.webp";
import authorAvatar2Fallback from "assets/photos/fallback/avatar2@fallback.png";
import authorAvatar2retina from "assets/photos/@2x/avatar2@2x.png";

// Members photos
import member1 from "assets/photos/default/member1.webp";
import member1Fallback from "assets/photos/fallback/member1@fallback.png";
import member1retina from "assets/photos/@2x/member@2x.png";

import member2 from "assets/photos/default/member2.webp";
import member2Fallback from "assets/photos/fallback/member2@fallback.png";
import member2retina from "assets/photos/@2x/member1@2x.webp";

export const cryptos: CryptoType[] = [
  { name: "Bitcoin", shortname: "BTC", icon: BTCIcon },
  { name: "Etherium", shortname: "ETH", icon: ETHIcon },
  { name: "Tether", shortname: "USDT", icon: USDTIcon },
  { name: "Stellar", shortname: "XLM", icon: XLMIcon },
  { name: "Bitcoin Cash", shortname: "BCH", icon: BCHIcon },
  { name: "Augur", shortname: "REP", icon: REPIcon },
  { name: "Litecoin", shortname: "LTC", icon: LTCIcon },
  { name: "TRON", shortname: "TRX", icon: TRXIcon },
  { name: "Decentraland", shortname: "MANA", icon: MANAIcon },
  { name: "Achain", shortname: "ACT", icon: ACTIcon },
  { name: "Fantom", shortname: "FTM", icon: FTMIcon },
  { name: "Compound", shortname: "COMP", icon: COMPIcon },
  { name: "Status", shortname: "SNT", icon: SNTIcon },
  { name: "Bancor", shortname: "BNT", icon: BNTIcon },
  { name: "Solana", shortname: "SOL", icon: SOLIcon },
  { name: "GINCoin", shortname: "GIN", icon: GINIcon },
  { name: "NAGA", shortname: "NGC", icon: NGCIcon },
  { name: "Emercoin", shortname: "EMC", icon: EMCIcon },
  { name: "Ink", shortname: "INK", icon: INCIcon },
];

export const blogs: BlogType[] = [
  {
    date: "12 Oct 2021",
    title: "How Asset Tokenization Can Help Business Entrepreneurs",
    description:
      "Digital currencies made a lot of buzz in the past 10 years. In addition to a vast amount of terminology (cryptocurrency, blockchain, validation, etc.), hundreds of coins have appeared. But despite the significant figures for market cap, the actual impact on the economy has not yet been felt.",
    imageUrl: {
      fallback: blogImage1Fallback,
      retina2x: blogImage1retina,
      webp: blogImage1,
    },
    author: {
      name: "Daniel Frost",
      position: "Сryptocurrency expert",
      avatarUrl: {
        fallback: authorAvatar1Fallback,
        retina2x: authorAvatar1retina,
        webp: authorAvatar1,
      },
    },
  },

  {
    date: "01 Aug 2022",
    title: "How Asset Tokenization Can Help Business Entrepreneurs",
    description:
      "Digital currencies made a lot of buzz in the past 10 years. In addition to a vast amount of terminology (cryptocurrency, blockchain, validation, etc.), hundreds of coins have appeared. But despite the significant figures for market cap, the actual impact on the economy has not yet been felt.",
    imageUrl: {
      fallback: blogImage3Fallback,
      retina2x: blogImage3retina,
      webp: blogImage3,
    },
    author: {
      name: "Mark Thompson",
      position: "Entrepreneur",
      avatarUrl: {
        fallback: authorAvatar1Fallback,
        retina2x: authorAvatar1retina,
        webp: authorAvatar1,
      },
    },
  },

  {
    date: "04 March 2023",
    title:
      "Lacerat tristique orci ornare tortor diam. Vitae faucibus sed odio fringilla facilisis",
    description: "Yes",
    imageUrl: {
      fallback: blogImage2Fallback,
      retina2x: blogImage2retina,
      webp: blogImage2,
    },
    author: {
      name: "Mark Thompson",
      position: "Info Gypsy",
      avatarUrl: {
        fallback: authorAvatar2Fallback,
        retina2x: authorAvatar2retina,
        webp: authorAvatar2,
      },
    },
  },

  {
    date: "01 Aug 2022",
    title: "How Asset Tokenization Can Help Business Entrepreneurs",
    description:
      "Digital currencies made a lot of buzz in the past 10 years. In addition to a vast amount of terminology (cryptocurrency, blockchain, validation, etc.), hundreds of coins have appeared. But despite the significant figures for market cap, the actual impact on the economy has not yet been felt.",
    imageUrl: {
      fallback: blogImage1Fallback,
      retina2x: blogImage1retina,
      webp: blogImage1,
    },
    author: {
      name: "Mark Thompson",
      position: "Entrepreneur",
      avatarUrl: {
        fallback: authorAvatar1Fallback,
        retina2x: authorAvatar1retina,
        webp: authorAvatar1,
      },
    },
  },
];

export const locations: LocationType[] = [
  {
    city: "Tallin",
    address: "Tallinn, Kesklinna linnaosa, Poordi tn 3-75, 10156, Estonia.",
  },
  {
    city: "Kiev",
    address: "Kiev, Kesklinna linnaosa, Poordi tn 3-75, 10156, Ukraine.",
  },
  {
    city: "Dubai",
    address: "Dubai, Kesklinna linnaosa, Poordi tn 3-75, 10156, UAE.",
  },
];

export const members: MemberType[] = [
  {
    name: "Ralph Edwards",
    position: "Community manager",
    photoUrl: {
      fallback: member2Fallback,
      retina2x: member2retina,
      webp: member2,
    },
  },

  {
    name: "Arlene McCoy",
    position: "Community manager",
    photoUrl: {
      fallback: member1Fallback,
      retina2x: member1retina,
      webp: member1,
    },
  },
];

export const faqs: FAQType[] = [
  {
    question: "Liquidity",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ipsam repellendus voluptas voluptate dolores rerum aspernatur itaque totam exercitationem architecto sequi eum est, eaque perferendis pariatur error illo reiciendis saepe.",
    iconUrl: LiquidityIcon,
  },

  {
    question: "Status migration",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ipsam repellendus voluptas voluptate dolores rerum aspernatur itaque totam exercitationem architecto sequi eum est, eaque perferendis pariatur error illo reiciendis saepe.",
    iconUrl: StatusMigrationIcon,
  },
  {
    question: "Team",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ipsam repellendus voluptas voluptate dolores rerum aspernatur itaque totam exercitationem architecto sequi eum est, eaque perferendis pariatur error illo reiciendis saepe.",
    iconUrl: TeamIcon,
  },

  {
    question: "Roadmap",
    answer:
      "Digital currencies made a lot of buzz in the past 10 years. In addition to a vast amount of terminology (cryptocurrency, blockchain, validation, etc.), hundreds of coins have appeared. But despite the significant figures for market cap, the actual impact on the economy has not yet been felt. Digital currencies made a lot of buzz in the past 10 years. In addition to a vast amount of terminology (cryptocurrency, blockchain, validation, etc.), hundreds of coins have appeared. But despite the significant figures for market cap, the actual impact on the economy has not yet been felt. Digital currencies made a lot of buzz in the past 10 years. In addition to a vast amount of terminology (cryptocurrency, blockchain, validation, etc.), hundreds of coins have appeared. But despite the significant figures for market cap, the actual impact on the economy has not yet been felt.",
    iconUrl: RoadmapIcon,
  },
  {
    question: "Legal",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ipsam repellendus voluptas voluptate dolores rerum aspernatur itaque totam exercitationem architecto sequi eum est, eaque perferendis pariatur error illo reiciendis saepe.",
    iconUrl: LegalIcon,
  },
  {
    question: "Security",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ipsam repellendus voluptas voluptate dolores rerum aspernatur itaque totam exercitationem architecto sequi eum est, eaque perferendis pariatur error illo reiciendis saepe.",
    iconUrl: SecurityIcon,
  },
];

export const languages = [
  { value: "english", label: "English", iconUrl: englandFlagIconfrom },
  { value: "russian", label: "Russian", iconUrl: russianFlagIcon },
];
