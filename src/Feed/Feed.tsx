import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {tweets} from '../../mock/tweets';
import {TweetContent} from './components/TweetContent';

export const Feed = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {tweets.map(tweet => {
            return <TweetContent tweet={tweet} key={tweet.id} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
