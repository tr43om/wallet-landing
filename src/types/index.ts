type ImagesTypes = {
  retina2x: string;
  fallback: string;
  webp: string;
};

export type BlogType = {
  imageUrl: ImagesTypes;
  date: string;
  title: string;
  description: string;
  author: {
    name: string;
    position: string;
    avatarUrl: ImagesTypes;
  };
};

export type CryptoType = { name: string; shortname: string; icon: string };

export type LocationType = {
  city: string;
  address: string;
};

export type MemberType = {
  name: string;
  position: string;
  photoUrl: ImagesTypes;
};

export type FAQType = {
  question: string;
  answer: string;
  iconUrl: string;
};

export type SelectOptionType = {
  value: string;
  label: string;
  iconUrl: string;
};
