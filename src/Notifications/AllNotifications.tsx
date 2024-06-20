import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {notifications} from '../../mock/notifications';
import {Notification} from './components/Notification';

export const AllNotifications = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {notifications.map(notification => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
