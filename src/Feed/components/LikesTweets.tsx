import React from 'react';
import {SafeAreaView, Text, View, useColorScheme} from 'react-native';

export const LikeTweets = () => {
  const theme = useColorScheme();
  const color = theme === 'dark' ? '#ddd' : 'black';
  return (
    <SafeAreaView>
      <View>
        <Text style={{color: color}}>LikeTweets</Text>
      </View>
    </SafeAreaView>
  );
};
