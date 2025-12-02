// src/assets/index.ts

export const Images = {
  logo: require('./images/logo.png'),
} as const;

export type ImageKeys = keyof typeof Images;

export const Icons = {
  settings: require('./icons/ic_setting.png'),
};
