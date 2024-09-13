import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserProfileButton = ({ size = 50 }) => {
  return (
    <TouchableOpacity style={[styles.button, { width: size, height: size }]}>
      <Ionicons name="person-outline" size={size * 0.6} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#38a69d',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserProfileButton;
