import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import SocialnetWhite from '../../assets/socialnet_white.png';
import WelcomeBackground from '../../assets/welcome_background.jpg';

function Welcome() {
  const navigation = useNavigation();

  const onNextPress = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <ImageBackground source={WelcomeBackground} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.labels}>
          <Image source={SocialnetWhite} style={styles.titleLabel} />
          <Text style={styles.subtitleLabel}>Welcome</Text>
        </View>
        <CustomButton title="Get Started" onPress={onNextPress} />
      </View>
    </ImageBackground>
  );
}

const TEXT_COLOR = '#FDFDFD';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    justifyContent: 'space-between',
    backgroundColor: '#00000080',
  },
  titleLabel: {
    marginBottom: 30,
    marginTop: '25%',
  },
  subtitleLabel: {
    color: TEXT_COLOR,
    fontWeight: 700,
    fontSize: 28,
  },
  labels: {
    alignItems: 'center',
  },
});

export default Welcome;
