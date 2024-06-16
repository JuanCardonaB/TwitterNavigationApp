import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Tweet} from './Tweet';
import {ScrollView} from 'react-native';
import {tweets} from '../../../mock/tweets';

export const LikedTweets = () => {
  const data = tweets.filter(tweet => tweet.like === true);
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
