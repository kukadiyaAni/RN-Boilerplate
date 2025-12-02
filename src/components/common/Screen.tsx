import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@theme/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  statusBarStyle?: 'light-content' | 'dark-content';
};

export const Screen: React.FC<ScreenProps> = ({
  children,
  scroll = false,
  style,
  containerStyle,
  statusBarStyle = 'dark-content',
}) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.black },
        containerStyle,
      ]}
    >
      <StatusBar barStyle={statusBarStyle} backgroundColor={colors.black} />

      {scroll ? (
        <ScrollView contentContainerStyle={[styles.content, style]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
