import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Feed} from '../Feed/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notifications} from '../Notifications/Notifications';
import {Settings} from '../Settings/Settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TweetDetails} from '../TweetDetails/TweetDetails';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FollowingTweets} from '../Feed/components/FollowingTweets';

const TopTab = createMaterialTopTabNavigator();

const TopTabGroup = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 14,
        },
      }}>
      <TopTab.Screen name="News" component={Feed} />
      <TopTab.Screen name="Following" component={FollowingTweets} />
      <TopTab.Screen name="Likes" component={FollowingTweets} />
    </TopTab.Navigator>
  );
};

// Tabs
const Tab = createBottomTabNavigator();
const TabGroup = () => {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={TopTabGroup} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

// Stack
const Stack = createNativeStackNavigator();
const StackGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export const Router = () => {
  return (
    <NavigationContainer>
      <StackGroup />
    </NavigationContainer>
  );
};
