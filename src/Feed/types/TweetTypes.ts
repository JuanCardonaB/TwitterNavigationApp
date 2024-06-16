import {RouteProp} from '@react-navigation/native';

interface Author {
  name: string;
  screenName: string;
  avatar: string;
}

export interface TweetTypes {
  author: Author;
  id: string;
  fullText: string;
  retweetCount: number;
  replyCount: number;
  favoriteCount: number;
  like?: boolean;
  retweet?: boolean;
}

export type RootStackParamList = {
  Feed: undefined;
  Notifications: undefined;
  Settings: undefined;
  TweetDetails: {tweet: TweetTypes};
};

export type TweetDetailsRouteProp = RouteProp<
  RootStackParamList,
  'TweetDetails'
>;
