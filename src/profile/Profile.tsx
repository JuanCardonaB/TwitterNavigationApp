import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Option} from './components/Options';

export const Profile = () => {
  const theme = useColorScheme();
  const color = theme === 'dark' ? '#ddd' : 'black';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../../public/ProfileImages/profile.png')}
        />
        <Text style={[styles.userName, {color: color}]}>Juan Cardona</Text>
        <Text style={styles.userEmailPhone}>
          juanjocarbol@gmail.com | +57 317 715 3442
        </Text>
      </View>
      <View style={[styles.card, {marginTop: 40}]}>
        <Option
          title="Edit profile"
          borderTop={true}
          navigateTo="EditProfile"
        />
        <Option title="Notification" />
        <Option title="Lenguage" borderBottom={true} />
      </View>

      <View style={[styles.card, {marginTop: 40}]}>
        <Option title="Edit profile" borderTop={true} />
        <Option title="Notification" />
        <Option title="Lenguage" borderBottom={true} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userEmailPhone: {
    fontSize: 16,
    color: '#777',
    marginTop: 3,
  },
  card: {
    backgroundColor: '#D3D3D3',
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
