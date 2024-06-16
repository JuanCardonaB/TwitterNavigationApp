import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Tweet} from './Tweet';
import {tweets} from '../../../mock/tweets';

export const FollowingTweets = () => {
  const data = tweets.slice(20, 50);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {data.map(tweet => {
            return <Tweet tweet={tweet} key={tweet.id} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
