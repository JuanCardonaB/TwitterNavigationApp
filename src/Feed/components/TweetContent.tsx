import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TweetTypes} from '../types/TweetTypes';

export const TweetContent = ({tweet}: {tweet: TweetTypes}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: tweet.author.avatar.replace('_normal', '')}}
        style={styles.avatarImage}
      />
      <View style={styles.tweetContent}>
        <View style={styles.authorScreenName}>
          <Text style={styles.authorName} numberOfLines={1}>
            {tweet.author.name}
          </Text>
          <Text style={styles.authorUserName}>@{tweet.author.screenName}</Text>
          <Text style={styles.authorUserName}>·</Text>
          <Text style={styles.authorUserName}>2h</Text>
        </View>
        <Text style={styles.description}>{tweet.fullText}</Text>
        <View style={styles.actions}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../public/TweetIcons/speech-bubble.png')}
            />
            <Text>{tweet.replyCount}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../public/TweetIcons/repost.png')}
            />
            <Text>{tweet.retweetCount}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../public/TweetIcons/love.png')}
            />
            <Text>{tweet.favoriteCount}</Text>
          </View>
          <Image
            style={styles.icon}
            source={require('../../../public/TweetIcons/share.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: 'gray',
  },
  avatarImage: {
    width: 44,
    height: 44,
    borderRadius: 25,
  },
  authorName: {
    fontWeight: 'bold',
    maxWidth: 150,
  },
  authorUserName: {
    color: 'gray',
  },
  authorScreenName: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  tweetContent: {
    display: 'flex',
    gap: 10,
    flex: 1,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
  icon: {
    width: 15,
    height: 15,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});
