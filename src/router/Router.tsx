import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Feed} from '../Feed/Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Notifications} from '../Notifications/Notifications';
import {Profile} from '../profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TweetDetails} from '../TweetDetails/TweetDetails';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FollowingTweets} from '../Feed/components/FollowingTweets';
import {SafeAreaView, View, useColorScheme} from 'react-native';
import {LikedTweets} from '../Feed/components/LikedTweets';
import {EditProfile} from '../profile/components/EditProfile';

const TopTab = createMaterialTopTabNavigator();

const TopTabGroup = () => {
  const currentTheme = useColorScheme();
  const theme = currentTheme === 'dark' ? '#111' : 'white';
  return (
    <View style={{flex: 1, backgroundColor: theme}}>
      <SafeAreaView style={{flex: 1}}>
        <TopTab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              textTransform: 'capitalize',
              fontSize: 14,
            },
          }}>
          <TopTab.Screen name="News" component={Feed} />
          <TopTab.Screen name="Following" component={FollowingTweets} />
          <TopTab.Screen name="Likes" component={LikedTweets} />
        </TopTab.Navigator>
      </SafeAreaView>
    </View>
  );
};

// Tabs
const Tab = createBottomTabNavigator();
const TabGroup = () => {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen
        options={{headerShown: false}}
        name="Feed"
        component={TopTabGroup}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
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
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export const Router = () => {
  const currentTheme = useColorScheme();
  const theme = currentTheme === 'dark' ? DarkTheme : DefaultTheme;
  return (
    <NavigationContainer theme={theme}>
      <StackGroup />
    </NavigationContainer>
  );
};
