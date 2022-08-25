/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListPage from './list/List';
import Icon from 'react-native-vector-icons/AntDesign';
import {PRIMARY, GRAY_DARK} from '../theme/colors';
import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const tabs = [
  {
    name: 'ListPage',
    activeIcon: <Icon name="home" color="#fff" size={25} />,
    inactiveIcon: <Icon name="home" color={GRAY_DARK} size={25} />,
  },
  {
    name: 'QrReader',
    activeIcon: <Icon name="qrcode" color="#fff" size={25} />,
    inactiveIcon: <Icon name="qrcode" color={GRAY_DARK} size={25} />,
  },
  {
    name: 'User',
    activeIcon: <Icon name="user" color="#fff" size={25} />,
    inactiveIcon: <Icon name="user" color={GRAY_DARK} size={25} />,
  },
];

const Tab = createBottomTabNavigator();

function QrReader() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function User() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Home = ({navigation}) => {
  return (
    <View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="ListPage" component={ListPage} />
        <Tab.Screen name="QrReader" component={QrReader} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
      <Tabbar
        tabs={tabs}
        tabBarContainerBackground={PRIMARY}
        tabBarBackground="#fff"
        activeTabBackground={PRIMARY}
        labelStyle={{color: GRAY_DARK, fontWeight: '600', fontSize: 11}}
        onTabChange={item => {
          navigation.navigate(item['name']);
        }}
      />
    </View>
  );
};

export default Home;
