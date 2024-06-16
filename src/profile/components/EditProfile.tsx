import React from 'react';
import {Text, View, useColorScheme} from 'react-native';

export const EditProfile = () => {
  const theme = useColorScheme();
  return (
    <View>
      <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>
        EditProfile
      </Text>
    </View>
  );
};
