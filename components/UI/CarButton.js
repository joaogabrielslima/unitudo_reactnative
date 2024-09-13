import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const CarButton = ({ onPress, size = 60 }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: size, height: size }]}
      onPress={onPress}
    >
      <AntDesign name="car" size={size * 0.6} color="white" />
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

export default CarButton;
