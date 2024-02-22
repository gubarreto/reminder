import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useGlobal} from '../context/global';
import {
  SplashScreen,
  AccountScreen,
  SecurityScreen,
  SettingsScreen,
  DashboardScreen,
  AppearanceScreen,
} from '../screens';

import {styleApp} from '../assets/styleApp';

const Stack = createStackNavigator();

const MainRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Dashboard"
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Security" component={SecurityScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Appearance" component={AppearanceScreen} />
    </Stack.Navigator>
  );
};

export const Routes = () => {
  const {globalProps} = useGlobal();

  return globalProps?.isAppLoading ?
    <SplashScreen />
  : 
    <MainRoutes />
};