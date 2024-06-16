import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Tweet} from './Tweet';
import {likedTweets} from '../../../mock/likedTweets';
import {ScrollView} from 'react-native';

export const LikedTweets = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {likedTweets.map(tweet => {
            return <Tweet tweet={tweet} key={tweet.id} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
