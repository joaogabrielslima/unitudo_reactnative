import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signup({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  function handleCadastro() {
    // Adicione aqui a lógica de cadastro
    if (!nome || !email || !senha || !confirmSenha) {
      return Alert.alert('Atenção', 'Preencha todos os campos obrigatórios!');
    }

    if (senha !== confirmSenha) {
      return Alert.alert('Erro', 'As senhas não coincidem!');
    }

    navigation.navigate('Main');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./../assets/user.png')} style={styles.logo} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar E-mail"
        value={confirmEmail}
        onChangeText={setConfirmEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmSenha}
        onChangeText={setConfirmSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.cadastrarButton} onPress={handleCadastro}>
        <Text style={styles.cadastrarButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelarButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.cancelarButtonText}>Cancelar</Text>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 160,
    height: 160,
  },
  addButton: {
    marginTop: -40,
    backgroundColor: '#51C490',
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 24,
  },
  input: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 7,
    fontSize: 17,
  },
  cadastrarButton: {
    backgroundColor: '#51C490',
    width: '100%',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  cadastrarButtonText: {
    color: '#000',
    fontSize: 18,
  },
  cancelarButton: {
    marginTop: 10,
  },
  cancelarButtonText: {
    color: '#2196F3FF',
    fontSize: 16,
  },
});
