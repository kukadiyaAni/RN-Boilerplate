/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useTheme } from '@theme/useTheme';
import { AppColors } from '@theme/colors';
import { useMemo } from 'react';
import { getFormattedDate } from '@utils/service';
import Button from '@components/Button';
import AlertPopup from '@components/AlertPopup';
import ConfirmationPopup from '@components/ConfirmationPopup';
import { Icons, Images } from '@assets/index';
import Date from '@assets/svgs/ic_date.svg';
import A from '@assets/svgs/ic_a.svg';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.container}>
          <Image source={Images.logo} style={styles.logoStyle} />
          <Text style={styles.text}>Welcome to RN Boilerplate!</Text>

          <Button title="Hello" />
          <Image source={Icons.settings} style={styles.logoStyle} />
          <Date width={120} height={40} />
          <A width={120} height={40} fill={'red'} />
        </View>
        <AlertPopup
          visible={false}
          message="This is an alert message."
          buttonText="OK"
          onCancel={() => {}}
        />
        <ConfirmationPopup
          visible={false}
          message="Are you sure you want to proceed?"
          positiveText="Yes"
          nagativeText="No"
          onSubmit={() => {}}
          onCancel={() => {}}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      padding: 16,
    },
    logoStyle: {
      height: 100,
      width: 100,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    btn: {
      height: 48,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
      backgroundColor: colors.primary,
    },
    btnDisabled: {
      opacity: 0.6,
    },
    text: {
      fontWeight: '600',
      fontSize: 16,
      color: colors.white,
    },
  });

export default App;
