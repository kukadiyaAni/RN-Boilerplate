import React, { useMemo } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { AppColors } from '@theme/colors';
import { useTheme } from '@theme/useTheme';
import { fontSize, hp } from '@utils/responsive';

type ButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  textStyle,
  containerStyle,
  testID,
}) => {
  const textID = testID || title.replace(/ /g, '').toLowerCase();
  const { colors } = useTheme();

  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, containerStyle]}
      onPress={onPress}
      activeOpacity={0.7}
      testID={textID + 'Button'}
    >
      <Text
        style={[styles.buttonText, textStyle]}
        testID={textID + 'ButtonText'}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    buttonContainer: {
      paddingVertical: hp(12),
      paddingHorizontal: hp(16),
      borderRadius: 6,
      backgroundColor: colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: fontSize(16),
      fontWeight: '600',
      color: colors.white,
    },
  });

export default Button;
