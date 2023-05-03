import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import SocialnetOrange from '../../assets/socialnet_orange.png';
import { Ionicons } from '@expo/vector-icons';

function NavigationHeader() {
  return (
    <View style={styles.container}>
      <Image source={SocialnetOrange} style={styles.title} resizeMode="contain" />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Ionicons name="search-outline" size={24} color="#808080" />
        <Ionicons name="notifications-outline" size={24} color="#808080" />
        <Ionicons name="md-menu-sharp" size={24} color="#808080" />
      </View>
    </View>
  );
}

export default NavigationHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    elevation: 30,
    backgroundColor: '#FDFDFD',
  },
  title: {
    maxWidth: 120,
  },
});
