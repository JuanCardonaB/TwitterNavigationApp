import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {followingTweets} from '../../../mock/followingTweets';
import {Tweet} from './Tweet';

export const FollowingTweets = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {followingTweets.map(tweet => {
            return <Tweet tweet={tweet} key={tweet.id} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
