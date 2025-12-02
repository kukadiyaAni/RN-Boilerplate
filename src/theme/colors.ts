// Base palette (raw colors)
export const palette = {
  primary: '#1E88E5',
  primaryLight: '#90CAF9',

  secondary: '#FFB300',
  danger: '#E53935',
  success: '#43A047',
  warning: '#FB8C00',

  black: '#000000',
  blackTrans: '#00000080',
  whiteTrans: '#ffffff80',
  white: '#FFFFFF',
  gray100: '#F5F5F5',
  gray200: '#E0E0E0',
  gray300: '#BDBDBD',
  gray500: '#757575',
  gray700: '#424242',
};

// Light theme tokens
export const lightColors = {
  ...palette,
  primary: palette.primary,
  secondary: palette.secondary,
  white: palette.black,
  black: palette.white,
  blackTrans: palette.blackTrans,
};

// Dark theme tokens (for future use)
export const darkColors = {
  ...palette,
  primary: palette.primaryLight,
  secondary: palette.secondary,
  white: palette.white,
  black: palette.black,
  blackTrans: palette.whiteTrans,
};

export type AppColors = typeof lightColors;
