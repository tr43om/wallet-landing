export type BlogType = {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  author: {
    name: string;
    position: string;
    avatarUrl: string;
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
  photoUrl: string;
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
