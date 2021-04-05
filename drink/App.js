import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View, InteractionManager } from 'react-native';
import Login from './login/login'
import Main from './main/main'
import Settings from './settings/settings'
import AsyncStorage from '@react-native-community/async-storage';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Badge from './settings/badge'
import Main2 from './main/main'
import Profilescene from './main/profile'
import Welcomescreen from './Welcome/welcomescreen';
const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 60,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
function RootStack() {

  //const [showOneTimeScreen, setShowOneTimeScreen] = useState(false);
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Welcome" screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, transitionSpec:{open: config, close: config}}} mode="modal" headerMode="none"
    >
      <Stack.Screen name="Welcome" component={Welcomescreen} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Badge" component={Badge} />
      <Stack.Screen name="Main" component={Main2} />
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="Profile" component={Profilescene} />

    </Stack.Navigator>
    </NavigationContainer>
  )
 
}

export default RootStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
