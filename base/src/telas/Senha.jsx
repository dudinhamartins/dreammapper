import React from 'react';
import { View, Image, TextInput, Button, StyleSheet, Text, Alert  } from 'react-native';
import { useState } from 'react';
import axios from 'axios';


const RedefinirSenha = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleResetSenha = async () => {
      try {
          // Verificar se o email está preenchido
          if (!email) {
              Alert.alert("Por favor, insira seu email.");
              return;
          }

          const data = {
              email: email
          }

          // Verificar se o email existe no banco de dados
          const response = await axios.post('http://10.0.2.2:8085/user/reset', data);

          if (response.status === 200) {
              // Exibir o formulário para trocar a senha
              setMostrarFormulario(true);
          } else if (response.status === 404) {
              Alert.alert("Email não encontrado. Por favor, verifique o email digitado.");
          }
      } catch (error) {
          if (error.response && error.response.status === 401) {
              Alert.alert('Email não encontrado. Por favor, verifique o email digitado');
          }
          else {
              Alert.alert('Erro ao resetar a senha:', error.message);
          }
      }
  };

  const handleTrocarSenha = async () => {
      try {
          // Verificar se as senhas coincidem
          if (novaSenha !== confirmarSenha) {
              Alert.alert('As senhas não coincidem.');
              return;
          }
          const data = {
              email: email,
              senha: novaSenha
          }

          // Fazer a solicitação para trocar a senha
          const response = await axios.post('http://10.0.2.2:8085/user/resetsenha', data);

          if (response.status === 200) {
              navigation.navigate("Login");
              Alert.alert('Senha trocada com sucesso.');
          } else {
              Alert.alert('Erro ao trocar a senha.');
          }
      } catch (error) {
          Alert.alert('Erro ao trocar a senha:', error.message);
      }
  };

  return (
      <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require("../../res/img/logo.png")}></Image>
        </View>
          <Text style={styles.title}>Esqueceu sua senha?</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
        />
          {!mostrarFormulario && (
              <View>
              <Button title="Resetar Senha"  onPress={handleResetSenha} color="#516c76" />
              </View>
          )}
          {mostrarFormulario && (
              <>
                  <TextInput
                      style={styles.input}
                      placeholder="Nova Senha"
                      value={novaSenha}
                      onChangeText={setNovaSenha}
                      secureTextEntry
                  />
                  <TextInput
                      style={styles.input}
                      placeholder="Confirmar Senha"
                      value={confirmarSenha}
                      onChangeText={setConfirmarSenha}
                      secureTextEntry
                  />
                  <Button title="Trocar Senha" onPress={handleTrocarSenha} color="#516c76" />
              </>
          )}
      </View>
  );
};

const styles = StyleSheet.create({

  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor:'#B0C4DE'
  },
  title: {
      fontSize: 24,
      fontWeight: '500',
      marginBottom: 20,
      color:'#516c76'
  },
  input: {
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    marginBottom: '3%',
    backgroundColor: 'white',
  },
  btn: {
      marginBottom: 100,
  },
  logo: {
    alignItems: 'center',
    width: '2',
    height: '2',
    marginTop: '-25%'
},

  });
export default RedefinirSenha;
