import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { AppTabsParamList } from './types';
import { HomeScreen } from '@screens/Home/HomeScreen';
import { SettingsScreen } from '@screens/Settings/SettingsScreen';

const Tab = createBottomTabNavigator<AppTabsParamList>();

export const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
