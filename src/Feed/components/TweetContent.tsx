import React from 'react';
import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {TweetTypes} from '../types/TweetTypes';

export const TweetContent = ({tweet}: {tweet: TweetTypes}) => {
  const theme = useColorScheme();
  const textColor = theme === 'dark' ? '#ddd' : 'black';
  const commentRoute =
    theme === 'dark'
      ? require('../../../public/TweetIcons/commentDarkMode.png')
      : require('../../../public/TweetIcons/speech-bubble.png');
  const retweetRoute =
    theme === 'dark'
      ? require('../../../public/TweetIcons/retweet.png')
      : require('../../../public/TweetIcons/repost.png');
  const likeRoute =
    theme === 'dark'
      ? require('../../../public/TweetIcons/love_darkmode.png')
      : require('../../../public/TweetIcons/love.png');
  const shareRoute =
    theme === 'dark'
      ? require('../../../public/TweetIcons/share_darkmode.png')
      : require('../../../public/TweetIcons/share.png');

  const likedRoute = require('../../../public/TweetIcons/heart.png');
  const retweetedRoute = require('../../../public/TweetIcons/repeat.png');

  return (
    <View style={styles.container}>
      <Image
        source={{uri: tweet.author.avatar.replace('_normal', '')}}
        style={styles.avatarImage}
      />
      <View style={styles.tweetContent}>
        <View style={styles.authorScreenName}>
          <Text
            style={[styles.authorName, {color: textColor}]}
            numberOfLines={1}>
            {tweet.author.name}
          </Text>
          <Text style={styles.authorUserName}>@{tweet.author.screenName}</Text>
          <Text style={styles.authorUserName}>·</Text>
          <Text style={styles.authorUserName}>2h</Text>
        </View>
        <Text style={[styles.description, {color: textColor}]}>
          {tweet.fullText}
        </Text>
        <View style={styles.actions}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={commentRoute} />
            <Text style={{color: textColor}}>{tweet.replyCount}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={tweet.retweet ? retweetedRoute : retweetRoute}
            />
            <Text style={{color: tweet.retweet ? '#00a28e' : textColor}}>
              {tweet.retweetCount}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={tweet.like ? likedRoute : likeRoute}
            />
            <Text style={{color: tweet.like ? '#f9595f' : textColor}}>
              {tweet.favoriteCount}
            </Text>
          </View>
          <Image style={styles.icon} source={shareRoute} />
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
