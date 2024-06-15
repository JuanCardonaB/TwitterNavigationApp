import React from 'react';
import {RootStackParamList, TweetTypes} from '../types/TweetTypes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Pressable, useColorScheme} from 'react-native';
import {TweetContent} from './TweetContent';

export const Tweet = ({tweet}: {tweet: TweetTypes}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useColorScheme();

  const colorBorder = theme === 'dark' ? 'lightgray' : 'gray';

  return (
    <Pressable
      style={{borderBottomColor: colorBorder, borderBottomWidth: 0.2}}
      onPress={() => {
        navigate('TweetDetails', {tweet});
      }}>
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};
