import React from 'react';
import Login from '../login/login'
import Main from '../main/main'
import App from './main'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const Navigator = createStackNavigator({
    Login: { screen: Login },
    Main: {screen: Main},
    App: {screen: App}
  });
  
const App = createAppContainer(Navigator);


export default test;