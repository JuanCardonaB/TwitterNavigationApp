import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Feed} from '../Feed/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notifications} from '../Notifications/Notifications';
import {Settings} from '../Settings/Settings';

const Tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export const Router = () => {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
};
