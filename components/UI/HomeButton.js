import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeButton = ({ onPress, size = 60 }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: size, height: size }]}
      onPress={onPress}
    >
      <Ionicons name="home-outline" size={size * 0.6} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#38a69d',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeButton;
