import React, { useMemo } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';

import Button from './Button';
import { useTheme } from '@theme/useTheme';
import { AppColors } from '@theme/colors';
import { fontSize, hp, SCREEN_WIDTH, wp } from '@utils/responsive';

type AlertPopupProps = {
  visible: boolean;
  message: string;
  buttonText: string;
  onCancel: () => void;
  isAllowPermission?: boolean;
  onSubmit?: () => void;
  // You can add more optional props later if needed
};

const AlertPopup: React.FC<AlertPopupProps> = ({
  visible,
  message,
  buttonText,
  onCancel,
  isAllowPermission,
  onSubmit,
}) => {
  const { colors } = useTheme();

  const styles = useMemo(() => createStyles(colors), [colors]);
  if (!visible) {
    return null;
  }

  const handlePress = () => {
    if (isAllowPermission && onSubmit) {
      onSubmit();
    } else {
      onCancel();
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        supportedOrientations={['portrait', 'landscape']}
        visible={visible}
      >
        <TouchableNativeFeedback testID="btnCancel" onPress={onCancel}>
          <View style={[styles.modalContainer]}>
            <View style={styles.modalSubContainer}>
              <Text style={styles.text}>{message}</Text>
              <View
                style={{
                  marginTop: hp(100),
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <Button
                  testID="SubmitButton"
                  title={buttonText}
                  containerStyle={{ width: wp(200) }}
                  onPress={handlePress}
                />
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </Modal>
    </View>
  );
};

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    modalContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: colors.blackTrans,
    },
    modalSubContainer: {
      padding: hp(30),
      backgroundColor: colors.white,
      borderRadius: hp(30),
      maxWidth: SCREEN_WIDTH,
      marginHorizontal: hp(25),
    },
    text: {
      fontSize: fontSize(23),
      marginTop: hp(40),
      padding: hp(10),
      color: colors.black,
      textAlign: 'center',
    },
  });

export default AlertPopup;
