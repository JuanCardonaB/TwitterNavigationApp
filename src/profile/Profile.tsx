import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

const Option = ({title}: {title: string}) => {
  return (
    <TouchableOpacity style={styles.option}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export const Profile = () => {
  const color = useColorScheme();
  console.log(color);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.top}>
          <View style={styles.header}>
            <Text>Profile</Text>
            <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
              <Text>Profile</Text>
              <Text>Profile</Text>
            </View>
          </View>
          <View style={styles.userInfo}>
            <Image
              style={{width: 150, height: 150}}
              source={require('../../public/ProfileImages/profile.png')}
            />
            <Text style={styles.userName}>Juan Cardona</Text>
            <Text style={styles.userEmailPhone}>
              juanjocarbol@gmail.com | +57 317 715 3442
            </Text>
          </View>
        </View>
        <View style={[styles.card, {marginTop: 40}]}>
          <Option title="Edit profile" />
          <Option title="Notification" />
          <Option title="Lenguage" />
        </View>

        <View style={[styles.card, {marginTop: 40}]}>
          <Option title="Edit profile" />
          <Option title="Notification" />
          <Option title="Lenguage" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mtImage = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  top: {
    height: 250,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#9999',
    marginBottom: mtImage,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: -mtImage,
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
