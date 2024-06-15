import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {TweetContent} from '../Feed/components/TweetContent';
import {TweetDetailsRouteProp} from '../Feed/types/TweetTypes';

export const TweetDetails = () => {
  const {params} = useRoute<TweetDetailsRouteProp>();
  return (
    <View>
      <TweetContent tweet={params.tweet} />
    </View>
  );
};
