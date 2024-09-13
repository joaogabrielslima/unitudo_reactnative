import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (!email) {
      return Alert.alert('Atenção', 'Informe o E-mail!');
    }
    // Simulação de envio de e-mail
    Alert.alert(
      'Enviado',
      'Enviamos um link para o e-mail informado com instruções para recuperação de senha.'
    );

    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./../assets/reset.png')} />
      </View>
      <Text style={styles.title}>Esqueceu sua senha?</Text>
      <Text style={styles.description}>
        Por favor, informe o E-mail associado a sua conta que enviaremos um link
        para o mesmo, com as instruções para restauração de sua senha.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A8F4D2',
    padding: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom: 10,
    color: '#222',
    fontSize: 20,
    borderRadius: 7,
    padding: 10,
  },
  button: {
    backgroundColor: '#51C490',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
