import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useCallback } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import { ORANGE_PRIMARY } from '../consts';
import CustomButton from '../components/CustomButton';
import InviteFriends from '../../assets/InviteFriends.png';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  const onInvitePress = useCallback(() => {
    navigation.navigate('InviteFriends');
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <NavigationHeader />
      <View style={styles.container}>
        <Text style={styles.titleLabel}>Connect with your friends</Text>
        <Text style={styles.description}>Invite your friends and grow your followers!</Text>
        <Image source={InviteFriends} resizeMode="contain" style={{ flex: 1, maxWidth: '100%' }} />
        <CustomButton title="Invite firends" onPress={onInvitePress} />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    flex: 1,
  },
  titleLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: ORANGE_PRIMARY,
  },
  description: {
    paddingTop: 36,
    fontSize: 16,
    fontWeight: '400',
    color: '#555555',
  },
});
