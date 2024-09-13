import { StyleSheet, View } from 'react-native';
import SearchBar from './../components/UI/SearchBar';
import UserProfileButton from './../components/UI/UserProfileButton';
import MenuButton from './../components/UI/MenuButton';
import HomeButton from './../components/UI/HomeButton';
import CarButton from './../components/UI/CarButton';
import ItemsList from './../components/UI/ItemsList';
import DrawerMenu from '../components/UI/DrawerMenu';

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ gap: 30 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <UserProfileButton />

          <MenuButton />
        </View>
        <SearchBar placeholder="" />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <HomeButton onPress={() => navigation.navigate('Search')} />
          <CarButton />
        </View>
      </View>
      <ItemsList />
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
});

export default MainScreen;
