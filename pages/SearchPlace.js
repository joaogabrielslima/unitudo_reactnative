import { StatusBar } from 'expo-status-bar';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBar from './../components/UI/SearchBar';

import PlaceItems from '../components/UI/PlaceItems';
import { Ionicons } from '@expo/vector-icons';
import DrawerMenu from '../components/UI/DrawerMenu';

function SearchPlace({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ gap: 30 }}>
        <View style={{ justifyContent: 'start', flexDirection: 'row' }}>
          <TouchableOpacity
            style={[styles.button, { width: 50, height: 50 }]}
            onPress={() => navigation.navigate('Main')}
          >
            <Ionicons name="arrow-back-outline" size={50 * 0.6} color="#fff" />
          </TouchableOpacity>
        </View>
        <SearchBar placeholder="Para onde?" sizeOfSearch={50} />
      </View>
      <PlaceItems />
      <DrawerMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    backgroundColor: '#167F6C',
    flex: 1,
    paddingBottom: '0%',
  },
  searchInput: {
    borderWidth: 5,
    borderColor: 'red',
    width: '100%',
  },
  button: {
    backgroundColor: '#38a69d',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchPlace;
