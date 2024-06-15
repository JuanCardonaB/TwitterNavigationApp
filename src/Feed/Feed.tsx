import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {tweets} from '../../mock/tweets';
import {Tweet} from './components/Tweet';

export const Feed = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {tweets.map(tweet => {
            return <Tweet tweet={tweet} key={tweet.id} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
