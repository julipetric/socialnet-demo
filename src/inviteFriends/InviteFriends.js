import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { DEFAULT_BACKGROUND, ORANGE_PRIMARY } from '../consts';
import FriendItem from '../components/FriendItem';

const friendsList = [
  'Jibreel Lillie',
  'Makyla Peel',
  'Monica Corona',
  'Zyla Calkins',
  'Elliott Dennis',
  'Navi Aycock',
  'Lev Sample',
  'Sanad Pearlman',
  'Kaizer Lawhorn',
  'Donte Wing',
  'Jensen Lavender',
  'Josiel Hanner',
  'Khylan Leaf',
  'Orly Baur',
  'Estefani Rodney',
  'Emrie Canady',
  'Charly Holcombe',
  'Alahna Roos',
  'Rorie Alleman',
  'Shia Alsup',
  'Hadasa Gustin',
  'Kennidy Mendieta',
  'Abdias Beller',
  'Krish Lind',
  'Lesly Gerber',
  'Adrien Delong',
  'Joleen Hance',
  'Alysson Schlegel',
  'Aishani Finke',
  'Billie Pickard',
];

function InviteFriends() {
  const navigation = useNavigation();

  const [selectedItems, setSelectedItems] = useState([]);
  const [filterText, setFilterText] = useState();

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const isItemSelected = useCallback(
    (item) => {
      return selectedItems.includes(item);
    },
    [selectedItems]
  );

  const onSelectedChange = useCallback(
    (item, selected) => {
      if (selected) setSelectedItems((currentItems) => [...currentItems, item]);
      else {
        setSelectedItems((currentItems) => currentItems.filter((i) => i !== item));
      }
    },
    [setSelectedItems]
  );

  const onNextPress = useCallback(() => {
    navigation.navigate('ConfirmFriends', { friends: selectedItems });
  }, [navigation, selectedItems]);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Entypo name="chevron-small-left" size={24} color="#555555" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.panel}>
        <Text style={styles.title}>Invite your friends</Text>
        {/*  <Text>Select All</Text> */}
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search"
            style={styles.input}
            value={filterText}
            onChangeText={setFilterText}
          />
          <TouchableOpacity onPress={() => setFilterText()}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <CustomButton title="Send invite" style={{ marginHorizontal: 12 }} onPress={onNextPress} />
      </View>
      <FlatList
        data={friendsList.filter((i) => i.toLowerCase().includes((filterText || '').toLowerCase()))}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
        renderItem={({ item }) => (
          <FriendItem
            item={item}
            selected={isItemSelected(item)}
            onSelectedChange={onSelectedChange}
          />
        )}
      />
    </View>
  );
}

export default InviteFriends;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#555555',
    fontSize: 16,
    fontWeight: '400',
  },
  panel: {
    backgroundColor: DEFAULT_BACKGROUND,
    padding: 16,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#808080',
    fontFamily: 'Roboto',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginLeft: 18,
    marginRight: 10,
    borderRadius: 8,
    marginVertical: 6,
    fontSize: 16,
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  cancelButton: {
    color: ORANGE_PRIMARY,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto',
    paddingHorizontal: 10,
  },
});
