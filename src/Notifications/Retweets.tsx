import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {notifications} from '../../mock/notifications';
import {Notification} from './components/Notification';

export const RetweetNotifications = () => {
  const data = notifications.filter(
    notification => notification.type === 'retweet',
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {data.map(notification => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
