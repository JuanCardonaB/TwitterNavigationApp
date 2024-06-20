import React from 'react';
import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {NotificationType} from '../types/NotificationsTypes';

interface NotificationProps {
  notification: NotificationType;
}

export const Notification = ({notification}: NotificationProps) => {
  const theme = useColorScheme();
  const color = theme === 'dark' ? '#ddd' : 'black';

  const timeAgo = (timestamp: string) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diff = now.getTime() - date.getTime();
    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    if (seconds < 60) {
      return `${Math.floor(seconds)}`;
    }

    if (minutes < 60) {
      return `${Math.floor(minutes)}`;
    }

    if (hours < 24) {
      return `${Math.floor(hours)}`;
    }

    return `${Math.floor(days)}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.read} />
      <Image
        source={{uri: notification.avatar}}
        width={50}
        height={50}
        style={styles.avatar}
      />
      <View>
        <Text style={{color: color}}>{notification.content}</Text>
        <Text style={{color: color}}>{timeAgo(notification.timestamp)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingVertical: 30,
    paddingHorizontal: 20,
    display: 'flex',
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 50,
  },
  read: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'green',
  },
});
