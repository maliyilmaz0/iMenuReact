import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {PRIMARY} from '../theme/colors';
import Login from './Login';
import React from 'react';
import Home from './Home';
import MyTabs from './Home';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <StatusBar animated={true} backgroundColor={PRIMARY} />

    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Screen name="Login" component={Login}></Screen>
      <Screen name="MyTabs" component={MyTabs}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
