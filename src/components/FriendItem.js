import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'expo-checkbox';
import { DEFAULT_BACKGROUND } from '../consts';

function FriendAvatar({ name }) {
  return (
    <Image
      source={{ uri: `https://picsum.photos/seed/${name}/48` }}
      style={styles.avatar}
      resizeMode="cover"
    />
  );
}

function FriendItem({ item, selected, onSelectedChange, hideCheckbox }) {
  const onPress = useCallback(() => {
    onSelectedChange(item, !selected);
  }, [onSelectedChange, selected, item]);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FriendAvatar name={item} />
      <Text style={styles.name}>{item}</Text>
      {!hideCheckbox && (
        <Checkbox style={{ marginRight: 15, borderRadius: 3 }} color="#ED572F" value={selected} />
      )}
    </TouchableOpacity>
  );
}

FriendItem.defaultProps = {
  selected: false,
  hideCheckbox: false,
  onSelectedChange: () => {},
};

FriendItem.propTypes = {
  item: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onSelectedChange: PropTypes.func,
  hideCheckbox: PropTypes.bool,
};

export default FriendItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 4,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DEFAULT_BACKGROUND,
  },
  name: {
    flex: 1,
    color: '#1C1C1E',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  avatar: {
    borderRadius: 30,
    width: 48,
    height: 48,
    marginRight: 12,
  },
});
