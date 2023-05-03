import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ORANGE_PRIMARY } from '../consts';

function CustomButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: ORANGE_PRIMARY,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  text: {
    color: '#FBECE8',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default CustomButton;
