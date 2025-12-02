import {useColorScheme} from 'react-native';
import {lightColors, darkColors, AppColors} from './colors';

type ThemeResult = {
  colors: AppColors;
  isDark: boolean;
};

export const useTheme = (): ThemeResult => {
  const scheme = useColorScheme(); // 'light' | 'dark' | null
  const isDark = scheme === 'dark';

  return {
    colors: isDark ? darkColors : lightColors,
    isDark,
  };
};
