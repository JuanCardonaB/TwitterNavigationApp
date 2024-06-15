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
}
