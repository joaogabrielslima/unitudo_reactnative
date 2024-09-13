import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './pages/MainScreen';
import ResetPassword from './pages/ResetPassword';
import Signup from './pages/Signup';
import SearchPlace from './pages/SearchPlace';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Reset" component={ResetPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Search" component={SearchPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
