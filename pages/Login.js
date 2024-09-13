import React, { useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
  Alert,
  ActivityIndicator,
  Pressable,
} from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 200, y: 200 }));

  async function handleLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
      }

      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Main');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo, {
        toValue: { x: 130, y: 130 },
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo, {
        toValue: { x: 200, y: 200 },
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('./../assets/logo.png')}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.btnRegister}>
          <Pressable
            android_ripple={{ color: '#ccc' }}
            onPress={() => navigation.navigate('Reset')}
          >
            <Text style={styles.registerText}>Recuperar senha</Text>
          </Pressable>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSubmit} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color={'#FFFF'} size={'small'} />
          ) : (
            <Text style={styles.submitText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Pressable
            android_ripple={{ color: '#ccc' }}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.registerText}>Cadastre-se</Text>
          </Pressable>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A8F4D2',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 55,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#51C490',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 35,
  },
  submitText: {
    color: '#000',
    fontSize: 18,
  },
  btnRecuperar: {
    marginTop: -9,
  },
  recuperarText: {
    color: '#2196F3FF',
  },
  btnRegister: {
    marginTop: 15,
  },
  registerText: {
    color: '#2196F3FF',
  },
});
