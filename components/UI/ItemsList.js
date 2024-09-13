import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ButtonCard = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Ionicons name={icon} size={30} color="#fff" />
    <Text style={styles.cardText}>{text}</Text>
    <View style={styles.feedbackContainer}>
      <Ionicons
        name="chatbubble-outline"
        size={14}
        color="#fff"
        style={styles.feedbackIcon}
      />
      <Ionicons name="thumbs-up-outline" size={14} color="#fff" />
    </View>
  </TouchableOpacity>
);

const ItemsList = () => {
  const buttons = [
    {
      icon: 'home-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
    { icon: 'map-outline', text: 'Neque porro quisquam est qui dolorem ipsum' },
    {
      icon: 'cart-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
    {
      icon: 'calendar-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
    {
      icon: 'compass-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
    {
      icon: 'library-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
    {
      icon: 'calendar-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
    {
      icon: 'home-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
    {
      icon: 'cart-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
    {
      icon: 'compass-outline',
      text: 'Neque porro quisquam est qui dolorem ipsum',
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'baseline',
          width: '100%',
          gap: 10,
        }}
      >
        <View style={{ borderWidth: 2, borderColor: '#51C490', flex: 1 }} />
        <Text style={styles.title}>For you</Text>
        <View style={{ borderWidth: 2, borderColor: '#51C490', flex: 1 }} />
      </View>

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
            gap: 20,
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
    width: 140,
    height: 150,
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

export default ItemsList;
