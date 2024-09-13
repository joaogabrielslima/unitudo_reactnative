import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

function DrawerMenu() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
      }}
    >
      <TouchableOpacity style={[styles.button, { width: 50, height: 50 }]}>
        <Ionicons name="search" size={50 * 0.6} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: 50, height: 50 }]}>
        <Ionicons name="heart-outline" size={50 * 0.6} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: 50, height: 50 }]}>
        <Ionicons name="chatbubble-outline" size={50 * 0.6} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: 50, height: 50 }]}>
        <Ionicons name="cog" size={50 * 0.6} color="#fff" />
      </TouchableOpacity>
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
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerMenu;
