import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ButtonCard = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Ionicons name={icon} size={55} color="#fff" />
    <Text style={styles.cardText}>{text}</Text>
    <View style={styles.feedbackContainer}>
      <Ionicons
        name="chatbubble-outline"
        size={20}
        color="#fff"
        style={styles.feedbackIcon}
      />
      <Ionicons name="thumbs-up-outline" size={20} color="#fff" />
    </View>
  </TouchableOpacity>
);

const PlaceItems = () => {
  const buttons = [
    {
      icon: 'home-outline',
      text: 'Casa 50m² - Individual\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'business-outline',
      text: 'Casa 50m² - Individual\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'home-outline',
      text: 'Casa 50m² - Compartilhada\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'business-outline',
      text: 'Casa 50m² - Individual\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'home-outline',
      text: 'Casa 50m² - Compartilhada\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'business-outline',
      text: 'Casa 50m² - Individual\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'home-outline',
      text: 'Casa 50m² - Compartilhada\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'business-outline',
      text: 'Casa 50m² - Individual\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'home-outline',
      text: 'Casa 50m² - Compartilhada\nRua xxxx\nBairo xxxx, SP',
    },
    {
      icon: 'business-outline',
      text: 'Casa 50m² - Individual\nRua xxxx\nBairo xxxx, SP',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.scrollView}
        persistentScrollbar={true}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 10,
          }}
        >
          {buttons.map((button, index) => (
            <ButtonCard
              key={index}
              icon={button.icon}
              text={button.text}
              onPress={() => console.log(`Button ${index + 1} pressed`)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop: 3,
  },
  scrollView: {
    borderRadius: 10,
    direction: 'row',
    justifyContent: 'start',
    gap: 10,
  },
  card: {
    backgroundColor: '#38a69d',
    borderRadius: 8,
    padding: 16,
    width: 150,
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  feedbackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  feedbackIcon: {
    marginRight: 8,
  },
});

export default PlaceItems;
