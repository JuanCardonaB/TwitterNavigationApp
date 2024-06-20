// export enum NotificationTypes {
//   Mention = 'mention',
//   Retweet = 'retweet',
//   Like = 'like',
// }

export interface NotificationType {
  id: string;
  type: string;
  content: string;
  avatar: string;
  timestamp: string;
  read: boolean;
}
