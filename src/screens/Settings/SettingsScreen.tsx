import React from 'react';
import { Text } from 'react-native';
import { Screen } from '@components/common/Screen';
import Button from '@components/Button';
import { useDispatch, useSelector } from 'react-redux';

export const SettingsScreen = () => {
  return (
    <Screen>
      <Text style={{ marginBottom: 16 }}>Settings Screen</Text>
    </Screen>
  );
};
