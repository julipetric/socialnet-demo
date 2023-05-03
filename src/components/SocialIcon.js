import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { DEFAULT_BACKGROUND } from '../consts';

export const socialIconColors = {
  facebook: '#3b5998',
  twitter: '#00aced',
  google: '#dd4b39',
  'reddit-alien': '#ED001C',
};

function SocialIcon({ name, text, size }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <FontAwesome color={socialIconColors[name]} name={name} size={size} />
      {text && <Text style={styles.label}>{text}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#808080',
    flexDirection: 'row',
    minWidth: 50,
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND,
  },
  label: {
    paddingLeft: 14,
    color: '#808080',
    fontSize: 17,
    fontWeight: '700',
  },
});

SocialIcon.defaultProps = {
  text: undefined,
  size: 25,
};

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  size: PropTypes.number,
};

export default SocialIcon;
