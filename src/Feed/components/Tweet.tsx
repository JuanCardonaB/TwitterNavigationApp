import React from 'react';
import {RootStackParamList, TweetTypes} from '../types/TweetTypes';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import {TweetContent} from './TweetContent';

export const Tweet = ({tweet}: {tweet: TweetTypes}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigate('TweetDetails', {tweet});
      }}>
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',
  },
});
