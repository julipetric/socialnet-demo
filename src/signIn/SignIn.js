import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import CustomButton from '../components/CustomButton';
import SocialIcon from '../components/SocialIcon';
import { useNavigation } from '@react-navigation/native';
import { ORANGE_PRIMARY } from '../consts';
import SocialnetOrange from '../../assets/socialnet_orange.png';

function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState(false);

  const onSignIn = useCallback(() => {
    if (!email) setEmailError(true);
    if (!password) setPasswordError(true);
    if (email && password) navigation.navigate('Home');
  }, [navigation, email, password]);

  useEffect(() => {
    setEmailError(false);
  }, [email]);

  useEffect(() => {
    setPasswordError(false);
  }, [password]);

  return (
    <>
      <View style={styles.container}>
        <Image source={SocialnetOrange} style={styles.title} resizeMode="contain" />
        <Text style={styles.subtitle}>Sign In</Text>
        <Text style={styles.descriptionLabel}>Sign in with your email address</Text>
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
        {emailError && <Text style={styles.errorLabel}>You must enter your email</Text>}
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {passwordError && <Text style={styles.errorLabel}>You must enter your password</Text>}
        <CustomButton
          title="Sign in"
          onPress={onSignIn}
          style={{ marginBottom: 14, marginTop: 6 }}
        />
        <View>
          <Text style={styles.descriptionLabel}>Continue with a social account</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 8,
              paddingVertical: 6,
            }}
          >
            <SocialIcon name="facebook" />
            <SocialIcon name="twitter" />
            <SocialIcon name="reddit-alien" />
            <SocialIcon name="google" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 6,
            }}
          >
            <SocialIcon name="apple" text="Apple ID" />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.signUpButton}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1 },
  title: {
    justifyContent: 'center',
    height: 20,
    marginBottom: 20,
    width: '100%',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: '#232323',
  },
  descriptionLabel: {
    color: '#555555',
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 13,
    paddingTop: 26,
    paddingBottom: 8,
  },
  signUpButton: {
    color: ORANGE_PRIMARY,
    fontWeight: '700',
    fontSize: 17,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 6,
    fontSize: 16,
  },
  errorLabel: {
    color: 'red',
    marginLeft: 4,
  },
});

export default SignIn;
