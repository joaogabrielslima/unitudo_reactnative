import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ placeholder = 'Search...', sizeOfSearch = 20 }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2a9d8f',
        borderRadius: 15,
        paddingHorizontal: 15,
        height: sizeOfSearch + 30,
      }}
    >
      <Ionicons
        name="search-outline"
        size={sizeOfSearch}
        color="#fff"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#a8d5d0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a9d8f',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
});

export default SearchBar;
